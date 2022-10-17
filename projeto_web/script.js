// const aries = "Mu de Áries";
// const idadeAries = 20;
// const ariesOuro = true;
// const poderAries = [
//   "Muralha de Cristal (Crystal Wall)",
//   "Revolução Estelar (Stardust Revolution)",
//   "Extinção Estelar (Starlight Extinction)",
//   "Telecinese (Psicosinese)",
//   "Rede de Cristal (Crystal Net)",
// ];

// const touro = "Aldebaran de Touro";
// const idadeTouro = 20;
// const touroOuro = true;
// const poderTouro = [
//   "Grande Chifre (Great Horn)",
//   "Punho de Aço (Steel Punch)",
//   "Esquiva Ilusória (Mirageshun)",
//   "Chifres Cosmicos (Cosmic Horns)",
// ];

// const gemeos = "Saga de Gêmeos";
// const idadeGemeos = 28;
// const gemeosOuro = true;
// const poderGemeos = [
//   "Explosão Galáctica (Galaxian Explosion)",
//   "Outra Dimensão (Another Dimension)",
//   "Satã Imperial (Guenrou Maou-ken)",
//   "Aniquilação Sensorial (Kou Soku Ken)",
// ];

// const mediaIdades = Number((idadeAries + idadeTouro + idadeGemeos) / 3).toFixed(
//   0
// ); //Acrescentei o toFixed para limitar as casas decimais caso numero seja fracionado

// const objetoAries = { aries, idadeAries, ariesOuro, poderAries };

// const objetoTouro = { touro, idadeTouro, touroOuro, poderTouro };

// const objetoGemeos = { gemeos, idadeTouro, gemeosOuro, poderGemeos };

// const todosObjetos = [];

// const signosOuro = ariesOuro && touroOuro && gemeosOuro;

// if (signosOuro == true) {
//   console.log("validado");
//   todosObjetos.push(objetoAries, objetoGemeos, objetoTouro);
// } else {
//   alert("O item não foi adicionado");
// }

//semana 2
// console.log(
//   `${aries.toUpperCase()} \n ${idadeAries} \n ${ariesOuro} \n ${poderAries}`
// );
// console.log(
//   `${touro.toUpperCase()} \n ${idadeTouro} \n ${touroOuro} \n ${poderTouro}`
// );
// console.log(
//   `${gemeos.toUpperCase()} \n ${idadeGemeos} \n ${gemeosOuro} \n ${poderGemeos}`
// );
// console.log(todosObjetos);
// console.log(objetoAries);

const objeto1 = {
  signo: "Áries",
  nome: "Mu de Áries",
  idade: 20,
  imagem:"./imagens/1muÁries.gif",
  cavaleiroOuro: true,
  historia:"https://pt.wikipedia.org/wiki/Os_Cavaleiros_do_Zod%C3%ADaco",
  poderes: [
    " Muralha de Cristal (Crystal Wall)", 
    " Revolução Estelar (Stardust Revolution)", 
    " Extinção Estelar (Starlight Extinction)", 
    " Telecinese (Psicosinese)", 
    " Rede de Cristal (Crystal Net)",
  ],
};

const objeto2 = {
  signo: "Touro",
  nome: "Aldebaran de Touro",
  idade: 20,
  imagem:"./imagens/2aldebaranTouro.gif",
  cavaleiroOuro: true,
  historia:"https://pt.wikipedia.org/wiki/Os_Cavaleiros_do_Zod%C3%ADaco",
  poderes: [
    " Grande Chifre (Great Horn)",
    " Punho de Aço (Steel Punch)",
    " Esquiva Ilusória (Mirageshun)",
    " Chifres Cosmicos (Cosmic Horns)",
  ],
};

const objeto3 = {
  signo: "Gêmeos",
  nome: "Saga de Gêmeos",
  idade: 28,
  imagem: "./imagens/3sagaGêmeos.gif",
  cavaleiroOuro: true,
  historia:"https://pt.wikipedia.org/wiki/Os_Cavaleiros_do_Zod%C3%ADaco",
  poderes: [
    " Explosão Galáctica (Galaxian Explosion)",
    " Outra Dimensão (Another Dimension)",
    " Satã Imperial (Guenrou Maou-ken)",
    " Aniquilação Sensorial (Kou Soku Ken)",
  ],
};

const arrayObjetos = [];

if (
  objeto1.cavaleiroOuro == true &&
  objeto2.cavaleiroOuro == true &&
  objeto3.cavaleiroOuro == true
) {
  //   console.log("validado passou pelo if e else");
  arrayObjetos.push(objeto1, objeto2, objeto3);
} else {
  alert("O item não foi adicionado");
}

// console.log(arrayObjetos)

// const mediaIdadesObjetos = Number((objeto1.idade + objeto1.idade + objeto2.idade) / 3).toFixed(
//     0
//   );

