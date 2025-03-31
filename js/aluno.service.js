class AlunoService {
    constructor() {
        this.alunos = []
    }

    add (aluno) {
        if (aluno instanceof alunomodel) {
            throw new Error('o aluno dve ser uma instancia de alunomodel')
        }
        this.alunos.push(aluno)
        
    }

    update(aluno) {
        return aluno
    }

    serachById(id) {
        return this.alunos.find(aluno => aluno.id === id)
    }

    updatelocalStorage() {
        let alunos = JSON.stringify(this.alunos)
        localStorage.setItem('alunos', alunos)
    }

    updateListAlunosFromLocalStorage() {
        let local = localStorage.getItem('alunos')
        let alunos = []
        if (local) {
            alunos = JSON.parse(local)
        }
        alunos.forEach(aluno => {
            this.add(new alunomodel(aluno))
        })

        
}

}