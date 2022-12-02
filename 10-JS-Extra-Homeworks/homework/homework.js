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
   
  const arr=[];
  let i=0;
  for(let elem in objeto){
        let aux=[elem,objeto[elem]];
        arr.push(aux);
        
  }
return arr;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let retorno={};
  for(let i=0; i<string.length; i++){
    if(!retorno[string.charAt(i)])
       retorno[string.charAt(i)]=1;
    else    
    retorno[string.charAt(i)]+=1;
  }
  return retorno;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  const aux=s.toUpperCase();
  let aux2="";
  let j=0;
  let retorno="";
  for(let i=0; i<s.length;i++){
    if(s.charAt(i)===aux.charAt(i)){
      retorno+=s.charAt(i);
    }
    else aux2+=s.charAt(i);

  }
  return retorno+aux2;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  const arr=str.split(" ");
  let s="";
  console.log(arr);
  for(let i=0;i<arr.length;i++){
      for(let j=arr[i].length-1; j>=0;j--){
          s+=arr[i].charAt(j);
      }
      arr[i]=s;
      s="";
  }
  for(let i=0;i<arr.length;i++){
      s+=arr[i]+" ";
  }
  return s.trimEnd();
} 



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero=numero.toString();
  let j=numero.length-1;
  for(let i=0;i<j;i++){
    
      if(!(numero.charAt(i)===numero.charAt(j)))
         return "No es capicua"
      j--;  
  }
    return "Es capicua"
          
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena=cadena.replaceAll("a","b");
  cadena=cadena.replaceAll("c","b");
  
  let retorno="";
   cadena.split("b").forEach(element => {
      retorno+=element;                
  });
return retorno;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (let i=1; i<arr.length;i++){
           
    for(j=i;j>0 ;j--){  
          if(arr[j-1].length>arr[j].length){
             aux=arr[j-1];
             arr[j-1]=arr[j];
             arr[j]=aux;                    
          }
          else break;
    }      
}
return arr;

}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let arr=[];
   
   
  arr=arreglo1.filter(x=>arreglo2.includes(x));
  sortArray(arr);
return arr; 
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

