let habitaciones = [
    { tipo: "individual", maxPersonas: 2, fumadores: false, aceptaMascotas: false, ocupada: false },
    { tipo: "doble", maxPersonas: 4, fumadores: true, aceptaMascotas: false, ocupada: false },
    { tipo: "familiar", maxPersonas: 6, fumadores: false, aceptaMascotas: true, ocupada: false },
    { tipo: "familiar", maxPersonas: 6, fumadores: false, aceptaMascotas: true, ocupada: false }
  ];
  
  let reservas = [];
  
  function hacerReserva(nombre, pais, numPersonas, tipoHabitacion, periodoEstadia, trajoMascota) {
    
    let habitacionDisponible = habitaciones.find(hab => hab.tipo === tipoHabitacion && !hab.ocupada);
    
  
    if (!habitacionDisponible) {
      console.log("No hay habitaciones disponibles de este tipo.");
      return;
    }
  
    if (numPersonas > habitacionDisponible.maxPersonas) {
      console.log(`No puedes reservar esta habitación, máximo ${habitacionDisponible.maxPersonas} personas.`);
      return;
    }
  
   
    if (trajoMascota && !habitacionDisponible.aceptaMascotas) {
      console.log("No puedes traer mascotas a esta habitación.");
      return;
    }
  

    let reserva = {
      nombre: nombre,
      pais: pais,
      numPersonas: numPersonas,
      tipoHabitacion: tipoHabitacion,
      periodoEstadia: periodoEstadia,
      trajoMascota: trajoMascota
    };
  
    
    habitacionDisponible.ocupada = true;
    
   
    reservas.push(reserva);
    console.log("Reserva realizada con éxito.");
  }
  
  function habitacionesReservadas() {
    let ocupadas = habitaciones.filter(hab => hab.ocupada).length;
    console.log(`El hotel tiene ${ocupadas} habitaciones reservadas.`);
  }
  
  hacerReserva("Juan Pérez", "México", 2, "individual", "2024-10-10 a 2024-10-15", false);
  hacerReserva("Ana López", "España", 4, "doble", "2024-10-05 a 2024-10-10", false);
  hacerReserva("Luis García", "Argentina", 5, "familiar", "2024-11-01 a 2024-11-07", true);
  
  
  habitacionesReservadas();
  
