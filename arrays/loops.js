const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

// Muestra los números cada X posiciones, señaladas como parámetro
function contarCada3(numberArray, cadaCuanto) {
    let contador = 1;
    for (let index = 0; index < numberArray.length; index++) {
        let numeroActual = numberArray[index];
      if ((index + 1) % cadaCuanto === 0) {
        console.log(numeroActual);
      }
    }
} 

contarCada3(numberArray, 5);