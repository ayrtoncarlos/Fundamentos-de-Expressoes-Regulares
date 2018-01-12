const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// Quantificadores são gulosos (Greedy)...
console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))

// Quantificador não guloso (Lazy)...
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))