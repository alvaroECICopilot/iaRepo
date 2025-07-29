/*
Crea un API básico en Node.js utilizando el framework Express
- Define un endpoint que responda : "Hola mundo desde mi API"
- Muestra información por consola del arranque del API (como puede ser el puerto)
- Asegúrate de que el API se pueda ejecutar sin errores
*/
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    try {
        res.send('Hola mundo desde mi API');
    } catch (error) {
        console.error('Error handling / request:', error);
        res.status(500).send('Error interno del servidor');
    }
});

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada');
});

// Middleware para manejo de errores generales
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).send('Error interno del servidor');
});

app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting the server:', err);
        process.exit(1);
    }
    console.log(`API is running on http://localhost:${PORT}`);
});

