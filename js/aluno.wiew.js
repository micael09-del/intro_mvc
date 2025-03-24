class alunoview{
    constructor(table) {
        this.tablelist = table
        this.tableheader = this.tablelist.querySelector('thead')
        this.tablebody = this.tablelist.querySelector('tbody')
        this.materias = ["backend_1", "frontend_2", "bancodados_3", "ferramentas"]

        this.renderHeader()
    }

    renderHeader() {
        const htmlHeader = document.createElement('tr')
        htmlHeader.innerHTML = '<td>Nome</td>'
    
        const htmlHeaderMaterias = this.materias.map(materia => {
            return `<td>${materia}</td>`
        }).join('')
    
        htmlHeader.innerHTML += htmlHeaderMaterias
        this.tableheader.appendChild(htmlHeader)
    }

    render() {
        this.tablebody.innerHTML = ''
        alunos.array.forEach(aluno => {
            let htmlrow = document.createElement('tr')
            htmlrow.innerHTML = `<td>${aluno.nome}</td>`
            this.materias.forEach(materia => {
                htmlrow.innerHTML += `<td>${aluno.notas[materia]}</td>`

            })
            this.tablebody.appendChild(htmlrow)
        });
    }
}

