document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");
  const nombreInput = document.getElementById("nombre");
  const passwordInput = document.getElementById("password");
  const emailInput = document.getElementById("email");

  const errorNombre = document.getElementById("error-nombre");
  const errorPassword = document.getElementById("error-password");
  const errorEmail = document.getElementById("error-email");

  const submitBtn = document.getElementById("submit-btn");

  function validarNombre() {
    if (nombreInput.value.trim() === "") {
      errorNombre.classList.add("visible");
      return false;
    } else {
      errorNombre.classList.remove("visible");
      return true;
    }
  }

  function validarPassword() {
    if (passwordInput.value.length < 8 || passwordInput.value.length > 16) {
      errorPassword.classList.add("visible");
      return false;
    } else {
      errorPassword.classList.remove("visible");
      return true;
    }
  }

  function validarEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(emailInput.value)) {
      errorEmail.classList.add("visible");
      return false;
    } else {
      errorEmail.classList.remove("visible");
      return true;
    }
  }

  function validarFormulario() {
    const esNombreValido = validarNombre();
    const esPasswordValido = validarPassword();
    const esEmailValido = validarEmail();

    submitBtn.disabled = !(esNombreValido && esPasswordValido && esEmailValido);
  }

  nombreInput.addEventListener("input", validarFormulario);
  passwordInput.addEventListener("input", validarFormulario);
  emailInput.addEventListener("input", validarFormulario);

  formulario.addEventListener("submit", function (event) {
    if (!validarFormulario()) {
      event.preventDefault(); // Evita el envío si hay errores
    }
  });
});
