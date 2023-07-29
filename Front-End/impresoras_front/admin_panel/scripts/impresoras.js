
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
const table = document.getElementById('tableImpresoras');
//const dataTable = new DataTable(table);

$(document).ready(function () {
  $('#tableImpresoras').DataTable({
    "ajax": {
      "url": url + "impresoras",
      "dataSrc": "data" // Indica la propiedad que contiene los datos en el JSON
    },
    "columns": [
      { "data": "id" },
      { "data": "id_encargado" },
      { "data": "id_cliente" },
      { "data": "Modelo" },
      { "data": "Estado_taller" },
      { "data": "created_at" },
      { "data": "Estado_taller" },

      // Agrega más columnas según tus necesidades
    ]
  });
});


class Cliente {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }
}

class Administrador {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }
}


var administradores = [];
var clientes = [];

function llenarSelectorClientes() {
  const epClientes = url + "clientes";
  var xhr = new XMLHttpRequest();
  xhr.open('GET', epClientes, true);
  xhr.setRequestHeader('Content-type', 'application/json');

  xhr.onload = function () {
    if (xhr.status === 200) {

      var respuesta = JSON.parse(xhr.responseText);
      clientesRespuesta = respuesta.data;
      clientesRespuesta.forEach(function (cliente) {

        clienteObjeto = new Cliente(cliente.id, cliente.nombres);

        clientes.push(clienteObjeto);
      });

      llenarSelectores("clientes");

      console.log(clientes);
    } else {


    }
  };
  xhr.send();
}




function llenarSelectorAdministradores() {
  const epAdministradores = url + "administradores";

  var xhr = new XMLHttpRequest();
  xhr.open('GET', epAdministradores, true);
  xhr.setRequestHeader('Content-type', 'application/json');

  xhr.onload = function () {
    if (xhr.status === 201) {

      var respuesta = JSON.parse(xhr.responseText);
      administradoresRespuesta = respuesta.data;
      administradoresRespuesta.forEach(function (administrador) {

        administradorObjeto = new Administrador(administrador.id, administrador.nombres);
        administradores.push(administradorObjeto);
      });

      //llenarSelectores();
      llenarSelectores("administradores");

      console.log(administradores);
    } else {


    }
  };



  xhr.send();

}


function obtenerDatosSelectores() {








  //SEGUNDA PETICION



}




function llenarSelectores(selector) {

  const selectorAdministradores = document.getElementById('encargadoSelect');
  const selectorClientes = document.getElementById('clienteSelect');

  console.log(selectorAdministradores);
  console.log(selectorClientes);

  if (selector === "administradores") {
    administradores.forEach(function (administrador) {
      console.log("RRRR");

      const option = document.createElement('option');
      option.value = administrador.id;
      option.text = administrador.nombre;
      selectorAdministradores.appendChild(option);
    });

  }

  if (selector === "clientes") {

    clientes.forEach(function (cliente) {
      console.log("RRRR");

      console.log(cliente);

      const option = document.createElement('option');
      option.value = cliente.id;
      option.text = cliente.nombre;
      //option.text = "cliente[1]";

      selectorClientes.appendChild(option);
    });

  }




}



function recargarTabla() {
  var table = $('#tableImpresoras').DataTable();
  table.ajax.reload();

}







llenarSelectorAdministradores();
llenarSelectorClientes();

















//CREAR REGISTRO LOGICA

