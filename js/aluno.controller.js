class alunocontroller {
    constructor(service, view) {
        view.render(service.alunos)
        view.render(service.alunos)
        this.view = view
        this.service = service
    }

    add(aluno) {
        this.service.add(new alunomodel(aluno))
        this.view.render(this.service.alunos)
    }
}