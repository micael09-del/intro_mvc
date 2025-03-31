class MateriaService {
    constructor() {

        this.materias = []
        this.updateListMateriasFromLocalStorage()
    }

    add(materia) {
        if (materia instanceof MateriaModel) {
            throw new Error('a materia deve ser uma instancia de MateriaModel')
        }
        this.materias.push(materia)
        this.updatelocalStorage()
    }

    update(materia) {
        return materia
    }

    searchById(id) {
        return this.materias.find(materia => materia.id === id)
    }

    getALL() {
        return this.materias
    }

    updatelocalStorage() {
        let materias = JSON.stringify(this.materias)
        localStorage.setItem('materias', materias)
    }

    updateListMateriasFromLocalStorage() {
        let local = localStorage.getItem('materias')
        let materias = []
        if (local) {
            materias = JSON.parse(local)
        }
        materias.forEach(materia => {
            this.add(new MateriaModel(materia))
        })

    }
}