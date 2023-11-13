<template>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>SIGN UP</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" type="text/css" href="styleregis.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@900&family=Roboto&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family>Fira+Code&display=swap" rel="stylesheet">
</head>

<body>
    <div class="cuadro" ALIGN="CENTER">
        <section class="formulario" ALIGN="CENTER">
            <h2 style="color: #00aff0; text-shadow: 1px 1px 2px black;">SIGN UP</h2><br>
            <h2 style="color: rgb(208, 152, 56); text-shadow: 1px 1px 2px black;"></h2><br>
            <form id="miformulario" action="login.html" style="font-family: 'Raleway', sans-serif;" method="post" onsubmit="return validarFormulario1()">
                <label for="nombre">Nombre:</label><br>
                <input type="text" id="nombre" name="nombre" required>
                <br><br>

                <label for="apellido" style="text-align: center;">Apellidos:</label><br>
                <input type="text" id="apellido" name="apellido" required>
                <br><br>

                <label for="correo">Correo Electrónico:</label><br>
                <input type="email" id="correo" name="correo" required>
                <br><br>

                <label for="contrasena">Contraseña:</label><br>
                <input type="password" id="contrasena" name="contrasena" required>
                <br><br>

                <label for="nacimiento" style="text-align: center;">Fecha de nacimiento:</label><br>
                <input type="date" id="nacimiento" name="nacimiento" required>
                <br><br>

                <label for="cedula" style="text-align: center;">Cedula:</label><br>
                <input type="number" id="cedula" name="cedula" required>
                <br><br>

                <label for="telefono" style="text-align: center;">Número de teléfono:</label><br>
                <input type="number" id="telefono" name="telefono" required>
                <br><br>

                <label for="ciudad" style="text-align: center;">Ciudad:</label><br>
                <input type="text" id="ciudad" name="ciudad" required>
                <br><br>

                <label for="direccion" style="text-align: center;">Dirección:</label><br>
                <input type="text" id="direccion" name="direccion" required>
                <br><br>

                <label for="curso">Curso:</label><br>
                <select style="font-family: 'Raleway', sans-serif;" id="curso" name="curso" onchange="mostrarCamposAdicionales()">
                <option value="">Escoje una opción</option>
                <option value="soltero">Soltero</option>
                <option value="casado">Casado</option>
                <option value="casado">viudo</option>
                <option value="casado">divorciado</option>
                </select>
                <br><br>

        <div id="camposAdicionales" style="display: none;">
            <!-- Campos adicionales que se mostrarán cuando se seleccione "casado" -->
            <label for="conyuge">Nombre del cónyuge:</label><br>
            <input type="text" id="conyuge" name="conyuge" required>
            <br><br>

            <label for="hijos">Número de hijos:</label><br>
            <input type="number" id="hijos" name="hijos" required>
            <br><br>
        </div>

        <input type="submit" id="enviar" value="Enviar">
                <a></a>
                <p id="mensajeError" style="color: red;"></p><br>
            </form>

            <img id="Imagen" src="" alt="Imagen" style="display: none;">
        </section>
    </div>
</body>
</template>



<script>
function validarFormulario1() {
    var selectCurso = document.getElementById("curso");
    var inputEnviar = document.getElementById("enviar");
    var mensajeError = document.getElementById("mensajeError");

    if (selectCurso.value === "") {
        mensajeError.textContent = "Debes seleccionar una opción válida en el campo 'Curso'.";
        inputEnviar.disabled = true; 
        return false; 
    } else {
        mensajeError.textContent = "";  
        inputEnviar.disabled = false; 
       
        return true;
    }
}

function validarCorreo() {
    var correo = document.getElementById("correo").value;
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(correo)) {
      alert("El correo electrónico no es válido.");
      return false;
    }
    return true;
  }

  function validarNombre() {
    var nombre = document.getElementById("nombre").value;
    if (nombre === "") {
      alert("Por favor, introduzca su nombre.");
      return false;
    }
    return true;
  }
  

  function mostrarCamposAdicionales() {
    var selectCurso = document.getElementById('curso');
    var camposAdicionales = document.getElementById('camposAdicionales');

    if (selectCurso.value === 'casado') {
        camposAdicionales.style.display = 'block';
    } else {
        camposAdicionales.style.display = 'none';
    }
}
</script>



<style>
*{
    padding: 0;
    margin: 0;
}

body{
    height: auto;
}
header {
    background-color: #00AFF0; /* Color de fondo del encabezado */
    color: #fff; /* Color del texto */
    padding: 10px; /* Espaciado interno del encabezado */
    display: flex; /* Mostrar elementos en línea */
    justify-content: space-between; /* Alinear elementos en el encabezado */
    height: 3vw;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra debajo del botón */
}

/* Estilos para el logotipo */
.logo {
    display: flex;
    align-items: center;
}

.logo img {
    width: 100px; /* Ancho de la imagen del logotipo */
    height: auto; /* Altura automática para mantener la proporción */
    margin-right: 10px; /* Espaciado a la derecha de la imagen */
    cursor: pointer; /* Cambiar el cursor al hacer clic en la imagen */
}

/* Estilos para los botones */
.botones {
    display: flex; /* Mostrar botones en línea */
    align-items: center; /* Alinear botones verticalmente al centro */
    
}

.boton {
    background-color: #00AFF0; /* Color de fondo del botón */
    color: #ffffff; /* Color del texto del botón */
    border: none;
    padding: 10px 20px; /* Espaciado interno del botón */
    margin-left: 10px; /* Espaciado entre botones */
    cursor: pointer;
    font-family: 'Fira Code', monospace;
}

.boton + .boton {
    border-left: 1px solid #fff; /* Línea entre botones */
}

/* Línea entre botones ///////////////////////////////////////////////////////////////*/

.formulario {
    width: 50vh;
    margin: 4vh;
    border: 0.5vh solid #00000000;
    padding: 2vh;
    text-align: center;
    padding-bottom: 2vh;
    border-radius: 2vh;
    background-color: rgba(255, 255, 255, 0.66);
    font-family: 'Raleway', sans-serif;
    font-family: 'Fira Code', monospace;
}

img{
    width: 100%;
    height: auto;
    border-radius: 1.5vh;
}

body{
    background-image: url(multi/sisas.jpg);
    background-repeat: no-repeat; 
    background-size: cover; 
    background-position: center center; 
    height: 950px;
    background-color: #00AFF0;
}

.formulario input{
    color: #000000;
    background-color: rgba(251, 251, 251, 0.848);
    border-radius: 1.5vh;
    padding: 1vh;
    width: 45vh;
    border-color: rgba(0, 0, 0, 0);
    text-align: center;
    
}

.enviar{
    color: #000000;
}

input[type="submit"]:hover {
    background-color: #d4a53d; 
    color: #fff7f7; 
    border: 2px solid #d4a53d; /* Cambia el borde en el hover */
    cursor: pointer; /* Cambia el cursor en el hover (opcional) */
    
}

</style>