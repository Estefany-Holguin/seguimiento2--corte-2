let colaDeEspera = [];
let contadorDeTurnos = 0;

function tomarTurno() {
  contadorDeTurnos++;
  colaDeEspera.push(contadorDeTurnos);
  console.log(`Turno ${contadorDeTurnos} tomado.`);
}

function llamarCliente() {
  if (colaDeEspera.length === 0) {
    console.log("No hay clientes en la cola de espera.");
  } else {
    let turnoLlamado = colaDeEspera.shift();
    console.log(`Turno ${turnoLlamado} llamado.`);
  }
}

function mostrarCola() {
  if (colaDeEspera.length === 0) {
    console.log("La cola está vacía.");
  } else {
    console.log("Clientes en la cola de espera:", colaDeEspera);
  }
}

tomarTurno();
tomarTurno();
mostrarCola();
llamarCliente();
mostrarCola();
