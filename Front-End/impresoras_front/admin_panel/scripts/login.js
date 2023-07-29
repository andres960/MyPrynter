function comprobarAcceso(){

  var correo = localStorage.getItem("correo");
  var nombres = localStorage.getItem("nombres");
  var token = localStorage.getItem("token");
  var acceso = localStorage.getItem("acceso");




  if(acceso != "admin"){
    //alert("ACCESO DENEGADO, LOGUEESE");
  } else {
    window.location.href = 'dashboard.html';

  }
}

comprobarAcceso();












const url = "http://localhost/impresiones/public/api/auth/administrador/";


document.getElementById('formLoginAdmin').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario de manera predeterminada
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url + 'login', true);
    xhr.setRequestHeader('Content-type', 'application/json');
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Acceso concedido
        alert('Acceso concedido');

        var respuesta = JSON.parse(xhr.responseText);

        localStorage.setItem("id", respuesta.userdata.id);
        localStorage.setItem("correo", respuesta.userdata.email);
        localStorage.setItem("nombres", respuesta.userdata.nombres);
        localStorage.setItem("token", respuesta.token);

        localStorage.setItem("acceso", "admin");

        window.location.href = 'dashboard.html'; // Redirige a otra página en caso de acceso concedido



      } else {
        // Acceso denegado
        alert('Acceso denegado');
      }
    };
  
    var data = {
      email: email,
      password: password
    };
  
    xhr.send(JSON.stringify(data));
  });
  