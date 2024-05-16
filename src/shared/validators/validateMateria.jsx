export const validateMateria = (materia) => {
    return materia && materia.length >= 1 && materia.length <= 20
}

export const materiaValidateMessage = 'La materia debe de tener entre 1 y 20 caracteres'

