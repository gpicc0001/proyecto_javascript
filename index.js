//FORMULARIO DE CONSULTA CON ESTIMACION DE COSTO POR EDAD

//BASE DE DATOS DE USUARIOS
const infoUsuarios = [
    {id:1, nombre:"Pedro",apellido:"perez",mail: "pp@gmail.com",edad: 23},
    {id:2, nombre:"Pablo",apellido:"Hernandez",mail: "ph@gmail.com",edad: 62},
    {id:3, nombre:"Mateo",apellido:"fernandez",mail: "mf@gmail.com",edad: 45},
    {id:4, nombre:"Paula",apellido:"Tremor",mail: "pt@gmail.com",edad: 34},
    {id:5, nombre:"Monica",apellido:"Wagen",mail: "mw@gmail.com",edad: 71}
]
//CREADOR DE MODELO DE USUARIOS
class Personas {
    constructor (id, nombre, apellido, mail, edad){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.edad = edad;
        
    }
}
//BASE DE DATOS HISTORIA CLINICA DE CADA USUARIO

const historiaUsuarios = [
    {id:1 ,numConsulta:2, tipoConsulta: "Odontologia"},
    {id:2 ,numConsulta:5, tipoConsulta: "Clinica"},
    {id:3 ,numConsulta:1, tipoConsulta: "Cirugia"},
    {id:4 ,numConsulta:11, tipoConsulta: "Odontologia"},
    {id:5 ,numConsulta:5, tipoConsulta: "Clinica"},

]
//CONSTRUCTOR DE HISTORIA CLINICA - A INGRESAR POR EL CONSULTORIO.
class Historial {
    constructor (id, numConsulta, tipoConsulta){
          this.id = id;
          this.numConsulta = numConsulta;
          this.tipoConsulta = tipoConsulta;  
    }

}

// //INGRESO DE USUARIO

let sumaId = infoUsuarios.length

let id = parseFloat(prompt("ingresa ID")) 
    if ( id && id!=isNaN(id)){
        id = sumaId + 1
    }else{
        alert("no ingresaste un valor numerico")
        let intentosid = 0
        while(intentosid <= 3 && isNaN(id)){
            id = parseInt(prompt("ingresa un ID nuevamente"));
            intentosid = intentosid + 1;
            if (intentosid === 3){
                alert("No ingresaste una id valido");
                break;
            }
        }
    }

let nombre = prompt("ingresa el nombre");
let apellido = prompt("ingresa el apellido");
let mail = prompt("ingresa el mail");

//CONDICION DE BUSQUEDA PARA VER SI SE LOGGEO ALGUNA VEZ

const crossplot = () => {
        const historiaUsuariosCross = historiaUsuarios.filter(item => item.id === encontrado.id)
        console.log(historiaUsuariosCross);
        for (const item of historiaUsuariosCross){
            let mensaje = ` 
            Id: ${item.id},
            Cantidad de consultas realizadas: ${item.numConsulta},
            Tipo de consulta realizada: ${item.tipoConsulta} `
            alert(mensaje);
        }
}
const encontrado = infoUsuarios.find (item => item.mail === mail)

if (encontrado){
    alert(`ya existe una cuenta con ${encontrado.mail}`);
    alert(`su ID es: ${encontrado.id}`);
    crossplot();
        } else {
            alert(`de acuerdo, no se ecnuentra en la base de datos, continue con el Login!`);
            }

//CONDICION DE SACADA EN CASO DE NO HABER INGRESADO ALGUN VALOR
let edadnueva = 0
if (id === "ESC" || id === ""|| nombre === "ESC" || nombre === "" || apellido === "ESC" || apellido === "" || mail === "ESC" || mail === ""){
        alert ("no ingresaste ningun valor valido como para continuar");
    
    } else if(!encontrado){
        
        let edad = parseInt(prompt("ingrese su edad"));
        edadnueva = edad;
    
        // INTENTOS INGRESO DE EDAD
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
        
    }else{
        
        alert("continue con la consulta")
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

let precioCirugiaDescuento = resta(precioCirugia,producto(precioCirugia,descuento))

let precioOdontologiaDescuento = resta(precioOdontologia,producto(precioOdontologia,descuento))


// //inicio consulta

function diaSemana (dia1, dia2) {
    alert (`turno disponible los dias ${dia1}, ${dia2}`);
}

let consulta = prompt(`ingrese una de las siguientes especialidades por la cual desea consultar: clinica, cirugia u odontologia`)
    
switch (consulta.toLowerCase()){
    case "clinica":
        diaSemana("Lunes", "Martes");
        if (encontrado && encontrado.edad < 60){
            precioTurno = precioClinica
        }else if (encontrado && encontrado.edad >= 60){
            precioTurno = precioClinicaDescuento
        }else if (edadnueva < 60){
            precioTurno = precioCirugia
        }else {
            precioTurno = precioCirugiaDescuento
        }
        alert (`El precio de la consulta es $${precioTurno}`)
        break;
    case "cirugia":
        diaSemana("Miercoles", "Viernes");
        if (encontrado && encontrado.edad < 60){
            precioTurno = precioCirugia
        }else if (encontrado && encontrado.edad >= 60){
            precioTurno = precioCirugiaDescuento
        }else if (edadnueva < 60){
            precioTurno = precioCirugia
        } else {
            precioTurno = precioCirugiaDescuento
        }
        alert (`El precio de la consulta es $${precioTurno}`)
        break;
    case "odontologia":
        diaSemana("Jueves", "Sabado");
        if (encontrado && encontrado.edad < 60){
            precioTurno = precioOdontologia
        }else if (encontrado && encontrado.edad >= 60){
            precioTurno = precioOdontologiaDescuento
        }else if (edadnueva < 60){
            precioTurno = precioOdontologia
        } else {
            precioTurno = precioOdontologiaDescuento
        }   
        alert (`El precio de la consulta es $${precioTurno}`)
        break;
    default:
        alert (`la especialidad ${consulta} no se encuentra disponible por el momento. Disculpe las molestias`)
}

