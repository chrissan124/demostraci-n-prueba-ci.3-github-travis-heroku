require('dotenv').config()
const express = require('express')
const logger = require("./middlewares/RequestLogger")
const operation = require("./operations")
const app = express()
const port = process.env.PORT

app.use(logger.logRequest);

// CÓDIGO REPLICABLE
app.get('/sum-operation', (req, res) => {
  const {a, b} = req.query;
  const sum = operation.sumOperation(a, b);

  if(Number.isNaN(sum)){
    res.send(`ERROR AL REALIZAR LA SUMA (DATOS INVÁLIDOS)`);
  }else{
    res.send(`RESULTADO DE SUMA: ${a} + ${b} = ${sum}`);
  }
})
// FIN DE CÓDIGO REPLICABLE

app.get('/division-operation', (req, res) => {
  const {a, b} = req.query;

  if(b == 0){
    res.send(`ERROR AL REALIZAR LA DIVISION (DIVISION ENTRE CERO NO PERMITIDA)`);
    return;
  }

  const division = operation.divisionOperation(a, b);

  if(Number.isNaN(division)){
    res.send(`ERROR AL REALIZAR LA DIVISION (DATOS INVÁLIDOS)`);
  }else{
    res.send(`RESULTADO DE DIVISION: ${a} / ${b} = ${division}`);
  }
})

app.get('/status', (req, res) => {
  res.json({message: 'HOLA MUNDO (SERVIDOR ACTIVO)', status: 200})
})

app.listen(port, () => {
  console.log(`SERVIDOR ACTIVO EN: http://localhost:${port}`)
})
