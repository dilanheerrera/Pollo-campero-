let boton = document.getElementById('x');
let menu = document.getElementById('menu');

boton.addEventListener('click', function () {
    menu.classList.toggle('abrir_menu');
    boton.classList.toggle('colocar_x');
});
