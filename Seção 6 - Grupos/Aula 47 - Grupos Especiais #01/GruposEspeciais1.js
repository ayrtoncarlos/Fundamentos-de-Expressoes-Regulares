const texto = 'João é calmo, mas no trasito fica nervoso.'

console.log(texto.match(/[\wÀ-ü]+/gi))

// Positive Lookahead
console.log(texto.match(/[\wÀ-ü]+(?=,)/gi))
console.log(texto.match(/[\wÀ-ü]+(?=\.)/gi))
console.log(texto.match(/[\wÀ-ü]+(?=, mas)/gi))

// Negative Lookahead
console.log(texto.match(/[\wÀ-ü]+\b(?!,)/gi))
console.log(texto.match(/[\wÀ-ü]+[\s|\.](?!,)/gi))