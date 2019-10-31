const express = require('express');
const router = express.Router();
//instanciando métodos que tratam EXCLUSIVAMENTE de router 

router.get('/', function (req, res) {
    res.status(200).send({
        title: 'Meu primeiro servidor <3',
        version: '0.0.1'
    })
})

module.exports = router;