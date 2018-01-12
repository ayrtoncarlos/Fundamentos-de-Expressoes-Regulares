const texto = 'Bom\ndia'

console.log(texto.match(/.../gi))
console.log(texto.match(/..../gi)) // O ponto não engloba o \n

// dotall - Algumas linguagens tem uma flag /expressão/s, mas JS não!