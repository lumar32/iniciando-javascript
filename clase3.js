//CICLOS-- Parte de codigo js que permitara ahorrarnos lineas e indicar una INSTRUCCION

//FOR--- 
//ciclos por conteo. repiten un bloque de codigo un numero de veces especifico.

//for(desde; hasta; actualizacion) {
//    lo que se escriba aca se ejecutara mientras dure el ciclo
//}

//contar de 0 a 9
// for (let i = 0; i < 10; i++) {
//     alert (i)
// }

//contar de 1 a 10
// for (let i = 1; i <= 10; i++) {
//     alert(i)
// }

//Sentencia BREAK
//A veces, cuando escribimos una estructura FOR, necesitamos que bajo cierta condicion el ciclo se INTERRUMPA. Para eso se utiliza la sentencia BREAK.

// for (let i = 1; i <= 10; i++) {
//     //si la variables i es igual a 5 interrumpo el FOR
//     if (i == 5) {
//         break;
//     }
//     alert(i) // Imprime el valor de i en cada interaccion: 1, 2, 3, 4, 5.-
// }

//---

//WHILE--- ciclos condicionales. repiten un bloque de codigo. Crear bucles que se ejecuten CERO o MAS VECES
//EJ: nos va a pedir INGRESAR NOTA hasta que ingrese ESC

// let pregunta = parseInt(prompt("Desea ingresar una primera nota?"))

// while(pregunta != "ESC"){
//     let notaWhile = parseInt(prompt("Ingrese una nota"))
//     console.log("La nota ingresada es " + notaWhile)
//     pregunta = prompt("Desea seguir ingresando notas? *ESC para salir")
// }

//---

//DO...WHILE
//Permite crear bucles que se ejecutan UNA o MAS VECES dependiendo de la condicion indicada. VER NUEVAMENTE DIAPOSITIVA
//EJ:

// let condicion = true
// do{
//     let adivinanza = prompt("Que tiene 6 caras y 21 ojos")
//     if(adivinanza.toLowerCase()== "dado"){
//         console.log("Su respuesta es correcta")
//         condicion = false
//     }else{
//         console.log("Respuesta incorrecta, vuelta a intentar")
//     }
// }while(condicion)

//---

//SWITCH
//VER TEORIA EN DIAPOSITIVA CLASE 3
//Esta especialmente dise;ada para manejar la forma sencilla de multiples condiciones sobre la misma variable.

//=============================================
//Repeti esta intruccion x veces
//console.log(0)
//console.log(1)
//console.log(2)
//console.log(2)
//console.log(3)
//console.log(4)
//console.log(5)
//console.log(6)
//console.log(7)
//console.log(8)
//console.log(9)
//console.log(10)

// for (let i = 0; i <= 10; i=i+i){
//     console.log(i)
// }

//---

// let numTabla = parseInt(prompt("Ingrese el numero que desea saber la tabla de multiplicar"))
// for (let i = 0; i <=10; i=i+i){
//     console.log(`${numTabla} X ${i} = ${numTabla*i}`)
// }

//----
//EJERCICIO: FOR
//REALIZAR MEDIANTE UN CICLO FOR UN PROGRAMA QUE PIDA TRES NOTAS AL USUARIO Y CALCULE TOTAL Y PROMEDIO

//PASO A PASO:
//Que ingrese tres notas
//Calcular
//Mostrar los resultados

// let nota = 0
// let acum = 0
// let prom = 0
// let cantNotas = parseInt(prompt("Ingrese la cantidad de notas que desea ingresar"))
// for (let i=0; i<cantNotas; i++) {
//     nota = parseInt(prompt(`Ingrese la nota ${i+1}`))
//     acum = acum + nota
//     console.log("acumulador parcial" + acum)
// }
// prom = acum / cantNotas

// console.log("La suma total es " + acum)
// console.log("El promedio es " + prom)

//=============================================
//EJERCICIO:

//CREAR UN CICLO WHILE QUE VAYA SUMANDO NUMEROS INGRESADOS Y QUE CUANDO ACUMULADOR SEA IGUAL O MAYOR A 100, SALGA DEL CICLO.

// let acumulador = 0
// let bandera = true
// while (bandera){
//     let numIngresado = parseInt(prompt("Ingrese un numero a sumar"))
//     acumulador = acumulador + numIngresado
//     console.log("acumulador parcial" + acumulador)
//     if(acumulador >= 100){
//         console.log("Felicitaciones a llegado a 100")
//         bandera = false
//     }
// }

//=============================================
//EJERCICIO: SWITH
//break es para separar los pasos y asegurarnos que no siga con los otros antes de validar. cuando toque un break, sale del switch.

// let color = prompt("Ingrese un color")

// switch(color){
//     case "rojo":
//         console.log("Es el color rojo y es primario")
//     break
//     case "azul":
//         console.log("Es el color azul y es primario")
//     break
//     case "amarillo":
//         console.log("Es el color amarillo y es primario")
//     break
//     default:
//         console.log("No es un color primario")
//     break
// }