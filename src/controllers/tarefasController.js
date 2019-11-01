const tarefas = require('../model/tarefas.json');

exports.get = (req, res) => {
    res.status(200).send(tarefas)
}

exports.getTarefasById = (req, res) => {
    const id = req.params.id
    const idTarefa = tarefas.find(idTarefa => idTarefa.id == id)

    if (!idTarefa) {
        res.send("Tarefa não encontrada")

    }
    res.status(200).send(idTarefa)
}
exports.getTarefasConcluidas = (req, res) => {
    const tarefaConcluida = tarefas.filter(tarefaConcl => tarefaConcl.concluido == "true") 

    res.status(200).send(tarefaConcluida)
}




//"dataInclusao
//"dataConclusao getDataConclusao
//"concluido": "true", getTarefasConcluidas
//"descricao": "Tarefa 1 - Organizar a classe trabalhadora", getDescricao
//"nomeColaboradores": "Líderanças do Sindicato*/ getColaborador 