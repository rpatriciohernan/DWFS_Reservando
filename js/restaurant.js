var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}


Restaurant.prototype.reservarHorario = function(horarioReservado) {

    this.horarios = this.horarios.filter(horario => horario !== horarioReservado);

}


Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

function sumatoria(numeros){
    return numeros.reduce((acumulador, valorActual) => acumulador + valorActual);
}

function promedio(numeros){
    if (numeros.length === 0){
        return 0;
    }else{
        return Math.round((sumatoria(numeros) / numeros.length) * 10) / 10;
    }
}

Restaurant.prototype.obtenerPuntuacion = function () {
    return promedio(this.calificaciones);
}