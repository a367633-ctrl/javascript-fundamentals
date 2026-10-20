// 1. Definición de clases y constructores
class Animal {
    // 3. Propiedades privadas (simuladas por convención o usando #)
    #nombre;

    constructor(nombre, especie) {
        this.#nombre = nombre;
        this.especie = especie;
    }

    // 3. Getters y setters
    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    // 5. Métodos estáticos
    static infoGeneral() {
        return "Los animales son organismos eucariotas multicelulares.";
    }

    // Método a sobrescribir (Polimorfismo)
    hacerSonido() {
        return "Este animal hace un sonido genérico.";
    }
}

// 4. Herencia utilizando extends y super
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre, "Canino"); // Llama al constructor de la clase padre
        this.raza = raza;
    }

    // 6. Polimorfismo mediante la implementación de comportamientos compartidos
    hacerSonido() {
        return "¡Guau! ¡Guau!";
    }
}

class Gato extends Animal {
    constructor(nombre, color) {
        super(nombre, "Felino");
        this.color = color;
    }

    // 6. Polimorfismo
    hacerSonido() {
        return "¡Miau!";
    }
}

// 2. Creación de objetos mediante new
const miPerro = new Perro("Max", "Pastor Alemán");
const miGato = new Gato("Luna", "Negro");

console.log("--- PROPIEDADES, GETTERS Y SETTERS ---");
console.log(`Nombre del perro: ${miPerro.nombre} (Raza: ${miPerro.raza})`);
miPerro.nombre = "Rex"; // Usando el setter
console.log(`Nuevo nombre del perro: ${miPerro.nombre}`);

console.log("\n--- POLIMORFISMO ---");
const animales = [miPerro, miGato, new Animal("Desconocido", "Desconocido")];
animales.forEach(animal => {
    console.log(`${animal.nombre} dice: ${animal.hacerSonido()}`);
});

console.log("\n--- MÉTODOS ESTÁTICOS Y INSTANCEOF ---");
console.log("Método estático:", Animal.infoGeneral());

// 5. Operador instanceof
console.log("¿miPerro es instancia de Perro?", miPerro instanceof Perro); // true
console.log("¿miPerro es instancia de Animal?", miPerro instanceof Animal); // true
console.log("¿miGato es instancia de Perro?", miGato instanceof Perro); // false