

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









function logout(){
  localStorage.clear();
  window.location.href = 'login.html';

  
}