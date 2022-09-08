//semana1 requisito 1 criar tres variaveis, string, number e boolean
//requisito 2 criar 3 conjuntos de variaveis
const nome1 = ("Alex").toUpperCase()//string
const idade1 = 20 //number
const temCadastro1 = true //boolean

const nome2 = ("Maria").toUpperCase()//string
const idade2 = 40 //number
const temCadastro2 = false //boolean

const nome3 = ("Alberi").toUpperCase()//string
const idade3 = 50 //number
const temCadastro3 = true //boolean

//requisito 3 fazer a media das tre idades

const media = Number((idade1 + idade2 + idade3)/3).toFixed(2)//Acrescentei o toFixed para limitar as casas decimais caso numero seja fracionado

//requisito 4 imprimir a verificação de booleans

const checkCadastro = temCadastro1 && temCadastro2 && temCadastro3

console.log(media)//debug de verificação do requisito 3
console.log(checkCadastro)//debug de verificação do requisito 4

//Semana 2
//Criar mais 1 elemento que seja um array e que mantenha o tipo de dado string boolean ou number
 const cidade = ["Porto Alegre","São Paulo","Sergipe","Bahia"]

 //Mostrar tudo o que foi criado
 //titulo ou neste caso trazer a string nome sempre em maiusculo
 console.log("Nomes:"+nome1,nome2,nome3)
 console.log("Idades:"+idade1,idade2,idade3)
 console.log("Cadastros:"+ temCadastro1,temCadastro2,temCadastro3)
 console.log(`Array de cidades: ${cidade}`)

 console.log("Semana 3")//Semana 3

 //Requisito 1. Transforme os itens que criamos nas últimas semanas em objetos.

 const objeto1= {nome1,idade1,temCadastro1}
 const objeto2= {nome2,idade2,temCadastro2}
 const objeto3= {nome3,idade3,temCadastro3}

 console.log(objeto1,objeto2,objeto3)

 //requisito 2. Crie um array para guardar os objetos. Este array deve estar vazio

 const arrayObjeto=[]

//requisito 3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push()

arrayObjeto.push(objeto1,objeto2,objeto3)

console.log(arrayObjeto)