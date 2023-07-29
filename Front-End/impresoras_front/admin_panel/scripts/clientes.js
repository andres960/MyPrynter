

function comprobarAcceso() {

  var correo = localStorage.getItem("correo");
  var nombres = localStorage.getItem("nombres");
  var token = localStorage.getItem("token");
  var acceso = localStorage.getItem("acceso");




  if (acceso != "admin") {
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

$(document).ready(function () {
  $('#tableClientes').DataTable({
    "ajax": {
      "url": url + "clientes",
      "dataSrc": "data" // Indica la propiedad que contiene los datos en el JSON
    },
    "columns": [
      { "data": "id" },
      { "data": "nombres" },
      { "data": "apellidos" },
      { "data": "direccion" },
      { "data": "telefono" },
      { "data": "email" },
      {
        "data": "id",
        "render": function (data, type, row, meta) {
          return '<button class="btn-eliminar" onClick="eliminarCliente(' + data + ')" href="eliminar/' + data + '" ><i class="icono-eliminar"></i>Eliminar</button>';
        }
      }
      // Agrega más columnas según tus necesidades
    ]
  });
});








function logout() {
  localStorage.clear();
  window.location.href = 'login.html';


}