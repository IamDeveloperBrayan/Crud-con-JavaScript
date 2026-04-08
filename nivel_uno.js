console.log(" \n Hello, World!!! Welcome to Program!!!!!");

const prompt = require('prompt-sync')();

let baseDeDatos= new Map();

let preguntaBucleUno=true;

function TextoValido(valor){
    let texto = valor.trim();

    if (texto.length === 0){
        return false;
    }

    if (!isNaN(Number(texto))){
         return false;
    }

    return true;
}

function NumeroValido(valor){
    let conversion=Number(valor);
    if (valor.trim() === "" || isNaN(conversion)) {
        return false;
    }

    return true;
}

function DatosErroneos(){
    console.log(" \n Error!!!, los datos que ingreso son incorrectos");
    try{
        let preguntaBucleDos= prompt(" \n ¿Quieres intentarlo otra vez?. Marca (SI/NO): ").toLowerCase();
        TextoValido(preguntaBucleDos);
        if (TextoValido(preguntaBucleDos)){
            if (preguntaBucleDos !== "si" && preguntaBucleDos !== "no") {
                console.log(" \n Error: Por favor ingresa solo (SI/NO)");
                DatosErroneos();
                return;
            }

            if (preguntaBucleDos === "si"){
                MenuDeInicio();
                return;
            } else {
                console.log(" \n El programa a finalizado con exito /_(0o0)_/");
                return;
            }
        } else {
            DatosErroneos();
            return;
        }

    } catch (error){ //Recibe el "error" si pone otra cosa
        console.log(" \n Error: Por favor ingresa solo (SI/NO)");
        DatosErroneos();
        return;
    }
}

function VolverAlBucle(){
    try{
        let preguntaBucleTres= prompt(" \n ¿Quieres intentarlo otra vez?. Marca (SI/NO): ").toLowerCase();
        TextoValido(preguntaBucleTres);
        if (TextoValido(preguntaBucleTres)){
            if (preguntaBucleTres !== "si" && preguntaBucleTres !== "no") {
                console.log(" \n Error: Por favor ingresa solo (SI/NO)");
                DatosErroneos();
                return;
            }

            if (preguntaBucleTres === "si") {
                MenuDeInicio();
                return;
            } else {
                console.log(" \n El programa a finalizado con exito /_(0o0)_/");
                return;
            }
        } else{
            DatosErroneos();
            return;
        }
    } catch (error){ //Recibe el "error" si pone otra cosa
        console.error(" \n Error: Por favor ingresa solo (SI/NO)");
        DatosErroneos();
        return;
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
    baseDeDatos.set (id, {"nombre": nombreUsuario, "apellido": apellidoUsuario,"cedula": cedulaUsuario, "email":emailUsuario, "edad": edadUsuario});
    console.log(`\n Usuario con ID: ${id} creado exitosamente \n`);
    return;
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
            let entradaNumero=prompt("Ingrese un numero del (1/5): ");
            NumeroValido(entradaNumero);
            if (NumeroValido(entradaNumero)){
                let respuestaDos=parseInt(entradaNumero);
                if (respuestaDos >= 1 && respuestaDos <= 5){

                    if (respuestaDos === 1){
                        let nombreActualizado=prompt(" \n ingrese el nuevo nombre: ");
                        let idUsuario=baseDeDatos.get(id);
                        idUsuario.nombre=nombreActualizado;
                        console.log(` \n El nombre: ${nombreActualizado} se actualizo correctamente /(0.0)/`);
                        VolverAlBucle();
                        return;
                    } 
                    
                    if (respuestaDos === 2){
                        let apellidoActualizado=prompt(" \n ingrese el nuevo apellido: ");
                        let idUsuario=baseDeDatos.get(id);
                        idUsuario.apellido=apellidoActualizado;
                        console.log(` \n El apellido: ${apellidoActualizado} se actualizo correctamente /(0.0)/`);
                        VolverAlBucle();
                        return;
                    } 
                    
                    if (respuestaDos === 3){
                        let cedulaActualizada=prompt(" \n ingrese la nueva ID(cedula): ");
                        let idUsuario=baseDeDatos.get(id);
                        idUsuario.cedula= cedulaActualizada;
                        console.log(` \n La cedula: ${cedulaActualizada} se actualizo correctamente /(0.0)/`);
                        VolverAlBucle();
                        return;
                    }
                    
                    if (respuestaDos === 4){
                        let emailActualizado=prompt(" \n ingrese la nueva Email: ")
                        let idUsuario=baseDeDatos.get(id);
                        idUsuario.email=emailActualizado;
                        console.log(` \n eL email: ${emailActualizado} se actualizo correctamente /(0.0)/`);
                        VolverAlBucle();
                        return;
                    } 
                    
                    if (respuestaDos === 5){
                        let edadActualizada=prompt(" \n ingrese la nueva edad: ");
                        let idUsuario=baseDeDatos.get(id);
                        idUsuario.edad=edadActualizada;
                        console.log(` \n La edad: ${edadActualizada} se actualizo correctamente /(0.0)/`);
                        VolverAlBucle();
                        return;
                    } else {
                        DatosErroneos();
                        return;
                    }

                } else {
                    DatosErroneos();
                    return;
                }
            } else {
                DatosErroneos();
                return;
            }
        } catch(error){
            DatosErroneos();
            return;
        }
    }

}

