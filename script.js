document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.querySelector('.carousel-track');
    const depoimentoCards = document.querySelectorAll('.depoimento-card');
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    let currentIndex = 0;
    const cardCount = depoimentoCards.length;
    const intervalTime = 5000; // 5 segundos

    // Função para criar os indicadores dinamicamente
    function createIndicators() {
        for (let i = 0; i < cardCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('indicator-dot');
            dot.setAttribute('data-index', i);
            indicatorsContainer.appendChild(dot);
            
            // Adiciona evento de clique para navegação manual
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
            });
        }
    }

    // Função para atualizar a posição do carrossel e os indicadores
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselTrack.style.transform = `translateX(${offset}%)`;

        // Atualiza a classe 'active' nas bolinhas
        const dots = document.querySelectorAll('.indicator-dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Função para passar para o próximo depoimento automaticamente
    function showNextCard() {
        currentIndex = (currentIndex + 1) % cardCount;
        updateCarousel();
    }
    
    // Inicia o carrossel
    createIndicators(); // Cria as bolinhas primeiro
    updateCarousel();   // Define o estado inicial
    setInterval(showNextCard, intervalTime);
});