// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  //let array= [];
  //let claves = Object.keys(objeto); 
  //let valores = Object.values(objeto);
  //for(let i=0; i< claves.length; i++){
  //  for(let x=0; x< valores.length; x++){
  //    let letra=String(claves[i]);
  //    array.push(letra +" , "+ valores[x]);
  //  }
  //}
  //return array;
  return Object.entries(objeto);
  
}
  

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
      var objeto = {}; 
    //for(var i in string){
      for(var i=0;i<string.length ;i++){
        objeto[string[i]] = ( objeto[string[i]] || 0 ) + 1; // Incrementamos el valor si el elemento ya existe
    }
    console.log(objeto);
    return objeto;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las string mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  //var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
  let palabra="";
  let resto="";
  for (let i in s){
       if (s[i]===s[i].toUpperCase()){
          palabra=palabra + s[i]
       }
        if(s[i]===s[i].toLowerCase()){
          resto=resto+s[i];
        } 
      }
  palabra = palabra + resto;
  console.log(palabra);
  return palabra;
}



  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
//  var invertida="";
//  for (var i=str.length; i>=0 && i<= str.length;i--){
//      invertida=invertida + str[i]
      //console.log(str[i]);
//  }
  //console.log (invertida);
// return invertida;
//}
//String.prototype.reverse =  function (){
function asAmirror(str) {  
//console.log(str.length);

var invertida ="";
for (var i=str.length-1; i>=0 ;i--){
    invertida += str.charAt(i);
    }
 var palabra =invertida.split(" ");
 var frase="";
for(var i = palabra.length-1 ;i >= 0;i--){
      if(frase===""){
        frase += palabra[i];
      }
      else { 
      frase += " " + palabra[i];}
   }   
return frase;
}


  
function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero=String(numero);
  var num="";
  for (i=numero.length-1;i>=0;i--){
       num = num + numero[i]; 
  }
  if (num===numero){
       return "Es capicua"
  }
  else{
       return "No es capicua"
  }
 //console.log( num);
}


function deleteAbc(cadena){
  //Define una función que elimine las string "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas string.
  //Escribe tu código aquí
  
  var nuevoarray="";
  for(i=0;i<cadena.length;i++){
  if(cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c" )
    {
      nuevoarray=nuevoarray+cadena[i];
    }
  }
  return nuevoarray;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
for (let i=0;i< arr.length; i++){
  var temp = arr[i];
  var j= i-1;
  while (j >= 0 && temp.length < arr[j].length){
    j--;
  }
  arr[j+1] = temp;
}
console.log(arr);
return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
var array=[];
  for (i=0;i<arreglo1.length;i++){
  for(x=0;x<arreglo2.length;x++){
    if (arreglo1[i]===arreglo2[x]){
        array.push(arreglo1[i]);
    }
  }
}
console.log(array);
return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

