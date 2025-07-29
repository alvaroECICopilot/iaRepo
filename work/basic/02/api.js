/*
Crea un API básico en Node.js utilizando el framework Express
- Define un endpoint que responda : "Hola mundo desde mi API"
- Muestra información por consola del arranque del API (como puede ser el puerto)
- Añade gestión de errores
*/

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    try {
        res.send('Hola mundo desde mi API');
    } catch (error) {
        console.error('Error en el endpoint /:', error);
        res.status(500).send('Error interno del servidor');
    }
});

// Middleware para rutas no encontradas
app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada');
});

// Middleware de gestión de errores generales
app.use((err, req, res, next) => {
    console.error('Error general:', err);
    res.status(500).send('Error interno del servidor');
});

app.listen(PORT, (err) => {
    if (err) {
        console.error('Error al iniciar el servidor:', err);
        process.exit(1);
    }
    console.log(`API corriendo en http://localhost:${PORT}`);
});