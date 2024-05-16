export const validationIma = (url) => {
  const regex = /^(ftp|http|https):\/\/[^ "]+$/
  
    return regex.test(url)
}

export const imaValidationMessage = 'Esta no es una URL válida'
