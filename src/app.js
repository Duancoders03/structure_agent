require('dotenv').config();
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, 'views'),
    path.join(__dirname, 'modules')
]);
app.use(expressLayouts);
app.set('layout', 'layouts/main'); // Default layout

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Import Central Router
const mainRouter = require('./routes');

// Use Routes
app.use('/', mainRouter);

// Error handling
app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Trang không tìm thấy' });
});

module.exports = app;
