// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://athosfabricio:athoswanessa@cluster0.rmjq9ii.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const clienteSchema = new mongoose.Schema({
  nome: String,
  email: String,
  numero: String,
});

const Cliente = mongoose.model('Cliente', clienteSchema);

app.post('/api/clientes', async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.send(cliente);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/api/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.send(clientes);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
