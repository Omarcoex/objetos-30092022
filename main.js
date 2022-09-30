// function elementoQuimicoBuscar(simbolo) {
//     return simboloQuimicos[simbolo]
// }
// const simboloQuimicos = {
//   A1: "Aluminio",
//   S: "Azufre",
//   C1: "Cloro",
//   A1: "Helio",
//   H1: "Buro",
//   LI: "Litio",
// };
// let sobrino = prompt("Ingrese el valor a buscar");

// alert(elementoQuimicoBuscar(sobrino))
// function elementoQuimicoBuscar(simbolo) {
//   let elementoQuimico = "";
//   switch (simbolo) {
//     case "A1":
//       elementoQuimico = "Aluminio";

//       break;
//     case "S":
//       elementoQuimico = "Azufre";

//       break;
//     case "C1":
//       elementoQuimico = "Cloro";
//       break;
//     case "A1":
//       elementoQuimico = "Aluminio";
//       break;
//     case "He":
//       elementoQuimico = "Aluminio";

//       break;
//       return elementoQuimico;
//   }

// }

// // Ejercicio Cuaderno
// const cuaderno={
//     color:rojo,
//     categoria:3,
// }

// const ordenPizza=[
// {
//     tipo:"Margarita",
//     tamaño:"Individual",
//     precio:8000,
//     extra:["Queso","champiñon","pina"],'para llevar':true,
//     foto:'./pizza.jpg'
// },
// {
//     tipo:"Cuatro quesos",
//     tamnio:"familiar",
//     precio:6000,
//     extra:["Queso","pimenton"],"para llevar:":false
// }
// ]

// const plantas = [
//   {
//     tipo: "Flores",
//     lista: ["rosas", "clavel", "roso"],
//   },
//   {
//     tipo: "Arbolrs",
//     lista: ["tupilin", "diente leon"],
//   },
// ];

const coleccionDeDiscos = {
  7853: {
    tituloDelAlbum: "Bee Gees Greates",
    artista: "Bee Gree",
    canciones: "Staylin', alive",
  },
  5439: {
    tituloDelAlbum: "Abba Gold",
  },
};

function actualizarDiscos(discos, id, propiedad, valor) {
  if (valor === "") {
    delete discos[id][propiedad];
  } else if (
    propiedad === "canciones" &&
    !discos[id].hasOwnProperty("canciones") === 0
  ) {
    discos[id][propiedad] = [];
    discos[id][propiedad].push(valor);
  }else if(    propiedad === "canciones" &&
  !discos[id].hasOwnProperty("canciones") === 0)
  
}
