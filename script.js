document.addEventListener('DOMContentLoaded', function() {
    const heartsContainer = document.getElementById('heartsContainer');
    const gavelsContainer = document.getElementById('gavelsContainer');
    const revealBtn = document.getElementById('revealBtn');
    const letterContainer = document.getElementById('letterContainer');
    const celebrationMusic = document.getElementById('celebrationMusic');
    
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
            
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }
    }
    
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
            
            setTimeout(() => {
                gavel.remove();
            }, 5000);
        }
    }
    
    createHearts(15);
    createGavels(5);
    
    revealBtn.addEventListener('click', function() {
        this.classList.remove('animate__pulse');
        this.classList.add('animate__zoomOut');
        
        celebrationMusic.play();
        
        setTimeout(() => {
            this.style.display = 'none';
            letterContainer.style.display = 'block';
            
            createHearts(30);
            createGavels(10);
            
            const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3');
            audio.play();
        }, 500);
    });
});
