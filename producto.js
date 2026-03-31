class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    calcularTotal() {
        return this.precio * 1.19;
    }

    aplicarDescuento(porcentaje) {
        return this.precio - (this.precio * porcentaje / 100);
    }

    resumen() {
        return "Producto: " + this.nombre + " - Categoria: " + this.categoria + " - Precio: " + this.precio;
    }

    tarjeta() {
        return "ARTICULO: " + this.nombre + " - COSTO CON IVA: " + this.calcularTotal();
    }
}

class ProductoDigital extends Producto {
    constructor(nombre, precio, licencia) {
        super(nombre, precio, "Digital");
        this.licencia = licencia;
    }

    calcularTotal() {
        return this.precio;
    }

    tarjeta() {
        return "DIGITAL: " + this.nombre + " - Licencia: " + this.licencia + " - Precio: " + this.calcularTotal();
    }
}

module.exports = { Producto, ProductoDigital };