//ejercicios nivel 1

//1.Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.

let desafio = "30 días de JavaScript";

//2.Imprima la cadena en la consola del navegador usando console.log()

console.log(desafio);

//3.Imprima la longitud de la cadena en la consola del navegador usando console.log()

console.log(desafio.length);

//4.Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()

console.log(desafio.toUpperCase());

//5.Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()

console.log(desafio.toLowerCase());

//6.Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()

console.log(desafio.substring(0, 2));

//7.Corta la frase Días de JavaScript de 30 Días de JavaScript.

let desafio2 = "30 días de JavaScript"
console.log(desafio2.substring(3, 21));

//8.Verifique si la cadena contiene una palabra Script usando el método include()

console.log(desafio.includes("Script"));

//9.Divide la cadena en un array usando el método split()

console.log(desafio.split(" "));

//10.Divida la cadena 30 días de JavaScript en el espacio usando el método split()

let cadena = "30 días de JavaScript en el espacio";
console.log(cadena.split(" "));

//11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' dividen la cadena en la coma y cámbiala a una matriz.

let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(company.split(","));

//12.Cambie 30 días de JavaScript a 30 días de Python usando el método replace() .

console.log(desafio.replace("JavaScript", "python"));

//13.¿Qué es el personaje en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt() .

console.log(desafio.charAt(15));

//14.¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()

console.log(desafio.charCodeAt(11));

//15.Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript

console.log(desafio.indexOf("a"));

//16.Use lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.

console.log(desafio.lastIndexOf("a"));

//17.Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración: 'No puedes terminar una oración con porque porque porque es una conjunción'

let oracion = "No puedes terminar una oracion con porque porque porque es una conjuncion";
console.log(oracion.indexOf("porque"));

//18.Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración: 'No puedes terminar una oración con porque porque porque es una conjunción'

console.log(oracion.lastIndexOf("porque"));

//19.Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración: 'No puedes terminar una oración con porque porque porque es una conjunción'

console.log(oracion.search("porque") + ": metodo search");

//20.Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.

let desafio3 = "    30 días de JavaScript   ";
console.log(desafio3.trim(" "));

//21.Use el método beginWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero

console.log(desafio.startsWith("30"));

//22.Use el método EndsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero

console.log(desafio.endsWith("t"));

//23.Usa el método match() para encontrar todos los a en 30 días de JavaScript

console.log(desafio.match("a"));

//24.Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'

let desafio4 = "30 días de";
let desafio5 = "JavaScript";
console.log(desafio4.concat(desafio5));

//25.Use el método repeat() para imprimir 30 días de JavaScript 2 veces*/

console.log(desafio.repeat(2));


//ejercicios nivel 2

//1.Usando console.log() imprima la siguiente declaración:

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

//2.Usando console.log() imprima la siguiente cita de la Madre Teresa:

console.log("\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"");


//3.Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.

let num = "10";
let numInt = +num;
console.log(numInt); 

//4.Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
let num1 = "10";
let numInt1 = parseInt(num1);
console.log(numInt1); 

//5.Verifique si 'on' se encuentra tanto en Python como en la jerga
let palabra1 = "python jerga";
console.log(palabra1.includes('on'));

//6.Espero que este curso no esté lleno de jerga. Compruebe si jerga está en la oración.
let oracion2 = "Espero que este curso no este lleno de jerga";
console.log(oracion.includes("jargon"));

//7.Genere un número aleatorio entre 0 y 100 inclusive.
let randomNum = Math.random() *100;
let numBtnZeroAndTen = randomNum + 1;
console.log(Math.ceil(numBtnZeroAndTen));

let Numero2 = Math.random();
let numero1 = Numero2 * 100;
let valFinal = numero1 + 0;
console.log(Math.ceil(valFinal));

//8.Genere un número aleatorio entre 50 y 100 inclusive.

let randomNum1 = Math.random();
let number = randomNum1 * 51;
let valorFinal1 = number + 50;
console.log(Math.floor(valorFinal1));

//9.Genere un número aleatorio entre 0 y 255 inclusive.

let randomNum2 = Math.random();
let numero = randomNum2 * 255;
let valorFinal2 = numero + 1;
console.log(Math.ceil(valorFinal2));

//10. Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.

let string = "JavaScript";
let firstLetter = string[0];
let secondLetter = string[1]; 
let thirdLetter = string[2];
let lastLetter = string[9];
console.log(lastLetter); 

//11.Use console.log() y caracteres de escape para imprimir el siguiente patrón.

/*1 1 1 1 1
  2 1 2 4 8
  3 1 3 9 27
  4 1 4 16 64
  5 1 5 25 125
*/
//console.log();

//12.Usa substr para separar la frase porque porque porque de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'

let frase = "No puedes terminar una oración con porque porque porque es una conjunción";
console.log(frase.substring(35, 55));

//ejercicios nivel 3

//1.'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. Cuente el número de palabras de amor en esta oración. 
let oración = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor.';
console.log(oración.search('amor'));

//2. Usa match() para contar el número de todos los porque en la siguiente oración: 'No puedes terminar una oración con porque porque es una conjunción'
let Oración = 'No puedes terminar una oración con porque porque es una conjunción';
console.log(Oración.match('porque'));


//3. Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";



//4.Calcule el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'


