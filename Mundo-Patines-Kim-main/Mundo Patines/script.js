let contadorCarrito = localStorage.getItem('carritoCount') 
  ? parseInt(localStorage.getItem('carritoCount')) 
  : 0;

const contadorSpan = document.getElementById('contador-carrito');

if (contadorSpan) {
  contadorSpan.textContent = contadorCarrito;
}

const botonesAgregar = document.querySelectorAll('.btn-agregar');

botonesAgregar.forEach((boton) => {
  boton.addEventListener('click', () => {
    contadorCarrito++;
    localStorage.setItem('carritoCount', contadorCarrito);
    
    if (contadorSpan) {
      contadorSpan.textContent = contadorCarrito;
    }

    const textoOriginal = boton.textContent;
    boton.textContent = '¡Agregado! ✓';
    boton.style.backgroundColor = '#2e7d32';

    setTimeout(() => {
      boton.textContent = textoOriginal;
      boton.style.backgroundColor = '';
    }, 1200);
  });
});

const btnEnviar = document.getElementById('btnEnviar');

if (btnEnviar) {
  btnEnviar.addEventListener('click', () => {
    const inputNombre = document.getElementById('nombre');
    const inputEmail = document.getElementById('email');
    const inputConsulta = document.getElementById('consulta');
    const mensajeForm = document.getElementById('mensajeForm');

    const nombre = inputNombre.value.trim();
    const email = inputEmail.value.trim();
    const consulta = inputConsulta.value.trim();

    if (nombre === '' || email === '' || consulta === '') {
      mensajeForm.style.color = '#c62828';
      mensajeForm.textContent = '⚠️ Por favor, completa los campos obligatorios: Nombre, Email y Consulta.';
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      mensajeForm.style.color = '#c62828';
      mensajeForm.textContent = '⚠️ Ingresa un correo electrónico válido.';
      return;
    }

    mensajeForm.style.color = '#2e7d32';
    mensajeForm.textContent = `¡Gracias ${nombre}! Tu consulta ha sido enviada con éxito.`;

    inputNombre.value = '';
    document.getElementById('telefono').value = '';
    inputEmail.value = '';
    inputConsulta.value = '';
  });
}

const btnLogin = document.getElementById('btn-login');
if (btnLogin) {
  btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Función de inicio de sesión próximamente.');
  });
}

const cantItemsCarrito = document.getElementById('cant-items-carrito');
if (cantItemsCarrito) {
  cantItemsCarrito.textContent = contadorCarrito;
}

const btnVaciar = document.getElementById('btnVaciarCarrito');
if (btnVaciar) {
  btnVaciar.addEventListener('click', () => {
    contadorCarrito = 0;
    localStorage.setItem('carritoCount', 0);
    if (contadorSpan) contadorSpan.textContent = 0;
    if (cantItemsCarrito) cantItemsCarrito.textContent = 0;
    alert('El carrito ha sido vaciado.');
  });
}