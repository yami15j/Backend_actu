const express = require('express');
const cors = require('cors');

const app = express();

// 🚨 Render asigna el puerto automáticamente
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let mensajes = [];

// ✅ Endpoint de prueba
app.get('/api/estado', (req, res) => {
  res.json({
    status: 'Backend activo',
    totalMensajes: mensajes.length
  });
});

// ✅ Obtener mensajes
app.get('/api/mensajes', (req, res) => {
  res.json(mensajes);
});

// ✅ Guardar mensaje
app.post('/api/mensajes', (req, res) => {
  const { texto } = req.body;

  if (!texto || texto.trim() === '') {
    return res.status(400).json({ error: 'Mensaje vacío' });
  }

  const nuevoMensaje = {
    texto,
    fecha: new Date()
  };

  mensajes.push(nuevoMensaje);
  res.json(nuevoMensaje);
});

// 🚀 INICIO DEL SERVIDOR
app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en puerto ${PORT}`);
});
