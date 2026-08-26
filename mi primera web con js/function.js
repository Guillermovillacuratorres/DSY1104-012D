console.log("Hola");
const LLAVE_STORAGE = "soy_una_llave";

function guardar() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var direccion = document.getElementById("txtDireccion").value;
    var edad = document.getElementById("txtEdad").value;
    console.log(nombre);    

    if (nombre == ""  || nombre.length < 3) {
        alert("Error en el formato del nombre.");
    }else if (apellido == "" || apellido.length < 3) {
        alert("Error en el formato del apellido.");
    }else{
        var usuario = [
            {
                "nombre":nombre,
                "apellido":apellido,
                "direccion":direccion,
                "edad":edad
            }
        ];

        localStorage.setItem(LLAVE_STORAGE,JSON.stringify(usuario));

        var storage = localStorage.getItem(LLAVE_STORAGE);
        console.log("STORAGE SIN PARSE: ",storage);
        console.log("STORAGE CON PARSE: ", JSON.parse(storage));
        

        

    }
}