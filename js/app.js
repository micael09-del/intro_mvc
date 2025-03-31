const MateriaService = new MateriaService() 
let materias = MateriaService.getALL()
if(materias.lenght === 0) {
    MateriaService.add(new MateriaModel({nome: 'back-end1'}))
    MateriaService.add(new MateriaModel({nome: 'front-end2'}))
    MateriaService.add(new MateriaModel({nome: 'banco de dados'}))
    MateriaService.add(new MateriaModel({nome: 'ferramentas web'}))
}

const AlunoService = new AlunoService()

const alunoview = new AlunoView(
    document.querySelector('[data-table-alunos]'),
    materiaService.getALL())
    

const alunoController = new AlunoController(alunoview, AlunoService, MateriaService)

document.querySelector('from').addEventListener('submit', function (event) {
    event.preventDefault()
    alunoController.adiciona(event.target)
    event.target.reset()
})