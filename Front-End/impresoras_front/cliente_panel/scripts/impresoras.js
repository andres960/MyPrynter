var id = 0;
function comprobarAcceso(){

  var correo = localStorage.getItem("correo");
  var nombres = localStorage.getItem("nombres");
  var token = localStorage.getItem("token");
  var acceso = localStorage.getItem("acceso");
  id = localStorage.getItem("id");



  if(acceso != "cliente"){
    alert("ACCESO DENEGADO, LOGUEESE");
    window.location.href = 'login.html';
  } else {
    const txtNombre = document.getElementById('txtUsuarioNombre');
    console.log(nombres);
      txtNombre.innerHTML = nombres;
  }



}

comprobarAcceso();





const url = "http://localhost:80/impresiones/public/api";
const table = document.getElementById('tableImpresoras');
//const dataTable = new DataTable(table);

const ep = url + "/impresoras/cliente/" + id;

$(document).ready(function () {
  $('#tableImpresoras').DataTable({
    "ajax": {
      "url": ep,
      "dataSrc": "data",
      "error": function(xhr, error, thrown) {
        // Controlar el error aquí
        if (xhr.status === 404) {
          // Manejar el error 404
          console.log("Error 404: Recurso no encontrado");
          alert("No tienes impresoras asignadas");
        } else {
          // Manejar otros errores
          console.log("Error desconocido:", error);
        }
      }
    
    },

  

    "columns": [
      { "data": "id" },
      { "data": "id_encargado" },
      { "data": "Modelo" },
      { "data": "Estado_taller" },
      { "data": "created_at" },
      { "data": "Estado_taller" },

      // Agrega más columnas según tus necesidades
    ]
  });
});
















function logout(){
  localStorage.clear();
  window.location.href = 'login.html';

  
}