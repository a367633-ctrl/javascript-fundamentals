// 1. Implementación de funciones para multiplicación y división
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Error: División por cero";

// 2. Composición de funciones para resolver operaciones consecutivas
const componer = (f, g) => (a, b, c) => f(g(a, b), c);
// Ejemplo: (a * b) / c
const multiplicarYDividir = componer(dividir, multiplicar);

// 3. Uso de callbacks para gestionar resultados y errores
function operarConCallback(a, b, operacion, callbackExito, callbackError) {
    const resultado = operacion(a, b);
    if (typeof resultado === 'string' && resultado.includes("Error")) {
        callbackError(resultado);
    } else {
        callbackExito(resultado);
    }
}

// 4. Implementación de operaciones mediante promesas
function operacionPromesa(a, b, tipo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tipo === 'multiplicar') resolve(multiplicar(a, b));
            else if (tipo === 'dividir') {
                const res = dividir(a, b);
                if (typeof res === 'string') reject(res);
                else resolve(res);
            } else reject("Operación no válida");
        }, 500); // Simulando asincronía
    });
}

console.log("--- RESULTADOS SINCRÓNICOS Y CALLBACKS ---");
console.log("Multiplicación (5x4):", multiplicar(5, 4));
console.log("Composición ((10x2)/4):", multiplicarYDividir(10, 2, 4));

operarConCallback(10, 0, dividir, 
    res => console.log("Éxito callback:", res), 
    err => console.error("Error callback:", err)
);

// 5. Encadenamiento de promesas utilizando .then() y .catch()
console.log("\n--- PROMESAS (.then / .catch) ---");
operacionPromesa(5, 5, 'multiplicar')
    .then(resultado => {
        console.log("Promesa multiplicar:", resultado);
        return operacionPromesa(resultado, 2, 'dividir'); // Encadenamiento
    })
    .then(resultadoFinal => console.log("Promesa encadenada (dividir):", resultadoFinal))
    .catch(error => console.error("Error en promesa:", error));

// 6. Ejecución de operaciones mediante async/await
async function ejecutarOperacionesAsincronas() {
    console.log("\n--- ASYNC / AWAIT ---");
    try {
        const mult = await operacionPromesa(8, 3, 'multiplicar');
        console.log("Async/Await multiplicar:", mult);
        
        const div = await operacionPromesa(mult, 4, 'dividir');
        console.log("Async/Await dividir:", div);

        // Forzando un error
        await operacionPromesa(10, 0, 'dividir');
    } catch (error) {
        console.error("Error en Async/Await:", error);
    }
}

ejecutarOperacionesAsincronas();