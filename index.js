require('dotenv').config();
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Importar rutas
const criaturasRoutes = require('./routes/criaturas');

// Usar las rutas
app.use('/criaturas', criaturasRoutes);

app.get('/', (req, res) => {
    res.send('¡Hola! El servidor del calabozo está funcionando correctamente.');
});

// Usamos process.env.PORT para que Render elija el puerto automáticamente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`El servidor del calabozo está corriendo en el puerto ${PORT}`);
});