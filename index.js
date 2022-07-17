//console.log("Forma 2 de escribir JS - BUENA PRACTICA");

//Formas de declarar una varibale

//Primera forma: MALA PRACTICA. NO SE USA MAS.
// var perro = "Pipa"
// console.log(perro);

//Segunda forma: let actua por contexto. SE USA ESTE!!
// let gato = "Rocko";
// console.log(gato);

// let nota //Declare nota
// nota = 9 //Asignamos un valor. Puede ser un dato especifico u otra variable
// let mitad = nota/2
// console.log(nota)
// console.log(mitad)

//=============================================

//Tipos de datos: 3
//String o cadena-- se declaran con " o ' (dobles o simples)
// let datoCadena = "123"
// console.log(datoCadena)

//Dato numerico-- se declara sin "
// let numero = 456
// console.log(numero)

//Boolean-- verdadero y falso. Solo tiene dos (2) tipos de valores.
// let boolean = true
// boolean = false 
// console.log(boolean)

//Se puede cambiar el valor. Queda el ultimo

//=============================================

//Constante-- forma de guardar info. Valores que no van a ser modificados dentro del codigo

//profesion = "carpintero" --No se puede poner mas de un valor

// const profesion = "abogado"
// console.log(profesion)

// const dni = 41804659

// const iva = 21
// console.log(iva/2) 

//=============================================

//PROMPT, CONSOLA y ALERT

//PROMPT-- forma de INGRESAR datos
// let nombreIngresado = prompt("Ingrese su nombre")
// let nombreEmpresa = prompt("Ingrese el nombre de la empresa en la que desarrolla su profesion")

// console.log("El nombre ingresado es "+nombreIngresado+". Gracias por brindar sus datos")

// alert(`El nombre del cliente es ${nombreIngresado}. Gracias por ingresar sus datos para participar del sorteo. ${nombreEmpresa}`)

//=============================================

//let nota1 = parseInt(prompt("Ingrese primer nota")) //si ingresamos numeros con decimales hay que poner parseFloat
//let nota2 = parseInt(prompt("Ingrese segunda nota"))
//let nota3 = parseInt(prompt("Ingrese tercer nota"))
//console.log(nota1+nota2+nota3)

//NaN-- Not a Number: QUiere decir que estamos realizando operaciones entre dos datos que no son numericos.
//Si aparece esto, parceo la variable (parseInt)

//JavaScrip-- Lenguaje DEBILMENTE TIPADO / NO TIPADO (no hay que aclarar que tipo de dato ingresamos)

//=============================================

//EJ: calcule el promedio de gol de un jugador/a a partir del ingreso de la cantidad de goles y cantidad de partidos.

// let nombreJugador = prompt("Ingrese nombre jugador/a")
// let cantGoles = parseInt(prompt("Ingrese la cantidad de goles realizados"))
// let cantPartidos = parseInt(prompt("Ingrese la cantidad de partidos jugados"))
// let promedio = cantGoles/cantPartidos
// alert(`El promedio de gol de ${nombreJugador} es ${promedio.toFixed(3)}`) 

//.toFixed es para indicar cuantos decimales queremos ver.

//=============================================

//PARSEAR (parse): refiere, en programacion, a una actividad que consiste en el analisis de texto para determinar si cumple o no reglas o patrones y en base a eso tomar ualguna determinacion.

//ESTRUCTURA IF BASICA
//if (condicion) {bloque de codigo a ejececutar}

//if (true){
//    console.log("El codigo se muestra")
//}

//Dos iguales (==) compara
//Un igual (=) asigna

//=============================================

//let preguntaEdad = prompt("Usted es mayor de edad?")
//if (preguntaEdad == "si"){
//    console.log("Habilitado para la compra de alcohol por ser mayor de edad")
//}

//=============================================

//let color = "rojo"
//if(color == "rojo"){
//    console.log("El color es rojo")
//}else{
//    console.log("Este color no es rojo")
//}

//=============================================

// if(color == "rojo"){
//    console.log("El color es rojo y es primario")
// }else{
//    console.log("Este color es azul y es primario")
// }else if (color == amarillo{
//     console.log("Este color es amarillo y es primerio")
// }else{
//     console.log("Este no es un color primario")
// }

//=============================================

// let numero = 10
// let mayor5 = (numero > 5)
// console.log(mayor5)
// if (mayor5){
//     console.log("El numero es mayor a 5")
// }else{
//     console.log("El numero no es mayor a 5")
// }

//=============================================

//If equivalente al anterior
//OF con que una de las condiciones sea TRUE, el global va a ser TRUE

//toLowerCase() es para que todos los datos ingresados por el usuario sean leidos en MINUSCULA.

//toUpperCase() es para que todos los datos ingresados por el usuario sean leidos en MAYUSCULA.

// let color = "RoJo"

// if ((color.toLowerCase() == 'rojo') || (color.toLowerCase() == 'azul') || (color.toLowerCase() == 'amarillo')) {
//     console.log("Este es un color primario")
// }else{
//     console.log("Este no es un color primario")
// }

//=============================================

//CUANDO LOS INGRESOS SON VACIOS:

// let color = ""

// if(color ==""){
//     console.log("Esto es un ingreso vacio")
// }else{ if ((color.toLowerCase() == 'rojo') || (color.toLowerCase() == 'azul') || (color.toLowerCase() == 'amarillo')) {
//     console.log("Este es un color primario")
// }else{
//     console.log("Este no es un color primario")
//     }
// }

//=============================================
// CUAL ES LA DIFERENCIA ENTRE igual Y estrictamente igual

// ES IGUAL
// let num = "20"
// if(num === 20){ //si el numero es 20 (con "")
//     console.log("Estrictamente igual")
// }else{
//     console.log("Entro else")
// }

//ES ESTRICTAMENTE IGUAL
// let num = 20
// if(num === 20){  //el numero es estrictamente igual (sin"")
//     console.log("Estrictamente igual")
// }else{
//     console.log("Entro else")
// }

//=============================================
//VALOR VARIABLES
//null--- esta definida pero no tiene valor
//undefined--- no esta definida

//=============================================
//CONFIRM() NOS MUESTRA UN MENSAJE CON 2 BOTONES: ACEPTAR - CANCELAR
//confirm("Usted es mayor de edad?")

//PROMPT() SIRVE PARA LA ENTRADA DE DATOS
//let usuario= prompt("Ingrese su nombre")

//ALERT NOS MUESTRA UNA VENTANA SOBRE LA WEB
//alert(`Hola ${usuario}`)

//CONSOLE.LOG() NOS MUESTRA EL MENSAJE QUE PASAMOS COMO PARAMETRO
//let mensaje= "Si estas leyendo esto es porque estas estudiando JS"
//console.log(mensaje)--- Si estas leyendo esto es porque estas estudiando JS
