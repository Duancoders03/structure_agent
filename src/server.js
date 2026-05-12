const app = require('./app');
const http = require('http');

const sequelize = require('./config/database');

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
        console.log('Starting server anyway (DB features might not work)...');
    }

    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

startServer();
