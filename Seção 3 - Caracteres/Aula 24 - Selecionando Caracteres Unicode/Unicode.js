// No início...
// Um byte (8 bits) - 256 Caracteres
// Símbolos, Pontuação, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500 Caracteres
// +Símbolos, +Pontuações, A-Z, a-z, 0-9

// Unicode
// Quantidades de Bytes Variável = Expansível
// Suporta mais de 1 Milhão de Caracteres
// Atualmente tem mais de 100.000 Caracteres Atribuidos

// https://unicode-table.com/pt/

const texto = 'aʬC௵d'

console.log(texto.match(/\u02AC|\u0BF5/g))