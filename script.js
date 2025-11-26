// Validación y envío de formulario de búsqueda 
document.getElementById('searchForm').addEventListener('submit', function(e) { 
    e.preventDefault(); 
    const origen = document.getElementById('origen').value; 
    const destino = document.getElementById('destino').value; 
    const fecha = document.getElementById('fecha').value; 
    if (origen && destino && fecha) { 
        alert(`Buscando ruta de ${origen} a ${destino} el ${fecha}. ¡Redirigiendo a resultados!`); 
        // Aquí puedes agregar lógica para redirigir o mostrar resultados 
    } else { 
        alert('Por favor, completa todos los campos.'); 
    } 
}); 
 
// Slider simple para tarjetas de rutas (muestra/oculta tarjetas) 
let currentSlide = 0; 
const cards = document.querySelectorAll('.card'); 
const totalSlides = cards.length; 
const prevBtn = document.querySelector('.prev-btn'); 
const nextBtn = document.querySelector('.next-btn'); 
 
function showSlide(index) { 
    cards.forEach((card, i) => { 
        card.style.display = i === index ? 'block' : 'none'; 
    }); 
} 
 
nextBtn.addEventListener('click', () => { 
    currentSlide = (currentSlide + 1) % totalSlides; 
    showSlide(currentSlide); 
}); 
 
prevBtn.addEventListener('click', () => { 
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; 
    showSlide(currentSlide); 
}); 
 
// Validación de formulario de contacto 
document.getElementById('contactForm').addEventListener('submit', function(e) { 
    e.preventDefault(); 
    const nombre = document.getElementById('nombre').value; 
    const email = document.getElementById('email').value; 
    const mensaje = document.getElementById('mensaje').value; 
    if (nombre && email && mensaje) { 
        alert('¡Mensaje enviado! Te contactaremos pronto.'); 
        this.reset(); 
    } else { 
        alert('Por favor, completa todos los campos.'); 
    } 
}); 
 
// Newsletter (envío básico) 
document.querySelector('.newsletter-form').addEventListener('submit', function(e) { 
    e.preventDefault(); 
    const email = this.querySelector('input[type="email"]').value; 
    if (email) { 
        alert(`Suscrito con ${email}. ¡Gracias!`); 
        this.reset(); 
    } 
}); 
 
// Inicializar slider 
showSlide(currentSlide);