//Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];

/* Crea una lista de lenguajes de programación llamada 
"lenguagesDeProgramacion con los siguientes elementos:
 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
 */

 let lenguagesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];

 /* Agrega a la lista "lenguagesDeProgramacion los siguientes elementos:
  'Java', 'Ruby' y 'GoLang'.
*/

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

console.log(lenguagesDeProgramacion);

//Crea una función que muestre en la consola
// todos los elementos de la lista "lenguagesDeProgramacion.

function mostrarArray(arreglo){
  return console.log(arreglo);
}
mostrarArray(lenguagesDeProgramacion);

/*  Crea una función que muestre en la consola 
    todos los elementos de la lista 
    "lenguagesDeProgramacion en orden inverso. */

function mostrarArrayInvertido(arreglo){
  arreglo.reverse();
    return console.log(arreglo);
}

mostrarArrayInvertido(lenguagesDeProgramacion);

/* Crea una función que calcule el promedio
   de los elementos en una lista de números. */

function promedioArray(arreglo){
  let promedio =0;
  let suma =0;
  for (let index = 0; index < arreglo.length; index++){
            suma = suma + arreglo[index];
  }
  console.log(suma);
  promedio = suma / arreglo.length;

  return console.log(`el promedio del arreglo es ${promedio}`);

 }
let arrayEjemplo = [5,5,5,5];
let arrayEjemplo2 = [2,2,2,2];

 promedioArray(arrayEjemplo);

 /* Crea una función que muestre en la consola
     el número más grande y el número más pequeño en una lista. */

function pequeGrande(arreglo){
  let peque = Math.min(...arreglo);
  let grande = Math.max(...arreglo);
return console.log(`El menor es ${peque} y el mayor es ${grande}`);
}

pequeGrande(arrayEjemplo);

//Crea una función que devuelva la suma de todos los elementos en una lista.

function sumarArray(arreglo){
  let suma =0;
  for (let index = 0; index < arreglo.length; index++) {
          suma+= arreglo[index];
  }

  return suma;
}

console.log('La suma es: ', sumarArray(arrayEjemplo));

/* Crea una función que devuelva la posición en la
 lista donde se encuentra un elemento pasado como
  parámetro, o -1 si no existe en la lista. */

  function hallarPosicion(numero,arreglo){
    let posicion = false;

    for(let index =0; index < arreglo.length; index ++){
      if(numero === arreglo[index]){
        console.log(`el valor se encontro en la posicion ${index}`);
        posicion =true;
        break;
      } 
    }
    
    if(posicion ==false){
      return console.log('-1');
    }
  }

hallarPosicion(22,arrayEjemplo);


/* Crea una función que reciba dos listas de números del mismo tamaño
 y devuelva una nueva lista con la suma de los elementos uno a uno. */

 function juntarArray(array1, array2){
  let suma = [];
  if(array1.length != array2.length){
    console.log('Debe mostrar dos array del mismo tamaño');
  } else{
    for(let i =0; i <array1.length; i++){
      suma.push(array1[i] + array2[i]);
    }
    return console.log(suma);
  }
  
 }
 juntarArray(arrayEjemplo,arrayEjemplo2);

 /*Crea una función que reciba una lista de números
  y devuelva una nueva lista con el cuadrado de cada número. */

  function cuadradoArray(arreglo){
    let resultado =[];
    for (let index = 0; index < arreglo.length; index++) {
      resultado.push((arreglo[index]*arreglo[index])); 
    }
    return resultado;
  }

  console.log(cuadradoArray(arrayEjemplo));