

var expect = chai.expect;
var assert = chai.assert;

// Paso 2: Testeá la función reservarHorario(horario)

describe('Reservar un horario de un Restaurant', function(){

    it('Al reservar un horario valido, la cantidad de horarios decrece en uno', function(){
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
        var cantidadAnterior = restaurant.horarios.length;
        restaurant.reservarHorario("21:00");
        expect(restaurant.horarios.length).to.equal(cantidadAnterior -1);
    })

    it('Al reservar un horario valido, los elementos de la lista se actualizan', function(){
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
        var horariosActualizado = ["22:30", "15:00"];
        restaurant.reservarHorario("21:00");
        expect(restaurant.horarios).to.eql(horariosActualizado);
    })

    it('Al reservar un horario invalido, la cantidad de horarios se mantiene igual', function(){
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
        var cantidadAnterior = restaurant.horarios.length;
        restaurant.reservarHorario("24:00");
        expect(restaurant.horarios.length).to.equal(cantidadAnterior);
    })

    it('Al reservar un horario invalido, los elementos de la lista no se actualizan', function(){
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
        var horariosAnterior = restaurant.horarios;
        restaurant.reservarHorario("24:00");
        expect(restaurant.horarios).to.eql(horariosAnterior);
    })

    it('Al reservar un horario sin parametro, la cantidad de horarios se mantiene igual', function(){
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
        var cantidadAnterior = restaurant.horarios.length;
        restaurant.reservarHorario();
        expect(restaurant.horarios.length).to.equal(cantidadAnterior);
    })


    it('Al reservar un horario sin parametro, los elementos de la lista no se actualizan', function(){
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
        var horariosAnterior = restaurant.horarios;
        restaurant.reservarHorario();
        expect(restaurant.horarios).to.eql(horariosAnterior);
    })

})

// Paso 3: Testeá la función obtenerPuntuación()

describe('Obtener Puntuacion de un Restaurant', function(){

    it('Dado un restaurant con calificaciones, la puntuación se calcula correctamente', function(){
        var calificaciones = [9, 5, 7, 6, 7];
        var sumatoria = (acumulador, valorActual) => acumulador + valorActual;
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", calificaciones);
        var puntuacionEsperada = calificaciones.reduce(sumatoria) / calificaciones.length;
        expect(restaurant.obtenerPuntuacion()).to.equal(puntuacionEsperada);
    })

    it('Dado un restaurant sin calificaciones, la puntuación se calcula en cero', function(){
        var calificaciones = [];
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", calificaciones);
        expect(restaurant.obtenerPuntuacion()).to.equal(0);
    })

})

// Paso 4: Testeá la función calificar()

describe('Calificar a un Restaurant', function(){

    it('Al calificar un restaurant con parametro valido, la lista de calificaciones se actualiza correctamente', function(){
        var calificaciones = [9, 5, 7, 6, 7];
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", calificaciones);
        restaurant.calificar(10);
        calificaciones.push(10)
        expect(restaurant.calificaciones).to.eql(calificaciones);
    })

    it('Al calificar un restaurant sin parametro, la lista de calificaciones no se actualiza', function(){
        var calificaciones = [9, 5, 7, 6, 7];
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", calificaciones);
        restaurant.calificar();
        expect(restaurant.calificaciones).to.eql(calificaciones);
    })

    it('Al calificar un restaurant con parametro invalido, la lista de calificaciones no se actualiza', function(){
        var calificaciones = [9, 5, 7, 6, 7];
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", calificaciones);
        restaurant.calificar("a");
        expect(restaurant.calificaciones).to.eql(calificaciones);
    })

    it('Al calificar un restaurant con parametro negativo, la lista de calificaciones no se actualiza', function(){
        var calificaciones = [9, 5, 7, 6, 7];
        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", calificaciones);
        restaurant.calificar(-8);
        expect(restaurant.calificaciones).to.eql(calificaciones);
    })
})

//Paso 5: Testeá la función buscarRestaurante(id)

