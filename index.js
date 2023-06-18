const lista = document.getElementById("listado")

const botonFormulario = document.getElementById("boton")
    boton.addEventListener("click", () => {
            
        let div = document.createElement("div");
        let formulario = document.createElement("form")

        // div.innerHTML = `<h5> Usted está en la especialidad ${e.target.innerHTML}</h5>`;
        
        div.className = "contenedor"
        
        formulario.innerHTML = `
        <input type="text" id="nombre" name="nombre" placeholder="Nombre">
        <input type="text" id="apellido" name="apellido" placeholder="Apellido">
        <input type="text" id="mail" name="mail" placeholder="Mail">
        <input type="number" id="edad" name="edad" placeholder="Edad">
        <input type="submit" id="submit" value="Enviar">
        `;

        // formulario.className = "contenedorFormularioPadre"
        // formulario.className = "form"
        contenedor.append(div);
        contenedor_formulario.append(formulario);
        enviar(formulario)

    });

    
    function enviar(formulario){
        
        formulario.addEventListener("submit", (ele) => {
            ele.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const apellido = document.getElementById('apellido').value;
            const mail = document.getElementById('mail').value;
            const edad = document.getElementById('edad').value;
            
            let usuarioNuevo = {
                
                nombre: nombre,
                apellido: apellido,
                mail: mail,
                edad: edad,
            }

            traerDatos(usuarioNuevo);
                
        });
    }   
    
    const selector = document.getElementById("selector");
    
    
    const selectorEdades = async () => {
        const response = await fetch("./data.json")
        const data = await response.json();

        switch (selector.value){
            case "opcion1":
                data.find(usuario => {
                    if(usuario.edad <= 18){
                        const li = document.createElement("li");
                                li.innerHTML = `
                                <h2>Nombre: ${usuario.nombre}</h2>
                                <h3>Apellido: ${usuario.apellido}</h3>
                                <p>Mail: ${usuario.mail}</p>
                                <p>Edad: ${usuario.edad}</p>
                                <hr />
                                `;
                                lista.append(li)
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'No hay usuarios menores de 18 años',
                            footer: '<a href="">Why do I have this issue?</a>'
                          })
                    }
                });
                break;
            case "opcion2":
                data.find(usuario => {
                    if(usuario.edad > 18 && usuario.edad < 60){
                        const li = document.createElement("li");
                                li.innerHTML = `
                                <h2>Nombre: ${usuario.nombre}</h2>
                                <h3>Apellido: ${usuario.apellido}</h3>
                                <p>Mail: ${usuario.mail}</p>
                                <p>Edad: ${usuario.edad}</p>
                                <hr />
                                `;
                                lista.append(li)
                    }else{
                        
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'No hay usuarios entre ese rango de edades',
                            footer: '<a href="">Why do I have this issue?</a>'
                          })
                    }
                });
                break;
            case "opcion3":
                data.find(usuario => {
                    if(usuario.edad > 60 && usuario.edad < 90){
                        const li = document.createElement("li");
                                li.innerHTML = `
                                <h2>Nombre: ${usuario.nombre}</h2>
                                <h3>Apellido: ${usuario.apellido}</h3>
                                <p>Mail: ${usuario.mail}</p>
                                <p>Edad: ${usuario.edad}</p>
                                <hr />
                                `;
                                lista.append(li)
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'No hay usuarios entre ese rango de edades',
                            footer: '<a href="">Why do I have this issue?</a>'
                            })
                    }
                });
                break;
            case "opcion4":
                data.find(usuario => {
                    if(usuario.edad >= 90){
                        const li = document.createElement("li");
                                li.innerHTML = `
                                <h2>Nombre: ${usuario.nombre}</h2>
                                <h3>Apellido: ${usuario.apellido}</h3>
                                <p>Mail: ${usuario.mail}</p>
                                <p>Edad: ${usuario.edad}</p>
                                <hr />
                                `;
                                lista.append(li)
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'No hay usuarios mayores de 90 años',
                            footer: '<a href="">Why do I have this issue?</a>'
                            })
                    }
                });
                break;
            default:
                Swal.fire(
                    'Queres elegir otra opción?',
                    'No es una opción válida la elegida',
                    'question'
                  )
        }
        
    }

    selector.addEventListener("change", selectorEdades);



    const verUsuarios = document.getElementById("verUsuarios");


    const mostrar = async () => {
        const response = await fetch("./data.json")
        const data = await response.json();

        data.forEach(usuario => {
            const li = document.createElement("li");
                    li.innerHTML = `
                    <h2>Nombre: ${usuario.nombre}</h2>
                    <h3>Apellido: ${usuario.apellido}</h3>
                    <p>Mail: ${usuario.mail}</p>
                    <p>Edad: ${usuario.edad}</p>
                    <hr />
                    
                    `;
                    lista.append(li)
        });
    }
    verUsuarios.addEventListener("click", mostrar)
    
    
    const traerDatos = async (usuarioNuevo) => {

            const response = await fetch("./data.json")
            const data = await response.json();            
            data.push(usuarioNuevo)
            console.log(data);

            await gaurdarDatos(data);
            
            
        }
        
        const gaurdarDatos = async (data) => {
            
            const jsonData = JSON.stringify(data);
            await fetch("./data.json", {
                method: `POST`,
                headers: {'Content-Type': 'application/json'},
                body: jsonData
                
            })
            console.log("datos guardados correctamente");
        
        }
       

let actualizar = document.getElementById("refresh");
    actualizar.addEventListener("click", () =>{


  

    Toastify({
        text: "This is a toast",  
        duration: 3000    
        }).showToast();

    
        location.reload()
});