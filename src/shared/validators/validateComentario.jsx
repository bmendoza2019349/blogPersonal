export const validateComentario = (comentario) => {
    return comentario.length >= 5 && comentario.length <= 50
}

export const comentarioValidateMessage = 'El comentario debe de tener entre 5 y 50 caracteres'

