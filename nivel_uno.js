console.log("Hello, World!!!");

const prompt = require('prompt-sync')();

let baseDeDatos= [];

let preguntaBucle=True;

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
        console.log(" \n Error: Por favor ingresa solo (SI/NO)");
        DatosErroneos();
    }
}

function VolverAlBucle_(){
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
        console.log(" \n Error: Por favor ingresa solo (SI/NO)");
        DatosErroneos();
    }
}