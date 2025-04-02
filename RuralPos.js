// RuralPos.js - Script para funcionalidades del sistema RuralPOS

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Efecto smooth scroll para los enlaces de navegación
    document.querySelectorAll('#barra_superior_nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Validación básica del formulario de contacto
    const contactoForm = document.querySelector('#contacto form');
    if(contactoForm) {
        contactoForm.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Validar campos requeridos
            const nombre = document.getElementById('ingreso_nombre');
            const email = document.getElementById('ingreso_correo');
            const mensaje = document.getElementById('ingreso_mensaje');
            
            if(nombre.value.trim() === '') {
                alert('Por favor ingresa tu nombre');
                isValid = false;
            }
            
            if(email.value.trim() === '' || !email.value.includes('@')) {
                alert('Por favor ingresa un email válido');
                isValid = false;
            }
            
            if(mensaje.value.trim() === '') {
                alert('Por favor ingresa un mensaje');
                isValid = false;
            }
            
            if(!isValid) {
                e.preventDefault();
            }
        });
    }

    // Animación para las funcionalidades (features)
    const features = document.querySelectorAll('#funcionalidades .feature');
    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = `all 0.5s ease ${index * 0.2}s`;
        
        // Usar Intersection Observer para animar cuando son visibles
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });
        
        observer.observe(feature);
    });

    // Cambiar estilo de la barra de navegación al hacer scroll
    window.addEventListener('scroll', function() {
        const barraSuperior = document.getElementById('barra-superior');
        if(window.scrollY > 100) {
            barraSuperior.style.backgroundColor = 'rgba(0,0,0,0.9)';
            barraSuperior.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            barraSuperior.style.backgroundColor = 'transparent';
            barraSuperior.style.boxShadow = 'none';
        }
    });

    // Mostrar año actual en el footer (por si cambia)
    const footer = document.querySelector('footer p');
    if(footer) {
        const currentYear = new Date().getFullYear();
        footer.textContent = `© RuralPOS - Todos los derechos reservados - ${currentYear}`;
    }

    // Botón para volver al inicio
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.display = 'none';
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if(window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


    
    const contenedorTestimonios = document.getElementById('testimonios');
    if(!contenedorTestimonios) return;
    
    contenedorTestimonios.innerHTML = '<h2>Testimonios</h2><div class="testimonios-container"></div>';
    
    const container = contenedorTestimonios.querySelector('.testimonios-container');
    
    testimonios.forEach(testimonio => {
        const testimonioElement = document.createElement('div');
        testimonioElement.className = 'testimonio';
        testimonioElement.innerHTML = `
            <p class="comentario">"${testimonio.comentario}"</p>
            <p class="autor">- ${testimonio.nombre}, ${testimonio.tienda}</p>
        `;
        container.appendChild(testimonioElement);
    });


// Llamar a la función cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarTestimonios);
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle');
    const cards = document.querySelectorAll('.card');

    circles.forEach(circle => {
        circle.addEventListener('click', function() {
            const cardId = this.getAttribute('data-card');
            const card = document.getElementById(cardId);

            circles.forEach(c => c.classList.remove('active'));
            this.classList.add('active');

            cards.forEach(c => c.style.transform = 'translateX(0)');
            card.style.transform = 'translateX(-100%)';
        });
    });
});
