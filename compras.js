// Productos disponibles
let productos = [
    { nombre: "Producto A", precio: 10, stock: 5 },
    { nombre: "Producto B", precio: 20, stock: 3 },
    { nombre: "Producto C", precio: 15, stock: 2 }
  ];
  
  // Carrito de compras
  let carrito = [];
  
  // Función para agregar un producto al carrito
  function agregarAlCarrito(nombreProducto, cantidad) {
    let producto = productos.find(p => p.nombre === nombreProducto);
    
    if (!producto || producto.stock < cantidad) {
      console.log("No hay suficiente stock del producto.");
      return;
    }
  
    carrito.push({ nombre: producto.nombre, precio: producto.precio, cantidad: cantidad });
    producto.stock -= cantidad; // Reducimos el stock
    console.log(`Producto ${producto.nombre} agregado al carrito.`);
  }
  
  // Función para mostrar el carrito y calcular el total
  function mostrarCarrito() {
    let total = 0;
    carrito.forEach(item => {
      let subtotal = item.precio * item.cantidad;
      total += subtotal;
      console.log(`${item.nombre} - Cantidad: ${item.cantidad}, Subtotal: $${subtotal}`);
    });
    console.log(`Total a pagar: $${total}`);
  }
  
  
  agregarAlCarrito();
  agregarAlCarrito(); 
  mostrarCarrito(); 