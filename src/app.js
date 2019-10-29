const express = require('express');
const app = express();

//rotas
const index = require('./routes/index');
const tarefas = require('./routes/tarefasRoute');

app.use(function (req, res, next) {

    //declaração do cabeçalho 
    //headers > são etiquetas do cabeçalho 
    res.header('Access-Control-Allow-Origin', '*') //*qualquer lugar - modo promiscuo 
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next();
})

app.use('/', index)
//toda vez q chegar uma requisição na '/' > chama index 
app.use('/tarefas', tarefas)
module.exports = app
//disponibilizando app pra toda aplicação 

