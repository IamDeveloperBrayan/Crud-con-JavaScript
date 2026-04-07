console.log("Hello, World!!!");

const prompt = require('prompt-sync')();

let baseDeDatos= [];

let preguntaBucle=true;

function DatosErroneos(){
    console.log(" \n Error!!!, los datos que ingreso son incorrectos");
    try{
        let preguntaBucleDos= prompt(" \n ¿Quieres intentarlo otra vez?. Marca (SI/NO): ").toLowerCase();

        if (preguntaBucleDos !== "si" && preguntaBucleDos !== "no") {
            console.log(" \n Error: Por favor ingresa solo (SI/NO)");
            DatosErroneos();
        }

        if (preguntaBucle === "si"){
            MenuDeInicio();
        } else {
            console.log(" \n El programa a finalizado con exito /_(0o0)_/")
        }

    } catch (error){ //Recibe el "error" si pone otra cosa
        console.error(" \n Error: Por favor ingresa solo (SI/NO)");
        DatosErroneos();
    }
}

function VolverAlBucle(){
    try{
        let preguntaBucleTres= prompt(" \n ¿Quieres intentarlo otra vez?. Marca (SI/NO): ").toLowerCase();

        if (preguntaBucleTres !== "si" && preguntaBucleTres !== "no") {
            console.log(" \n Error: Por favor ingresa solo (SI/NO)");
            DatosErroneos();
        }

        if (preguntaBucle === "si") {
            MenuDeInicio();
        } else {
            console.log(" \n El programa a finalizado con exito /_(0o0)_/")
        }

    } catch (error){ //Recibe el "error" si pone otra cosa
        console.error(" \n Error: Por favor ingresa solo (SI/NO)");
        DatosErroneos();
    }
}

function SolicitarDatos(){
    let nombreUsuario=prompt(" \n Ingrese nombre: ");
    let apellidoUsuario=prompt(" \n Ingrese apellido: ");
    let cedulaUsuario=prompt(" \n Ingrese ID(cedula): ");
    let emailUsuario=prompt(" \n Ingrese email: ");
    let edadUsuario=prompt(" \n Ingrese edad: ");
    let id=cedulaUsuario;
    let datosUsuarios=[id, nombreUsuario, apellidoUsuario, cedulaUsuario,emailUsuario, edadUsuario];
    return datosUsuarios;
}
    

function CrearUsuario(id, nombreUsuario, apellidoUsuario, cedulaUsuario,emailUsuario, edadUsuario){ 
    baseDeDatos.toSorted(id, {"nombre": nombreUsuario, "apellido": apellidoUsuario,"cedula": cedulaUsuario, "email":emailUsuario, "edad": edadUsuario});
    console.log(`\n Usuario con ID: ${id} creado exitosamente \n`);
}

function ActualizarUsuario(id){
    if (baseDeDatos.has(id)){
        console.log(" \n ---------- Opciones ---------- \n ");
        console.log("Selecciona (1) para actualizar Nombre");
        console.log("Selecciona (2) para actualizar Apellido");
        console.log("Selecciona (3) para actualizar ID(cedula)");
        console.log("Selecciona (4) para actualizar Imail");
        console.log("Selecciona (5) para actualizar Edad");

        try{
            let respuestaDos=number(prompt("Ingrece un numero del (1/4): "));

            if (respuestaDos === 1){
                let nombreActualizado=prompt(" \n ingrese el nuevo nombre: ");
                let idUsuario=baseDeDatos.get(id);
                idUsuario.nombreUsuario=nombreActualizado;
                console.log(` \n El nombre: ${nombreActualizado} se actualizo correctamente /(0.0)/`);
                VolverAlBucle(); 

            } else if (respuestaDos === 2){
                let apellidoActualizado=prompt(" \n ingrese el nuevo apellido: ");
                let idUsuario=baseDeDatos.get(id);
                idUsuario.apellidoUsuario=apellidoActualizado;
                console.log(` \n El apellido: ${apellidoActualizado} se actualizo correctamente /(0.0)/`);
                VolverAlBucle();

            } else if (respuestaDos === 3){
                let cedulaActualizada=prompt(" \n ingrese la nueva ID(cedula): ");
                let idUsuario=baseDeDatos.get(id);
                idUsuario.cedulaUsuario= cedulaActualizada;
                console.log(` \n La cedula: ${cedulaActualizada} se actualizo correctamente /(0.0)/`);
                VolverAlBucle();

            } else if (respuestaDos === 4){
                let emailActualizado=prompt(" \n ingrese la nueva Email: ")
                let idUsuario=baseDeDatos.get(id);
                idUsuario.emailUsuario=emailActualizado;
                console.log(` \n eL email: ${emailActualizado} se actualizo correctamente /(0.0)/`);
                VolverAlBucle();
            } else if (respuestaDos === 5){
                let edadActualizada=prompt(" \n ingrese la nueva edad: ")
                let idUsuario=baseDeDatos.get(id);
                idUsuario.edadUsuario=edadActualizada;
                console.log(` \n La edad: ${edadActualizada} se actualizo correctamente /(0.0)/`);
                VolverAlBucle();
            } else {
                DatosErroneos();
            }
        }
        catch(error){
            DatosErroneos();
        }
    }

}

function BorrarUsuario(id) {
    if (baseDeDatos.has(id)){
        console.log(" \n ¿Seguro que quieres eliminar el usuario?, se eliminaran todos los datos");
        let preguntaParaEliminar=prompt("Marca (si/no): ").toLocaleLowerCase();
        try{
            if (preguntaParaEliminar === "si"){
                baseDeDatos.delete(id);
                console.log(` \n El usuario ${id} se elimino de correctamente`);
                bucle_repetidor();
            } else if (preguntaParaEliminar === "no"){
                MenuDeInicio();
            } else {
                DatosErroneos();
            }
        }
        catch(error){
            DatosErroneos();
        }    
    }
        
}