const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = 5000;

mongoose.connect('mongodb+srv://<username>:<password>@cluster0.yltlv05.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida com sucesso');
});

app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta: ${PORT}`);
});