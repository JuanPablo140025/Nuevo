require('dotenv').config();
const express = require('express');
const app = express();

// Middleware para que Express entienda JSON
app.use(express.json());

// Importar rutas
const criaturasRoutes = require('./routes/criaturas');

// Usar las rutas
app.use('/criaturas', criaturasRoutes);

// Encender el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`El servidor del calabozo está corriendo en http://localhost:${PORT}`);
});