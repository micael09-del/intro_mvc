alunos.forEach(aluno => {
    aluno.media = {}
    for(let materia in aluno.notas) {
        aluno.media[materia] = average(...aluno.notas[materia])
    }
 })

 console.log(alunos)

 const htmlHeader = document.createElement('tr')
 htmlHeader.innerHTML = '<td>Nome</td>'

 const htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => {
    console.log(materia)
    return `<td>${materia}</td>`
 }).join('')


console.log(htmlHeaderMaterias)
htmlHeader.innerHTML += htmlHeaderMaterias
console.log(htmlHeader.innerHTML)

document.querySelector('[data-table-alunos] thead').appendChild(htmlHeader)

const alunoservice = new alunoservice()

alunos.forEach(aluno => {
    alunoservice.addAluno(new alunomodel(aluno))
})

const alunoview = new alunoview(document.querySelector('[data-table-alunos]'))
const alunocontroller = new alunocontroller(alunoservice, alunoview)

document.querySelector('from').add