function validarFormulario() {
  //var id = document.getElementById('idInput').value;
  var encargadoSelect = document.getElementById('encargadoSelect').selectedIndex;
  var clienteSelect = document.getElementById('clienteSelect').selectedIndex;
  var modeloInput = document.getElementById('modeloInput').value;
  var marcaInput = document.getElementById('marcaInput').value;
  var nroSerieInput = document.getElementById('nroSerieInput').value;
  var conectividadInput = document.getElementById('conectividadInput').value;
  var resolucionInput = document.getElementById('resolucionInput').value;
  var estadoTintaInput = document.getElementById('estadoTintaInput').value;
  var estadoImpresoraInput = document.getElementById('estadoImpresoraInput').value;
  var estadoTallerInput = document.getElementById('estadoTallerInput').value;

  if (
    // id.trim() === '' ||
    encargadoSelect === -1 ||
    clienteSelect === -1 ||
    modeloInput.trim() === '' ||
    marcaInput.trim() === '' ||
    nroSerieInput.trim() === '' ||
    conectividadInput.trim() === '' ||
    resolucionInput.trim() === '' ||
    estadoTintaInput.trim() === '' ||
    estadoImpresoraInput.trim() === '' ||
    estadoTallerInput.trim() === ''
  ) {
    // Si algún campo está vacío o no se ha seleccionado una opción en los selectores
    alert('Por favor, complete todos los campos.');
    return false;
  }

  if (
    // id.length < 1 ||
    modeloInput.length < 1 ||
    marcaInput.length < 1 ||
    nroSerieInput.length < 1 ||
    conectividadInput.length < 1 ||
    resolucionInput.length < 1 ||
    estadoTintaInput.length < 1 ||
    estadoImpresoraInput.length < 1 ||
    estadoTallerInput.length < 1
  ) {
    // Si algún campo tiene un tamaño incorrecto
    alert('Por favor, ingrese datos válidos en todos los campos.');
    return false;
  }

  // Si todos los campos están llenos y tienen un tamaño correcto
  // Realizar acciones adicionales o enviar los datos mediante una petición XHR

  return true;
}



function crearImpresora() {

  //var id = document.getElementById('idInput').value;
  var encargadoSelect = document.getElementById('encargadoSelect').value;
  var clienteSelect = document.getElementById('clienteSelect').value;
  var modeloInput = document.getElementById('modeloInput').value;
  var marcaInput = document.getElementById('marcaInput').value;
  var nroSerieInput = document.getElementById('nroSerieInput').value;
  var conectividadInput = document.getElementById('conectividadInput').value;
  var resolucionInput = document.getElementById('resolucionInput').value;
  var estadoTintaInput = document.getElementById('estadoTintaInput').value;
  var estadoImpresoraInput = document.getElementById('estadoImpresoraInput').value;
  var estadoTallerInput = document.getElementById('estadoTallerInput').value;


  var impresora = {
    id_encargado: encargadoSelect,
    id_cliente: clienteSelect,
    modelo: modeloInput,
    marca: marcaInput,
    nroserie: nroSerieInput,
    conectividad: conectividadInput,
    resolucion: resolucionInput,
    estado_tinta: estadoTintaInput,
    estado_impresora: estadoImpresoraInput,
    estado_taller: estadoTallerInput
  };

  //event.preventDefault(); // Evita que se envíe el formulario de manera predeterminada


  console.log(impresora);

  const epImpresoraCrear = url + "impresoras";

  var xhr = new XMLHttpRequest();
  xhr.open('POST', epImpresoraCrear, true);
  xhr.setRequestHeader('Content-type', 'application/json');

  xhr.onload = function () {
    if (xhr.status === 200) {
      // Acceso concedido
      alert('Impresora Creada');
      recargarTabla();
      vaciarFormulario();
      cerrarModdal();
      //window.location.href = 'dashboard.html'; // Redirige a otra página en caso de acceso concedido
    } else {
      // Acceso denegado
      alert('Administrador no pudo ser creado');
    }
  };



  xhr.send(JSON.stringify(impresora));

}



function cerrarModdal() {
  const btnModdalCerrar = document.getElementById('btnCerrarModdal');

  btnModdalCerrar.click();
}


const btnGuardar = document.getElementById('btnGuardar');

btnGuardar.addEventListener('click', function () {
  if (validarFormulario()) {
    crearImpresora();
  }
});



function vaciarFormulario() {
  document.getElementById('encargadoSelect').value = "";
  document.getElementById('clienteSelect').value = "";
  document.getElementById('modeloInput').value = "";
  document.getElementById('marcaInput').value = "";
  document.getElementById('nroSerieInput').value = "";
  document.getElementById('conectividadInput').value = "";
  document.getElementById('resolucionInput').value = "";
  document.getElementById('estadoTintaInput').value = "";
  document.getElementById('estadoImpresoraInput').value = "";
  document.getElementById('estadoTallerInput').value = "";

}













function logout(){
  localStorage.clear();
  window.location.href = 'login.html';

  
}