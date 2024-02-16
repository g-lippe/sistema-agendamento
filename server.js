const express = require('express');
const connectToDb = require("./src/database/database")

connectToDb();
const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta: ${PORT}`);
});