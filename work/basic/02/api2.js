const express = require('express');

const app = express();
const PORT = 3000;

// Endpoint base que muestra información de la API
app.get('/', (req, res) => {
    res.json({
        message: 'API funcionando correctamente',
        port: PORT
    });
});

// Middleware de gestión de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Ha ocurrido un error en el servidor'
    });
});

// Levantar la API en el puerto 3000
app.listen(PORT, () => {
    console.log(`API escuchando en el puerto ${PORT}`);
});