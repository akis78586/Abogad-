document.addEventListener('DOMContentLoaded', function() {
    // Obtenemos referencias a los elementos del DOM
    const heartsContainer = document.getElementById('heartsContainer');
    const gavelsContainer = document.getElementById('gavelsContainer');
    const revealBtn = document.getElementById('revealBtn');
    const letterContainer = document.getElementById('letterContainer');
    
    // Función para crear corazones animados
    function createHearts(count) {
        const heartEmojis = ['❤️', '💖', '💕', '💗', '💓', '💞', '💝', '💘', '🌸', '✨'];
        
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 25 + 15) + 'px';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            heart.style.animationDelay = (Math.random() * 2) + 's';
            
            heartsContainer.appendChild(heart);
            
            // Eliminar el corazón después de que termine la animación
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }
    }
    
    // Función para crear martillos animados
    function createGavels(count) {
        for (let i = 0; i < count; i++) {
            const gavel = document.createElement('div');
            gavel.classList.add('gavel');
            gavel.innerHTML = '⚖️';
            gavel.style.left = Math.random() * 100 + 'vw';
            gavel.style.fontSize = (Math.random() * 20 + 10) + 'px';
            gavel.style.animationDuration = (Math.random() * 4 + 3) + 's';
            gavel.style.animationDelay = (Math.random() * 2) + 's';
            
            gavelsContainer.appendChild(gavel);
            
            // Eliminar el martillo después de que termine la animación
            setTimeout(() => {
                gavel.remove();
            }, 5000);
        }
    }
    
    // Mostrar algunos corazones y martillos al inicio
    createHearts(15);
    createGavels(5);
    
    // Evento para el botón de revelar
    revealBtn.addEventListener('click', function() {
        // Ocultar botón con animación
        this.classList.remove('animate__pulse');
        this.classList.add('animate__zoomOut');
        
        // Mostrar carta después de un breve retraso
        setTimeout(() => {
            this.style.display = 'none';
            letterContainer.style.display = 'block';
            
            // Crear muchos corazones y martillos para celebrar
            createHearts(30);
            createGavels(10);
            
            // Reproducir sonido de celebración
            const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3');
            audio.play();
        }, 500);
    });
});