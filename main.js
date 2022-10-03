// Constantes
const precioAikeBurger = 450;
const precioAikeFungi = 750;
const precioCheeseBacon = 1050;
//Variables
let acumuladorPrecio = 0;
let userName = prompt("Ingresa tu nombre");
let bienvenido = alert("Bienvenido " + userName + " para pedir hacer click en el boton rojo de la pagina.");
let contador = 0;

//Funcion para pedir.
function realizarPedido() {
    let pedido = prompt("Que producto queres pedir? Seleccionar con el numero correspondiente. \n 1-aike burger\n 2-aike fungi \n 3-cheese bacon")

    if (pedido == "1") {
        alert("Elegiste aike burger, el valor es $" + precioAikeBurger);
        contador = 1;
        acumuladorPrecio = precioAikeBurger + acumuladorPrecio;
    } else if (pedido == "2") {
        alert("Elegiste aike fungi, el valor es $" + precioAikeFungi);
        contador = 1;
        acumuladorPrecio = precioAikeFungi + acumuladorPrecio;
    } else if (pedido == "3") {
        alert("Elegiste cheese bacon, el valor es $" + precioCheeseBacon);
        contador = 1;
        acumuladorPrecio = precioCheeseBacon + acumuladorPrecio;
    }

    let hamburguesaTOTAL = acumuladorPrecio;

    for (contador; contador > 0; contador--) {
        let volverAPedir = prompt("queres agregar otra hamburguesa a tu pedido? si/no");
        if (volverAPedir == "si") {
            realizarPedido();
        } else {
            alert("Tu pedido ha sido recibido. El precio total es: $" + acumuladorPrecio + ". Gracias por el pedido "+ userName+"!");
        }
    }
}

//Funcion para mostrar carrito
function mostrarCarrito() {
    if (acumuladorPrecio == 0) {
        console.log("El carrito esta vacio.")
    } else {
        console.log("Total en el carrito $" + acumuladorPrecio);
    }
}