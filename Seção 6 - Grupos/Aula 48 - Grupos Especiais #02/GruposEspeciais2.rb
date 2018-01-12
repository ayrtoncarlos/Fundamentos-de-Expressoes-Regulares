texto = 'supermercado superação hiperMERCADO Mercado'

puts texto.scan(/(?:super)[\wÀ-ü]+/i).join(' ')

# Positive Lookbehind
puts texto.scan(/(?<=super)[\wÀ-ü]+/i).join(' ')

# Negative Lookbehind
puts texto.scan(/(?<!super)mercado/i)