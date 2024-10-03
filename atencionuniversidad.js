// Array para almacenar las atenciones
let atenciones = [];

// Función para registrar la atención
function registrarAtencion(cedula, tipoAtencion, tipoAsesoria = null) {
  // Creamos el objeto de atención
  let atencion = {
    cedula: cedula,
    tipoAtencion: tipoAtencion, // 'llamada' o 'asesoria'
    tipoAsesoria: tipoAsesoria  // 'estudiante' o 'directivo' (si aplica)
  };
  
  // Agregamos la atención al array
  atenciones.push(atencion);
  console.log("Atención registrada con éxito.");
}

// Función para mostrar estadísticas
function mostrarEstadisticas() {
  let totalAtendidos = atenciones.length;
  let llamadas = atenciones.filter(a => a.tipoAtencion === 'llamada').length;
  let asesorias = atenciones.filter(a => a.tipoAtencion === 'asesoria').length;

  console.log(`Total de usuarios atendidos: ${totalAtendidos}`);
  console.log(`Cantidad de llamadas telefónicas: ${llamadas}`);
  console.log(`Cantidad de asesorías: ${asesorias}`);
}

registrarAtencion();
registrarAtencion();
mostrarEstadisticas();
