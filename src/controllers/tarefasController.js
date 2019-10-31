const tarefas = require('../model/tarefas.json');

exports.get = (req, res) => {
    res.status(200).send(tarefas)
}

exports.getTarefasById = (req, res) => {
        const id = req.params.id
        const idTarefa = tarefas.find(idTarefa => idTarefa.id == id)
        res.status(200).send(idTarefa)
        }

        