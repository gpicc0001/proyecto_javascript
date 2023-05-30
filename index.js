// FORMULARIO DE CONSULTA CON ESTIMACION DE COSTO POR EDAD

// BASE DE DATOS DE USUARIOS
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

localStorage.setItem("infoUsuarios",JSON.stringify(infoUsuarios))
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
localStorage.setItem("historiaUsuarios",JSON.stringify(historiaUsuarios))


const botones = document.querySelectorAll("#boton") // busco los botones
let contenedor = document.getElementById("contenedor"); //me traigo el contenedor
let form = document.getElementById("contenedor_formulario");
let usuariologgeado = JSON.parse(localStorage.getItem("infoUsuarios")); 

botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        
        let div = document.createElement("div");
        let formulario = document.createElement("form")

        div.innerHTML = `<h5> Usted está en la especialidad ${e.target.innerHTML}</h5>`;
        
        div.className = "contenedor"
        
        formulario.innerHTML = `
        <input type="text" name="nombre" placeholder="Nombre">
        <input type="text" name="apellido" placeholder="Apellido">
        <input type="text" name="mail" placeholder="Mail">
        <input type="number" name="edad" placeholder="Edad">
        <input type="submit" id="submit" value="Enviar">
        `;

        formulario.className = "contenedorFormularioPadre"
        formulario.className = "form"
        contenedor.append(div);
        contenedor_formulario.append(formulario);
        enviar(formulario)
    
    });
    
});

//FUNCION PARA BORRAR EL FORMULARIO DEL DIV.

const vaciar = () => {
    let borrar = document.getElementById("contenedorFormPadre");
    borrar.innerHTML = "";

    mensaje();
}

const mensaje = () => {
    let contenedor = document.getElementById("contenedorFormPadre");
    let divTexto = document.createElement("div");
    let texto = document.createElement("p");
    
    for (const item of usuariologgeado){

        divTexto.innerHTML = `<h5> Bienvenido ${item.nombre} </h5>`
        texto.innerHTML = `Recibira un mail con la confirmacion de inicio de sesión y solicito un llamado del sector`
    }
    
    
        
       
  
    
    
    contenedor.append(divTexto);
    contenedor.append(texto);
    

}





function enviar(formulario){

    formulario.addEventListener("submit", (ele) => {
    
        ele.preventDefault();
        let usuariosStorage = localStorage.getItem("infoUsuarios");
        let usuarios = JSON.parse(usuariosStorage);
    
        let input = ele.target.children;
        
        //CONDICION DE INGRESO CORRECTO DE MAIL

        if (!input[2].value.includes("@")){

            alert("debes ingresar un mail");
            input[2].value = " ";
        
        //CONDICION DE USUARIO REGISTRADO O NO    

        } else if( usuariosStorage.includes(input[2].value)) {

            alert("ya existe el usuario");
        
         }else{
                let usuario = {

                    id: usuarios.length + 1,
                    nombre: input[0].value,
                    apellido: input[1].value,
                    mail: input[2].value,
                    edad: input[3].value,
            
                };
                usuarios.push(usuario);
                localStorage.setItem("infoUsuarios",JSON.stringify(usuarios))
                
            }
          vaciar(); 
         
        });
    }
    





let actualizar = document.getElementById("refresh");
actualizar.addEventListener("click", () =>{
    location.reload();
});


