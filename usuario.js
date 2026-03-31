class Usuario {
    constructor(nombre, email, rol = "cliente") {
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true;
    }
    saludo() {
        return " Hola " + this.nombre + " tu rol es : " + this.rol;
    }
    desactivar() {
        this.activo = false;
        return " la cuenta de " + this.nombre + " se desactivo";
    }
    resumen() {
        return " - nombre " + this.nombre + " - email " + this.email + " - rol " + this.rol + " - estado " + this.activo;
    }
}

class UsuarioVIP extends Usuario {
    constructor(nombre, email, membresia) {
        super(nombre, email, "cliente VIP");
        this.membresia = membresia;
    }
    saludo() {
        return super.saludo() + " - mi membresia es " + this.membresia;
    }
    beneficios() {
        return "El nivel " + this.membresia + " tiene envios gratis";
    }
}

module.exports = { Usuario, UsuarioVIP };