class alunomodel {
    constructor({nome, _id, notas} = { notas: {}}) {
        this.nome = nome 
        this._id = _id !== undefined ? _id : this.generateId()
        this.notas = {...notas}
        this.media = {}

        for(let materia in this.notas) {
            this.media[materia] = this.average(...this.notas[materia])
        }

    }
    
    generateId() {
        alunomodel.maxId += 1
        return alunomodel.maxId
    }
}

