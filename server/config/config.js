// ========================
// Puerto
// ========================

process.env.PORT = process.env.PORT || 3000;

// ========================
// Entorno
// ========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// ========================
// Base de Datos
// ========================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://admin:4ucWBWLlrzYBRNo0@cluster0-1uc41.mongodb.net/cafe'
}

process.env.urlDB = urlDB;