// 1. Primero, vamos a crear algunos arrays para guardar la información
// Este array guarda los números de documento de los usuarios
const documentosUsuarios = ["1234567890", "0987654321"];

// Este array guarda los PIN de los usuarios (en el mismo orden que los documentos)
const pinesUsuarios = ["1234", "4321"];

// Este array guarda el saldo de cada usuario
const saldosUsuarios = [1000000, 500000];

// Este array guardará el historial de transacciones
const historialTransacciones = [];

// 2. Creamos funciones simples para cada operación del cajero

// Función para encontrar la posición de un usuario en los arrays
function encontrarUsuario(documento) {
    // .indexOf busca en el array y nos dice en qué posición está lo que buscamos
    return documentosUsuarios.indexOf(documento);
}

// Función para validar el PIN
function validarPin(posicionUsuario, pin) {
    return pinesUsuarios[posicionUsuario] === pin;
}

// Función para retirar dinero
function retirarDinero(posicionUsuario, cantidad) {
    // Verificamos si hay suficiente saldo
    if (saldosUsuarios[posicionUsuario] >= cantidad) {
        // Restamos el dinero del saldo
        saldosUsuarios[posicionUsuario] -= cantidad;
        
        // Agregamos la transacción al historial
        historialTransacciones.push(`Retiro de $${cantidad}`);
        
        return true;
    }
    return false;
}

// Función para depositar dinero
function depositarDinero(posicionUsuario, cantidad) {
    // Sumamos el dinero al saldo
    saldosUsuarios[posicionUsuario] += cantidad;
    
    // Agregamos la transacción al historial
    historialTransacciones.push(`Depósito de $${cantidad}`);
}

// Función para ver el saldo
function verSaldo(posicionUsuario) {
    return saldosUsuarios[posicionUsuario];
}

// Función para ver las últimas transacciones
function verUltimasTransacciones() {
    // Si no hay transacciones, retornamos un mensaje
    if (historialTransacciones.length === 0) {
        return "No hay transacciones";
    }
    
    // .slice(-3) toma los últimos 3 elementos del array
    return historialTransacciones.slice(-3);
}

// 3. Simulamos el uso del cajero
console.log("=== Iniciando Cajero Automático ===");

// Simulamos que un usuario usa el cajero
const documentoUsuario = "1234567890";
const pinUsuario = "1234";

// Buscamos la posición del usuario
const posicionUsuario = encontrarUsuario(documentoUsuario);

if (posicionUsuario !== -1) {  // Si encontramos el usuario
    if (validarPin(posicionUsuario, pinUsuario)) {
        console.log("Pin correcto. Bienvenido!");
        
        // Hacemos algunas operaciones
        console.log(`Saldo inicial: $${verSaldo(posicionUsuario)}`);
        
        if (retirarDinero(posicionUsuario, 200000)) {
            console.log("Retiro exitoso");
        }
        
        depositarDinero(posicionUsuario, 300000);
        
        console.log(`Saldo final: $${verSaldo(posicionUsuario)}`);
        
        console.log("Últimas transacciones:");
        const ultimasTransacciones = verUltimasTransacciones();
        // .forEach es como un bucle que recorre cada elemento del array
        ultimasTransacciones.forEach(transaccion => {
            console.log(transaccion);
        });
        
    } else {
        console.log("Pin incorrecto");
    }
} else {
    console.log("Usuario no encontrado");
}