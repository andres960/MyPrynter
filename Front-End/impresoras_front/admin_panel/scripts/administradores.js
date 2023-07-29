
function comprobarAcceso(){

    var correo = localStorage.getItem("correo");
    var nombres = localStorage.getItem("nombres");
    var token = localStorage.getItem("token");
    var acceso = localStorage.getItem("acceso");
  
  
  
  
    if(acceso != "admin"){
      alert("ACCESO DENEGADO, LOGUEESE");
      window.location.href = 'login.html';
    } else {
        const txtNombre = document.getElementById('txtUsuarioNombre');
        console.log(nombres);
          txtNombre.innerHTML = nombres;
    }
  }
  
  comprobarAcceso();




const url = "http://localhost/impresiones/public/api/";
const table = document.getElementById('tableClientes');
//const dataTable = new DataTable(table);


function validarFormulario() {
    var id = document.getElementById('idInput').value;
    var nombres = document.getElementById('nombresInput').value;
    var apellidos = document.getElementById('apellidosInput').value;
    var direccion = document.getElementById('direccionInput').value;
    var telefono = document.getElementById('telefonoInput').value;
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    if (id.trim() === '' || nombres.trim() === '' || apellidos.trim() === '' || direccion.trim() === '' || telefono.trim() === '' || email.trim() === '' || password.trim() === '') {
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
    document.getElementById('idInput').value = "";
    document.getElementById('nombresInput').value = "";
    document.getElementById('apellidosInput').value = "";
    document.getElementById('direccionInput').value = "";
    document.getElementById('telefonoInput').value = "";
    document.getElementById('emailInput').value = "";
    document.getElementById('passwordInput').value = "";


}


function cerrarModdal(){
    const btnModdalCerrar = document.getElementById('btnCerrarModdal');
    
    btnModdalCerrar.click();
}




const btnGuardar = document.getElementById('btnGuardar');

btnGuardar.addEventListener('click', function () {
    if (validarFormulario()) {
        crearImpresora();
    }
});





function crearImpresora() {

    var id = document.getElementById('idInput').value;
    var nombres = document.getElementById('nombresInput').value;
    var apellidos = document.getElementById('apellidosInput').value;
    var direccion = document.getElementById('direccionInput').value;
    var telefono = document.getElementById('telefonoInput').value;
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;


    var administrador = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        direccion: direccion,
        telefono: telefono,
        email: email,
        password: password
    };

    //event.preventDefault(); // Evita que se envíe el formulario de manera predeterminada


    console.log(administrador);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url + 'auth/administrador/register', true);
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 201) {
            // Acceso concedido
            alert('Administrador Creado');
            recargarTabla();
            vaciarFormulario();
            cerrarModdal();
            //window.location.href = 'dashboard.html'; // Redirige a otra página en caso de acceso concedido
        } else {
            // Acceso denegado
            alert('Administrador no pudo ser creado');
        }
    };



    xhr.send(JSON.stringify(administrador));

}

function validarFormulario() {
    var id = document.getElementById('idInput').value;
    var nombres = document.getElementById('nombresInput').value;
    var apellidos = document.getElementById('apellidosInput').value;
    var direccion = document.getElementById('direccionInput').value;
    var telefono = document.getElementById('telefonoInput').value;
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    if (id.trim() === '' || nombres.trim() === '' || apellidos.trim() === '' || direccion.trim() === '' || telefono.trim() === '' || email.trim() === '' || password.trim() === '') {
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




function cargarAdministradores() {

    $(document).ready(function () {
        $('#tableAdministradores').DataTable({
            "ajax": {
                "url": url + "administradores",
                "dataSrc": "data",
                "method": "GET" // Indica la propiedad que contiene los datos en el JSON
            },
            "columns": [
                { "data": "id" },
                { "data": "nombres" },
                { "data": "apellidos" },
                { "data": "telefono" },
                { "data": "email" },
                /*  {
                      "data": null,
                      "render": function (data, type, row) {
                          var editLink = '<a href="#" class="edit-link" data-id="' + row.id + '">Editar</a>';
                          var viewLink = '<a href="#" class="view-link" data-id="' + row.id + '">Visualizar</a>';
                          return editLink + ' / ' + viewLink;
                      }
                  } */

                // Agrega más columnas según tus necesidades
            ]
        });
    });


}


function recargarTabla() {
    var table = $('#tableAdministradores').DataTable();
    table.ajax.reload();

}



$('#tableAdministradores').on('click', '.view-link', function () {
    var id = $(this).data('id');
    // Realizar acciones con el ID para visualizar el registro correspondiente
    console.log('Visualizar ID:', id);
});

// Evento clic para enlaces de Editar y Visualizar
$('#tableAdministradores').on('click', '.edit-link', function () {
    var id = $(this).data('id');


    // Realizar acciones con el ID para editar el registro correspondiente
    console.log('Editar ID:', id);
});


function cargarModdalActualizar(id) {


}




cargarAdministradores();







function logout(){
    localStorage.clear();
    window.location.href = 'login.html';
  
    
  }