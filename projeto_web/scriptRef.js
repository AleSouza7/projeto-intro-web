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
  cavaleiroOuro: true,
  poderes: [
    "Muralha de Cristal (Crystal Wall)",
    "Revolução Estelar (Stardust Revolution)",
    "Extinção Estelar (Starlight Extinction)",
    "Telecinese (Psicosinese)",
    "Rede de Cristal (Crystal Net)",
  ],
};

const objeto2 = {
  signo: "Touro",
  nome: "Aldebaran de Touro",
  idade: 20,
  cavaleiroOuro: true,
  poderes: [
    "Grande Chifre (Great Horn)",
    "Punho de Aço (Steel Punch)",
    "Esquiva Ilusória (Mirageshun)",
    "Chifres Cosmicos (Cosmic Horns)",
  ],
};

const objeto3 = {
  signo: "Gêmeos",
  nome: "Saga de Gêmeos",
  idade: 28,
  cavaleiroOuro: true,
  poderes: [
    "Explosão Galáctica (Galaxian Explosion)",
    "Outra Dimensão (Another Dimension)",
    "Satã Imperial (Guenrou Maou-ken)",
    "Aniquilação Sensorial (Kou Soku Ken)",
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
//   console.log(stringObjeto);
    return stringObjeto
}

// retornaObjeto(objeto1);

function consulta(arrayObj, string) {
  let consulta = {};
  for (let i in arrayObj) {
    for (let j in arrayObj[i]) {
      if (arrayObj[i][j] === string) {
        //condição
        consulta = arrayObj[i];
      }
    }
  }
//   console.log(consulta);
    return consulta
}

// consulta(arrayObjetos, "Áries");
