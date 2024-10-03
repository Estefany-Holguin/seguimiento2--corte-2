// Array para almacenar las citas
let citas = [];

// Función para programar una cita
function programarCita(nombre, fecha, hora, medico) {
  let cita = { nombre: nombre, fecha: fecha, hora: hora, medico: medico };
  citas.push(cita);
  console.log("Cita programada con éxito.");
}

// Función para ver todas las citas
function verCitas() {
  if (citas.length === 0) {
    console.log("No hay citas programadas.");
  } else {
    citas.forEach(cita => {
      console.log(`Paciente: ${cita.nombre}, Fecha: ${cita.fecha}, Hora: ${cita.hora}, Médico: ${cita.medico}`);
    });
  }
}

// Función para cancelar una cita
function cancelarCita(nombre) {
  let index = citas.findIndex(cita => cita.nombre === nombre);
  if (index !== -1) {
    citas.splice(index, 1);
    console.log("Cita cancelada.");
  } else {
    console.log("No se encontró la cita.");
  }
}


programarCita();
programarCita();
verCitas(); 
cancelarCita(); 
verCitas(); 
