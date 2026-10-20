// 1. Declaración de variables con var, let y const
var mensajeGlobal = "Hola desde var";
let contador = 0;
const PI = 3.14159;

// 2. Tipos de datos y objetos
let texto = "Computación"; // String
let numero = 42; // Number
let esValido = true; // Boolean
let estudiante = {
    nombre: "Carlos",
    matricula: "a367633",
    carrera: "Ingeniería en Computación"
};

// 3. Arreglos y colecciones
let lenguajes = ["C", "Python", "JavaScript", "Clojure"];
lenguajes.push("Bash");

// 4. Declaración de funciones tradicionales y anónimas
function saludar(nombre) {
    return `Hola, ${nombre}`;
}

const despedir = function(nombre) {
    return `Adiós, ${nombre}`;
};

// 5. Funciones flecha (arrow functions)
const multiplicarPorDos = (num) => num * 2;

// 6. Funciones utilizadas como argumentos de otras funciones (Callbacks)
function procesarArreglo(arreglo, funcionProcesadora) {
    let resultado = [];
    for (let item of arreglo) {
        resultado.push(funcionProcesadora(item));
    }
    return resultado;
}

// Ejecución y comprobación
console.log(mensajeGlobal);
console.log("Estudiante:", estudiante.nombre);
console.log("Lenguajes:", lenguajes);
console.log(saludar("Mundo"));
console.log(despedir("Mundo"));
console.log("Procesar arreglo (x2):", procesarArreglo([1, 2, 3], multiplicarPorDos));