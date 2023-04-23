//FORMULARIO DE CONSULTA CON ESTIMACION DE COSTO POR EDAD

// //INGRESO DE PERSONA
let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let mail = prompt("ingrese su correo electronico")
let edad = parseInt(prompt("ingrese su edad"))

// //intentos de ingreso de edad

if (isNaN(edad)){
    alert ("Error: no ingresaste una edad valida");
    let intentos = 0
    while(intentos <= 3 && isNaN(edad)){
        edad = parseInt(prompt("ingrese su edad nuevamente"));
        intentos = intentos + 1;
        if (intentos === 3){
            alert("No ingresaste una edad valida");
            break;
        }
    }
}else if (edad >= 60){
    alert("Se le otorgara un descuento del 15% sobre el valor del precio de la especialidad que usted eliga")
}
    

// //inicio consulta
let consulta = prompt(`ingrese una de las siguientes especialidades por la cual desea consultar: clinica, cirugia u odontologia`)

function diaSemana (dia1, dia2) {
    alert (`turno disponible los dias ${dia1}, ${dia2}`);
}

// PRECIOS

const resta = (a, b) => a - b;
const producto = (a, b) => a * b;

let precioClinica = 1000;
let precioCirugia = 2000;
let precioOdontologia = 3000;
let descuento = 0.15;
let precioTurno = 0

let precioClinicaDescuento = resta(precioClinica,producto(precioClinica,descuento))
    // console.log(precioClinicaDescuento);
let precioCirugiaDescuento = resta(precioCirugia,producto(precioCirugia,descuento))
    // console.log(precioCirugiaDescuento);
let precioOdontologiaDescuento = resta(precioOdontologia,producto(precioOdontologia,descuento))
    // console.log(precioOdontologiaDescuento);


switch (consulta.toLowerCase()){
    case "clinica":
        diaSemana("Lunes", "Martes");
        if (edad < 60){
            precioTurno = precioClinica
        } else {
            precioTurno = precioClinicaDescuento
        }
        alert (`El precio de la consulta es $${precioTurno}`)
        break;
    case "cirugia":
        diaSemana("Miercoles", "Viernes");
        if (edad < 60){
            precioTurno = precioCirugia
        } else {
            precioTurno = precioCirugiaDescuento
        }
        alert (`El precio de la consulta es $${precioTurno}`)
        break;
    case "Odontologia":
        diaSemana("Jueves", "Sabado");
        if (edad < 60){
            precioTurno = precioOdontologia
        } else {
            precioTurno = precioOdontologiaDescuento
        }
        alert (`El precio de la consulta es $${precioTurno}`)
        break;
    default:
        alert ("la especialidad no se encuentra disponible por el momento. Disculpe las molestias")
}