// const rutaNavBar = './Componentes/NavBar.html';  
// const rutaFooter = './Componentes/Footer.html';

const rutaNavBar = '/Home/Componentes/NavBar.html';  
const rutaFooter = '/Home/Componentes/Footer.html';

document.addEventListener('DOMContentLoaded', () => {
    cargarComponente('navbar-reutilizable', rutaNavBar); // Cargar navbar
    cargarComponente('footer-reutilizable', rutaFooter); // Cargar footer
});

function cargarComponente(elementId, ruta) {
    const elemento = document.getElementById(elementId);
    if (elemento) {
        fetch(ruta)
            .then(response => response.text())
            .then(template => {
                elemento.innerHTML = template;
                console.log(`Componente ${elementId} cargado`);
            })
            .catch(error => console.error(`Error al cargar el componente ${elementId}:`, error));
    }
}