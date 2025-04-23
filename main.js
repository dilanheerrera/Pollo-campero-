function abrir_cerrar_menu() {
    let boton = document.getElementById('x');
    let menu = document.getElementById('menu');

    menu.classList.toggle('abrir_menu');
    boton.classList.toggle('colocar_x');
}