function BorrarUsuario(id) {
    if (baseDeDatos.has(id)){
        console.log(" \n ¿Seguro que quieres eliminar el usuario?, se eliminaran todos los datos");

        try{
            let preguntaParaEliminar=prompt("Marca (si/no): ").toLowerCase();
                TextoValido(preguntaParaEliminar);
                if (preguntaParaEliminar === "si"){
                    baseDeDatos.delete(id);
                    console.log(` \n El usuario ${id} se elimino de correctamente`);
                    VolverAlBucle();
                    return;
                } else if (preguntaParaEliminar === "no"){
                    MenuDeInicio();
                    return;
                } else {
                    DatosErroneos();
                    return;
                }
        } catch(error){
            DatosErroneos();
            return;
        }    
    }
        
}

function MenuDeInicio() {
    while (preguntaBucleUno){
        console.log(" \n -------------- Menu de Opciones --------------")
        console.log("Selecciona (1) para crear un usuario")
        console.log("Selecciona (2) para ver los datos del usuario")
        console.log("Selecciona (3) para actualizar datos del usuario")
        console.log("Selecciona (4) para borrar usuario")
        console.log("Selecciona (5) para salir del programa")
        
        try{
            respuestaUno=prompt(" \n Ingresa un numero del (1/5): ")
            NumeroValido(respuestaUno);
            if (NumeroValido(respuestaUno)){
                let preguntaUno=parseInt(respuestaUno);
                if (preguntaUno === 1) {
                    datos= SolicitarDatos();
                    CrearUsuario(...datos);
                    return;
                }
                
                if (preguntaUno === 2) {

                    if (baseDeDatos.size === 0){
                        console.log(" \n La base de datos esta vacia, primero cree un usuario")
                        MenuDeInicio();
                        return;

                    }
                    
                    if (baseDeDatos.size >= 1){
                        id= prompt(" \n Ingrese la ID(cedula): ") 

                        if (baseDeDatos.has(id)){
                                console.log(` \n Nombre: ${baseDeDatos.get(id).nombre} `);
                                console.log(` \n Apellido: ${baseDeDatos.get(id).apellido} `);
                                console.log(` \n ID: ${baseDeDatos.get(id).cedula} `);
                                console.log(` \n Imail: ${baseDeDatos.get(id).email} `);
                                console.log(` \n Edad: ${baseDeDatos.get(id).edad} `);
                                VolverAlBucle();
                                return;
                        }

                    } else {
                        DatosErroneos();
                        return;
                    }
                }
                
                if (preguntaUno === 3) {

                    if (baseDeDatos.size === 0){
                        console.log(" \n La base de datos esta vacia, primero cree un usuario");
                        MenuDeInicio();
                        return;
                    } else {
                        id=prompt(" \n Ingrese la ID(cedula) para verificar que este en la base de datos: ");
                        ActualizarUsuario(id);
                        return;
                    }
                }
                
                if (preguntaUno === 4) {

                    if (baseDeDatos.size === 0){
                        console.log(" \n La base de datos esta vacia, primero cree un usuario");
                        MenuDeInicio();
                        return;
                    } else {
                        id=prompt(" \n Ingrese la ID(cedula) para verificar que este en la base de datos: ");
                        BorrarUsuario(id);
                        return;
                    }
                }
                
                if (preguntaUno === 5) {
                    console.log(" \n Programa cerrado con exito");
                    return;
                } else {
                    DatosErroneos();
                    return;
                }
            } else {
                DatosErroneos();
                return;
            }

        } catch (error){
            DatosErroneos();
            return;
        }
    }
}

let programaIniciado=MenuDeInicio();