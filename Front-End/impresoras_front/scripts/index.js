const url = "http://localhost/impresiones/public/api/";


function validarFormulario() {
    //var id = document.getElementById('idInput').value;
    var nombres = document.getElementById('nombresInput').value;
    var apellidos = document.getElementById('apellidosInput').value;
    var direccion = document.getElementById('direccionInput').value;
    var telefono = document.getElementById('telefonoInput').value;
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('emailInput').value;

    if (nombres.trim() === '' || apellidos.trim() === '' || direccion.trim() === '' || telefono.trim() === '' || email.trim() === '' || password.trim() === '') {
        // Si algún campo está vacío
        alert('Por favor, complete todos los campos.');
        return false;
    }

    if (id.length < 1 || nombres.length < 1 || apellidos.length < 1 || direccion.length < 1 || telefono.length < 1 || email.length < 1 || password.length < 1) {
        // Si algún campo tiene un tamaño incorrecto
        alert('Por favor, ingrese datos válidos en todos los campos.');
        return false;
    }

    // Si todos los campos están llenos y tienen un tamaño correcto
    // Realizar acciones adicionales o enviar los datos mediante una petición XHR

    return true;
}

function vaciarFormulario() {

    document.getElementById('nombresInput').value = "";
    document.getElementById('apellidosInput').value = "";
    document.getElementById('direccionInput').value = "";
    document.getElementById('telefonoInput').value = "";
    document.getElementById('emailInput').value = "";
   //document.getElementById('passwordInput').value = "";


}


function cerrarModdal(){
    const btnModdalCerrar = document.getElementById('btnCerrarModdal');
    
    btnModdalCerrar.click();
}




const btnGuardar = document.getElementById('btnGuardar');

btnGuardar.addEventListener('click', function () {
    if (validarFormulario()) {
        crearCliente();
    }
});





function crearCliente() {

    var nombres = document.getElementById('nombresInput').value;
    var apellidos = document.getElementById('apellidosInput').value;
    var direccion = document.getElementById('direccionInput').value;
    var telefono = document.getElementById('telefonoInput').value;
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('emailInput').value;


    var cliente = {
        nombres: nombres,
        apellidos: apellidos,
        direccion: direccion,
        telefono: telefono,
        email: email,
        password: password
    };

    //event.preventDefault(); // Evita que se envíe el formulario de manera predeterminada


   // console.log(administrador);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url + 'auth/cliente/register', true);
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 200) {
            // Acceso concedido
            alert('Cliente Creado, la password es su email');
            vaciarFormulario();
            window.location.href = './cliente_panel/login.html'; // Redirige a otra página en caso de acceso concedido
        } else {
            // Acceso denegado
            alert('Cliente no pudo ser creado, revise los datos o cambie el email');
        }
    };



    xhr.send(JSON.stringify(cliente));

}

function validarFormulario() {
    var nombres = document.getElementById('nombresInput').value;
    var apellidos = document.getElementById('apellidosInput').value;
    var direccion = document.getElementById('direccionInput').value;
    var telefono = document.getElementById('telefonoInput').value;
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('emailInput').value;

    if ( nombres.trim() === '' || apellidos.trim() === '' || direccion.trim() === '' || telefono.trim() === '' || email.trim() === '' || password.trim() === '') {
        // Si algún campo está vacío
        alert('Por favor, complete todos los campos.');
        return false;
    }

    if (nombres.length < 1 || apellidos.length < 1 || direccion.length < 1 || telefono.length < 1 || email.length < 1 || password.length < 1) {
        // Si algún campo tiene un tamaño incorrecto
        alert('Por favor, ingrese datos válidos en todos los campos.');
        return false;
    }

    // Si todos los campos están llenos y tienen un tamaño correcto
    // Realizar acciones adicionales o enviar los datos mediante una petición XHR

    return true;
}


