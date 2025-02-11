// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var nomayus=[nombre[0].toUpperCase()]
   for(i=1; i < nombre.length ;i++){
    nomayus = nomayus + nombre[i];
  }
    return nomayus;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma=0; 
  for(i=0;i<numeros.length;i++){
     suma=suma+numeros[i];
  }
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  
  //  for(i=0;i<array.length;i++){
  //  array[i];
 // }
 array.forEach(cb)
//var iteraccion=array.forEach(function(valor)){
 // cb(valor);
//})
//return iteraccion;
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
 // var arreglo = [4,8,9,6,13];
 // array.forEach(cb);
//  arreglo = cb();
var nuevoarray = array.map(function(elemento){
  return cb(elemento);
});
  return nuevoarray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
 // array = ['amigo','vecino','ayuda','juez','araña']
  var filtro=[]
  for(var i=0;i<array.length;i++){
      if (array[i][0]==="a"){
        filtro.push(array[i]);
      }
  }
return filtro;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
