var Reserva = function(horario, cantidadPersonas, precioPorPersona, codigoDescuento){
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDescuento = codigoDescuento;
}

Reserva.prototype.obtenerPrecioBase = function(){
    return this.cantidadPersonas * this.precioPorPersona;
}

function calcularDescuentos(reserva){
    var descuentos = 0;

    //Descuento por grupos grandes:
    if(reserva.cantidadPersonas >= 4 && reserva.cantidadPersonas <= 6) { descuentos += reserva.obtenerPrecioBase()*0.05 };
    if(reserva.cantidadPersonas >= 7 && reserva.cantidadPersonas <= 8) { descuentos += reserva.obtenerPrecioBase()*0.10 };
    if(reserva.cantidadPersonas > 8 ) { descuentos += reserva.obtenerPrecioBase()*0.15 };

    //Descuento por código: 
    switch(reserva.codigoDescuento){
        case "DES15":
            descuentos += reserva.obtenerPrecioBase()*0.15;
            break;
        case "DES200":
            descuentos += 200;
            break;
        case "DES1":
            descuentos += reserva.precioPorPersona;
            break;
    }

    return descuentos;
}

function calcularAdicionales(reserva) {
    var adicionales = 0;

    //Adicional por horario: 
    if(reserva.horario.getHours() >= 13 && reserva.horario.getHours() <= 14){ adicionales =+ reserva.obtenerPrecioBase()*0.05 }
    if(reserva.horario.getHours() >= 20 && reserva.horario.getHours() <= 21){ adicionales =+ reserva.obtenerPrecioBase()*0.05 }

    //Adicional por fin de semana: 
    if(reserva.horario.getDay() == 5 || reserva.horario.getDay() == 6 || reserva.horario.getDay() == 0 ) { adicionales =+ reserva.obtenerPrecioBase()*0.10 }

    return adicionales;
}


Reserva.prototype.obtenerPrecioFinal = function(){
    return this.obtenerPrecioBase() + calcularAdicionales(this) - calcularDescuentos(this);
}