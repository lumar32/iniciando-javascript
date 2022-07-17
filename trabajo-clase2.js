//=============================================
// EJERCICIO CLASE 2:
// Pedir una nota al usuario y con el uso de condicionales evaluar:
// Si la nota es mayor a 10 o menor a 0, devolver que no es una nota válida
// En caso contrario, si la nota es igual a 10 calificar con excelente. Si es mayor a 7 calificar con promocionado, de ser mayor o igual a 4 considerar aprobado y menor a 4 como desaprobado.

let alumno = prompt("Ingrese su Apellido registrado en oficina alumnos")
if(alumno == ""){
    alert("ERROR. Ingresa tu apellido para poder conocer tu nota!")
    console.log("ERROR. Ingresa tu apellido para poder conocer tu nota!")
}

let nota1 = parseInt(prompt("Ingrese la nota obtenida en Primer Parcial")) 
if (nota1 < 0){
    alert("La nota es invalida")
    console.log("La nota es invalida")
}
else if (nota1 > 10){
    alert("La nota es invalida")
    console.log("La nota es invalida")
}
else if (nota1 < 4){
    alert("Desaprobado")
    console.log("Desaprobado")
}
else if (nota1 >= 4){
    alert("Aprobado")
    console.log("Aprobado")
}
else if (nota1 > 7){
    alert("Promocionado")
    console.log("Promocionado")
}
else if (nota1 = 10){
    alert("Excelente!")
    console.log("Excelente!")
}

let nota2 = parseInt(prompt("Ingrese la nota obtenida en Segundo Parcial"))
if (nota2 < 0){
    alert("La nota es invalida")
    console.log("La nota es invalida")
}
else if (nota2 > 10){
    alert("La nota es invalida")
    console.log("La nota es invalida")
}
else if (nota2 < 4){
    alert("Desaprobado")
    console.log("Desaprobado")
}
else if (nota2 >= 4){
    alert("Aprobado")
    console.log("Aprobado")
}
else if (nota2 > 7){
    alert("Promocionado")
    console.log("Promocionado")
}
else if (nota2 = 10){
    alert("Excelente!")
    console.log("Excelente!")
}

let promedio = ((nota1+nota2)/2)

if (promedio > 9){
    alert("El promedio del alumno "+alumno+" es "+promedio+". Excelente cursada!")
    console.log("El promedio del alumno "+alumno+" es "+promedio+". Excelente cursada!")
}
else if (promedio >= 7 < 8){
    alert("El promedio del alumno "+alumno+" es "+promedio+". Muy buena cursada!")
    console.log("El promedio del alumno "+alumno+" es "+promedio+". Muy buena cursada!")
}
else if (promedio < 7){
    alert("El promedio del alumno "+alumno+" es "+promedio+". Solicitar fecha de recuperatorio con tu tutor. Tendras revancha!")
    console.log("El promedio del alumno "+alumno+" es "+promedio+". Solicitar fecha de recuperatorio con tu tutor. Tendras revancha!")
}
