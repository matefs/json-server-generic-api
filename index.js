const express = require('express');
const jsonServer = require('json-server');

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = 3000;

app.use(middlewares);
app.use(router);

app.listen(port, () => {
  console.log(`Servidor json-server está rodando em http://localhost:${port}`);
});
