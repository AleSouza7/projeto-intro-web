//semana1 requisito 1 criar tres variaveis, string, number e boolean
//requisito 2 criar 3 conjuntos de variaveis
const nome1 = "Alex"//string
const idade1 = 20 //number
const temCadastro1 = true //boolean

const nome2 = "Maria"//string
const idade2 = 40 //number
const temCadastro2 = false //boolean

const nome3 = "Alberi"//string
const idade3 = 50 //number
const temCadastro3 = true //boolean

//requisito 3 fazer a media das tre idades

const media = Number((idade1 + idade2 + idade3)/3).toFixed(2)//Acrescentei o toFixed para limitar as casas decimais caso numero seja fracionado

//requisito 4 imprimir a verificação de booleans

const checkCadastro = temCadastro1 && temCadastro2 && temCadastro3

console.log(media)//debug de verificação do requisito 3
console.log(checkCadastro)//debug de verificação do requisito 4