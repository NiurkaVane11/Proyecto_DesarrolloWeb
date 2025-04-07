//Hacer estilo carrusel a seccion Tutoriales
//Poner ^ para que el usuario pueda volver arriba
// RuralPos.js - Script principal para el sitio RuralPOS
document.addEventListener('DOMContentLoaded', function() {
    // 1. Navegación suave para los enlaces del menú
    document.querySelectorAll('#barra_superior_nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Funcionalidad para los testimonios (círculos interactivos)
    const circles = document.querySelectorAll('.circle');
    const cards = document.querySelectorAll('.card');
    
    circles.forEach(circle => {
        circle.addEventListener('click', function() {
            const cardId = this.getAttribute('data-card');
            
            // Ocultar todas las tarjetas
            cards.forEach(card => {
                card.style.display = 'none';
            });
            
            // Mostrar la tarjeta seleccionada
            const selectedCard = document.getElementById(cardId);
            if (selectedCard) {
                selectedCard.style.display = 'block';
            }
            
            // Actualizar círculos activos
            circles.forEach(c => {
                c.style.backgroundColor = '#ccc';
            });
            this.style.backgroundColor = '#4CAF50';
        });
    });

    // Mostrar la primera tarjeta por defecto
    if (cards.length > 0) {
        cards[0].style.display = 'block';
        circles[0].style.backgroundColor = '#4CAF50';
    }

    // 3. Validación básica del formulario de contacto
    const contactForm = document.querySelector('#contacto form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const nombre = document.getElementById('ingreso_nombre').value.trim();
            const email = document.getElementById('ingreso_correo').value.trim();
            const mensaje = document.getElementById('ingreso_mensaje').value.trim();
            
            if (!nombre || !email || !mensaje) {
                e.preventDefault();
                alert('Por favor complete todos los campos obligatorios.');
                return false;
            }
            
            if (!/^\S+@\S+\.\S+$/.test(email)) {
                e.preventDefault();
                alert('Por favor ingrese un email válido.');
                return false;
            }
        });
    }

    // 4. Mostrar la fecha actual en el elemento demojava
    const demojavaElement = document.getElementById('demojava');
    if (demojavaElement) {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        demojavaElement.textContent = today.toLocaleDateString('es-ES', options);
        demojavaElement.style.padding = '10px';
        demojavaElement.style.color = '#4CAF50';
        demojavaElement.style.fontWeight = 'bold';
    }

    // 5. Efecto de hover para las tarjetas de funcionalidades
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
        
        feature.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // 6. Cambiar el color del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('#barra-superior');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(0,0,0,0.9)';
        } else {
            header.style.backgroundColor = ''; // Vuelve al color original
        }
    });





    // 7. Botón para ir al principio de la página (versión mejorada)
    const btnIrArriba = document.getElementById('btn-ir-arriba');
    
    if (btnIrArriba) {
        // Mostrar u ocultar el botón con animación
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                btnIrArriba.classList.add('visible');
            } else {
                btnIrArriba.classList.remove('visible');
            }
        });
        
        // Función para ir al principio con retroalimentación visual
        btnIrArriba.addEventListener('click', function() {
            // Efecto de click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
            
            // Scroll suave
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }















})
