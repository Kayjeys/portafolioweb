function verificarCumple() {
    var nombre = document.getElementById("nombre").value;
    var fechaNacimiento = new Date(document.getElementById("cumple").value);
    var mesActual = new Date().getMonth() + 1;

    if (fechaNacimiento.getMonth() + 1 === mesActual) {
      var resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerHTML = '<img src="2x1.jpg" alt="Felicidades">' + '<p>¡Felicidades, ' + nombre + '!Ganas 2X1.</p>';
    } else {
      document.getElementById("resultado").innerHTML = "";
    }
  }