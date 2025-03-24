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
}