describe('Buscar un Restaurant', function(){

    it('Al buscar un restaurant con ID valido y existente, se encuentra al restaurant correcto', function(){

        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]),
        ];

        var restaurant = new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]);
        var listado = new Listado(listadoDeRestaurantes);

        expect(listado.buscarRestaurante(24)).to.eql(restaurant);
    })

    it('Al buscar un restaurant con ID valido no existente, se encuentra al restaurant correcto', function(){

        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]),
        ];
        
        var listado = new Listado(listadoDeRestaurantes);
        var mensaje = "No se ha encontrado ningún restaurant";

        expect(listado.buscarRestaurante(100)).to.equal(mensaje);
    })

    it('Al buscar un restaurant con ID invalido, retorna mensaje "No se ha encontrado.."', function(){

        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]),
        ];
        
        var listado = new Listado(listadoDeRestaurantes);
        var mensaje = "No se ha encontrado ningún restaurant";
        expect(listado.buscarRestaurante('a')).to.equal(mensaje);
    })

    it('Al buscar un restaurant sin parametro, retorna mensaje "No se ha encontrado.."', function(){

        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]),
        ];
        
        var listado = new Listado(listadoDeRestaurantes);
        var mensaje = "No se ha encontrado ningún restaurant";
        expect(listado.buscarRestaurante()).to.equal(mensaje);
    })

})

//Paso 6: Testeá la función obtenerRestaurantes()

describe("Obtener Restaurantes por filtros", function(){

    it('Al buscar restaurantes por filtros validos, se encuentran los restaurantes correctos', function(){

        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]),
        ];
        
        var listado = new Listado(listadoDeRestaurantes);

        var filtroRubro = "Asiática";
        var filtroCiudad = "Londres";
        var filtroHorario = "15:00";

        var restaurantes = [new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7])];
        
        expect(listado.obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario)).to.eql(restaurantes);
    })

    it('Al buscar restaurantes por rubro valido, se encuentran los restaurantes correctos', function(){

        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]),
        ];
        
        var listado = new Listado(listadoDeRestaurantes);

        var filtroRubro = "Asiática";
        var filtroCiudad = null;
        var filtroHorario = null;

        var restaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7])  
        ];
        expect(listado.obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario)).to.eql(restaurantes);
    })

    it('Al buscar restaurantes por ciudad valida, se encuentran los restaurantes correctos', function(){

        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]),
        ];
        
        var listado = new Listado(listadoDeRestaurantes);

        var filtroRubro = null;
        var filtroCiudad = "Nueva York";
        var filtroHorario = null;

        var restaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7])
        ];
        expect(listado.obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario)).to.eql(restaurantes);
    })

    it('Al buscar restaurantes por horario valido, se encuentran los restaurantes correctos', function(){

        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]),
        ];
        
        var listado = new Listado(listadoDeRestaurantes);

        var filtroRubro = null;
        var filtroCiudad = null;
        var filtroHorario = "13:00";

        var restaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9])
        ];
        expect(listado.obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario)).to.eql(restaurantes);
    })


    it('Al buscar restaurantes sin filtros, se encuentran todos los restaurantes', function(){

        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]),
        ];
        
        var listado = new Listado(listadoDeRestaurantes);

        var filtroRubro = null;
        var filtroCiudad = null;
        var filtroHorario = null;

        expect(listado.obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario)).to.eql(listadoDeRestaurantes);
    })

    it('Al buscar restaurantes por filtros invalidos, no se encuentran restaurantes', function(){

        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]),
        ];
        
        var listado = new Listado(listadoDeRestaurantes);

        var filtroRubro = 0;
        var filtroCiudad = 10;
        var filtroHorario = 5;

        assert.isEmpty(listado.obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario));
    })

    it('Al buscar restaurantes por filtros no coincidentes, no se encuentran restaurantes', function(){

        var listadoDeRestaurantes = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]),
        ];
        
        var listado = new Listado(listadoDeRestaurantes);

        var filtroRubro = "";
        var filtroCiudad = "";
        var filtroHorario = "";

        assert.isEmpty(listado.obtenerRestaurantes(filtroRubro, filtroCiudad, filtroHorario));
    })
})


// GUIA 3 TDD Nuevos requerimientos para reservas

describe('Calculo de precio base de una reserva', function(){

    it("Al realizar una reserva valida, se calcula correctamente el precio base", function(){
        var reserva = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");

        expect(reserva.obtenerPrecioBase()).to.equal(2800);

    })

    it("Al realizar una reserva valida, se calcula correctamente el precio base", function(){
        var reserva = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");

        expect(reserva.obtenerPrecioBase()).to.equal(300);

    })

})

describe('Calculo de precio final de una reserva', function(){

    it("Al realizar una reserva valida, se calcula correctamente el precio final", function(){
        var reserva = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");

        expect(reserva.obtenerPrecioFinal()).to.equal(2450);

    })

    it("Al realizar una reserva valida, se calcula correctamente el precio final", function(){
        var reserva = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");

        expect(reserva.obtenerPrecioFinal()).to.equal(100);

    })

})