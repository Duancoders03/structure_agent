---
name: postgres-patterns
description: Các mẫu database PostgreSQL để tối ưu hóa truy vấn, thiết kế lược đồ, lập chỉ mục và bảo mật. Dựa trên các thực hành tốt nhất của Supabase.
origin: ECC
---

# Các Mẫu Thiết kế PostgreSQL

Tham chiếu nhanh các thực hành tốt nhất cho PostgreSQL. Để được hướng dẫn chi tiết, hãy sử dụng agent `database-reviewer`.

## Khi nào cần Kích hoạt

- Viết các truy vấn SQL hoặc migrations.
- Thiết kế lược đồ cơ sở dữ liệu (schema).
- Khắc phục sự cố các truy vấn chậm.
- Triển khai Bảo mật cấp hàng (Row Level Security - RLS).
- Thiết lập gom nhóm kết nối (connection pooling).

## Tham chiếu Nhanh

### Bảng tra cứu Index

| Mẫu Truy vấn | Loại Index | Ví dụ |
|--------------|------------|---------|
| `WHERE col = giá_trị` | B-tree (mặc định) | `CREATE INDEX idx ON t (col)` |
| `WHERE col > giá_trị` | B-tree | `CREATE INDEX idx ON t (col)` |
| `WHERE a = x AND b > y` | Composite (Tổng hợp) | `CREATE INDEX idx ON t (a, b)` |
| `WHERE jsonb @> '{}'` | GIN | `CREATE INDEX idx ON t USING gin (col)` |
| `WHERE tsv @@ query` | GIN | `CREATE INDEX idx ON t USING gin (col)` |
| Time-series ranges | BRIN | `CREATE INDEX idx ON t USING brin (col)` |

### Tham chiếu Kiểu Dữ liệu

| Trường hợp Sử dụng | Kiểu Đúng | Cần Tránh |
|----------|-------------|-------|
| IDs | `bigint` | `int`, random UUID |
| Chuỗi văn bản | `text` | `varchar(255)` |
| Dấu thời gian | `timestamptz` | `timestamp` |
| Tiền tệ | `numeric(10,2)` | `float` |
| Cờ (Flags) | `boolean` | `varchar`, `int` |

### Các Mẫu Phổ biến

**Thứ tự trong Composite Index:**
```sql
-- Các cột so khớp bằng (equality) đứng trước, sau đó đến các cột khoảng (range)
CREATE INDEX idx ON orders (status, created_at);
-- Phù hợp cho: WHERE status = 'pending' AND created_at > '2024-01-01'
```

**Covering Index:**
```sql
CREATE INDEX idx ON users (email) INCLUDE (name, created_at);
-- Tránh việc tra cứu bảng cho SELECT email, name, created_at
```

**Partial Index (Index một phần):**
```sql
CREATE INDEX idx ON users (email) WHERE deleted_at IS NULL;
-- Index nhỏ hơn, chỉ bao gồm những người dùng đang hoạt động
```

**RLS Policy (Đã tối ưu):**
```sql
CREATE POLICY policy ON orders
  USING ((SELECT auth.uid()) = user_id);  -- Bọc trong SELECT!
```

**UPSERT:**
```sql
INSERT INTO settings (user_id, key, value)
VALUES (123, 'theme', 'dark')
ON CONFLICT (user_id, key)
DO UPDATE SET value = EXCLUDED.value;
```

**Phân trang bằng Cursor (Cursor Pagination):**
```sql
SELECT * FROM products WHERE id > $last_id ORDER BY id LIMIT 20;
-- O(1) so với OFFSET có độ phức tạp O(n)
```

**Xử lý Hàng đợi (Queue Processing):**
```sql
UPDATE jobs SET status = 'processing'
WHERE id = (
  SELECT id FROM jobs WHERE status = 'pending'
  ORDER BY created_at LIMIT 1
  FOR UPDATE SKIP LOCKED
) RETURNING *;
```

### Phát hiện Anti-Pattern (Mẫu thiết kế xấu)

```sql
-- Tìm các khóa ngoại chưa được đánh index
SELECT conrelid::regclass, a.attname
FROM pg_constraint c
JOIN pg_attribute a ON a.attrelid = c.conrelid AND a.attnum = ANY(c.conkey)
WHERE c.contype = 'f'
  AND NOT EXISTS (
    SELECT 1 FROM pg_index i
    WHERE i.indrelid = c.conrelid AND a.attnum = ANY(i.indkey)
  );

-- Tìm các truy vấn chậm
SELECT query, mean_exec_time, calls
FROM pg_stat_statements
WHERE mean_exec_time > 100
ORDER BY mean_exec_time DESC;

-- Kiểm tra bảng bị bloat (phình to)
SELECT relname, n_dead_tup, last_vacuum
FROM pg_stat_user_tables
WHERE n_dead_tup > 1000
ORDER BY n_dead_tup DESC;
```

### Mẫu Cấu hình (Configuration Template)

```sql
-- Giới hạn kết nối (điều chỉnh theo RAM)
ALTER SYSTEM SET max_connections = 100;
ALTER SYSTEM SET work_mem = '8MB';

-- Thời gian chờ (Timeouts)
ALTER SYSTEM SET idle_in_transaction_session_timeout = '30s';
ALTER SYSTEM SET statement_timeout = '30s';

-- Giám sát
CREATE EXTENSION IF NOT EXISTS pg_stat_statements;

-- Bảo mật mặc định
REVOKE ALL ON SCHEMA public FROM public;

SELECT pg_reload_conf();
```

## Liên quan

- Agent: `database-reviewer` - Quy trình đánh giá database đầy đủ
- Skill: `clickhouse-io` - Các mẫu phân tích ClickHouse
- Skill: `backend-patterns` - Các mẫu thiết kế API và backend

---

*Dựa trên Supabase Agent Skills (nguồn: Supabase team) (Giấy phép MIT)*
