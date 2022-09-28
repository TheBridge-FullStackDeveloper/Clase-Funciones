// const usuario = 'David'

// function saludar(nombre,saludo){
//     console.log(`Hola ${nombre} ${saludo}`);

// }

// saludar(usuario,'bienvenido');

// function calculadora() {
//   let num1 = prompt("Introduce el 1º número.");
//   let signo = prompt(
//     "Introduce un signo aritmético entres los siguientes:\n'+' --> Suma\n'-' --> Resta\n'*'--> Multiplicación\n'/' --> División\n'^' --> Potencia\n'%' --> Módulo"
//   );
//   console.log(signo);
//   let num2 = prompt("Introduce el 2º número.");

//   num1 = +num1;
//   num2 = +num2;

//   let resultado;
//   switch (signo) {
//     case "+":
//       resultado = num1 + num2;
//       break;
//     case "-":
//       resultado = num1 - num2;
//       break;
//     case "*":
//       resultado = num1 * num2;
//       break;
//     case "/":
//       resultado = num1 / num2;
//       break;
//     case "^":
//       resultado = num1 ** num2;
//       break;
//     case "%":
//       resultado = num1 % num2;
//       break;
//     default:
//         console.error('El signo introducido no existe, deja de trolear')
//       break;
//   }
//   return resultado;
// }

// console.log(calculadora());

//Crea la función convierteString debe recibir un tipo number y devolver el número como string .
// Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'

function convierteString(number) {
  // let number = 2
  if (typeof number != "number") {
    return console.log("Solo se pueden introducir datos numéricos");
  }

  return number.toString();
}

console.log(convierteString(2));

/* 
Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar.
*/

function esPar(numero) {
  if (numero % 2 === 0) {
    return console.log("es par", true);
  }
  return console.log("es impar", false);
}

esPar(3);
