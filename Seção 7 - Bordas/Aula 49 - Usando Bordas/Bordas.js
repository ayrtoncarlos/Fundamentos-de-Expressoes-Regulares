const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // ^ Indica inicio de linha/string
console.log(texto.match(/r$/gi)) // $ Indica final de linha/string

console.log(texto.match(/^r.*r$/gi)) // Problema do dotall