//   console.log(
//   `${objeto1.nome.toUpperCase()} \n ${objeto1.idade} \n ${objeto1.cavaleiroOuro} \n ${objeto1.poderes}`
// );
// console.log(
//     `${objeto2.nome.toUpperCase()} \n ${objeto2.idade} \n ${objeto3.cavaleiroOuro} \n ${objeto2.poderes}`
//   );
//   console.log(
//     `${objeto3.nome.toUpperCase()} \n ${objeto3.idade} \n ${objeto3.cavaleiroOuro} \n ${objeto3.poderes}`
//   );

//semana 5

let ariesPoder = ``;

for (i in objeto1.poderes) {
  ariesPoder += `${objeto1.poderes[i]}, `;
}

// console.log(ariesPoder);

let touroPoder = ``;

for (i in objeto2.poderes) {
  touroPoder += `${objeto2.poderes[i]}, `;
}

// console.log(touroPoder);

let gemeosPoder = ``;

for (i in objeto3.poderes) {
  gemeosPoder += `${objeto3.poderes[i]}, `;
}

// console.log(gemeosPoder);

// console.log(
//   `${objeto1.nome.toUpperCase()} \n ${objeto1.idade} \n ${
//     objeto1.cavaleiroOuro
//   } \n ${ariesPoder}`
// );
// console.log(
//   `${objeto2.nome.toUpperCase()} \n ${objeto2.idade} \n ${
//     objeto3.cavaleiroOuro
//   } \n ${touroPoder}`
// );
// console.log(
//   `${objeto3.nome.toUpperCase()} \n ${objeto3.idade} \n ${
//     objeto3.cavaleiroOuro
//   } \n ${gemeosPoder}`
// );

//serve para dar manutenção no meus objetos
for (let i in arrayObjetos) {
//   console.log(arrayObjetos[i]);
}

//semana6
function retornaObjeto(refbusca) {
  let stringObjeto = ``;
  stringObjeto = refbusca;
  // console.log(stringObjeto);
    // return stringObjeto
}

// retornaObjeto(objeto1);

// function consulta(arrayObj, string) {
//   let consulta = {};
//   for (let i in arrayObj) {
//     for (let j in arrayObj[i]) {
//       if (arrayObj[i][j] === string) {
//         //condição
//         consulta = arrayObj[i];
//       }
//     }
//   }

  const consulta = (arrayObj, input) => {
    for (let i in arrayObj) {
      for (let j in arrayObj[i]) {
        if (arrayObj[i][j] === input) {
          let main = document.getElementById("main")
          let div = document.createAttribute("div")
          let section = document.createElement("section")
          let imagem = document.createElement("img")
          let ul = document.createElement("ul")
          let li2 = document.createElement("li")
          let li3 = document.createElement("li")
          let li4 = document.createElement("li")
          let a = document.createElement("a")
      
          div.setAttribute("id","conteudo-listas")
          section.setAttribute("id","itens-imagens")
          imagem.src = arrayObj[i].imagem
          a.setAttribute("href",arrayObj[i].historia)
          a.innerHTML = arrayObj[i].signo.toUpperCase()

          li2.innerHTML = `Nome: ${arrayObj[i].nome}`
          li3.innerHTML = `Idade: ${arrayObj[i].idade} anos`
          li4.innerHTML = `Poderes: ${arrayObj[i].poderes}`
      
          main.appendChild(div)
          div.appendChild(section)          
          section.appendChild(imagem)
          section.appendChild(ul)
          ul.appendChild(li2)
          ul.appendChild(li3)
          ul.appendChild(li4)
          
        }
      }
    }
  // console.log(consulta);
    // return consulta
}

for (i in arrayObjetos){
    let div = document.getElementById("conteudo-listas")
    let section = document.createElement("itens-imagens")
    let imagem = document.createElement("img")
    let ul = document.createElement("ul")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    let li4 = document.createElement("li")
    let a = document.createElement("a")

    section.setAttribute("id","itens-imagens")
    imagem.src = arrayObjetos[i].imagem
    a.setAttribute("href",arrayObjetos[i].historia)
    a.innerHTML = arrayObjetos[i].signo.toUpperCase()
    li2.innerHTML = `Nome ${arrayObjetos[i].nome}`
    li3.innerHTML = `Idade: ${arrayObjetos[i].idade} anos`
    li4.innerHTML = `Poderes: ${arrayObjetos[i].poderes}`

    div.appendChild(section)
    
    section.appendChild(imagem)
    section.appendChild(ul)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    li1.appendChild(a)

}

function localizar(event){
  event.preventDefault()
  let input = document.getElementById("input").value().toLowercase()
  if (input === "") {
    alert("digite novamente")
  } else {
    document.getElementById("conteudo-listas").remove()

    consulta(arrayObjetos , input)
  }
}
