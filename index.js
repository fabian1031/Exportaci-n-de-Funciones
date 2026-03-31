const { Usuario, UsuarioVIP } = require("./usuario.js");
const { Producto, ProductoDigital } = require("./producto.js");
const { calcularTotalCarrito } = require("./utilidades.js");


let usuario1 = new Usuario("Fabian", "fabian@mail.com");
let usuario2 = new Usuario("Ana", "ana@mail.com", "admin");
let vip1 = new UsuarioVIP("Carlos", "carlos@vip.com", "Platinum");

console.log(usuario1.saludo());
console.log(usuario1.resumen());
console.log(usuario2.saludo());
console.log(usuario2.resumen());
console.log(vip1.saludo());
console.log(vip1.beneficios());
console.log(vip1.resumen());
vip1.desactivar();
console.log(vip1.resumen());


let p1 = new Producto("Mouse", 20, "Hardware");
let p2 = new Producto("Teclado", 50, "Hardware");
let d1 = new ProductoDigital("Ebook JS", 10, "Mensual");
let d2 = new ProductoDigital("Curso Node", 100, "De por vida");


console.log("Precio con descuento de " + p2.nombre + " es: " + p2.aplicarDescuento(20));
console.log("Confirmacion precio original: " + p2.precio);


console.log(p1.tarjeta());
console.log(p2.tarjeta());
console.log(d1.tarjeta());
console.log(d2.tarjeta());

let listaUsuarios = [usuario1, usuario2, vip1];
for (let i = 0; i < listaUsuarios.length; i++) {
    console.log(listaUsuarios[i].resumen());
}

let carrito = [p1, p2, d1];
console.log("Total del carrito: " + calcularTotalCarrito(carrito));