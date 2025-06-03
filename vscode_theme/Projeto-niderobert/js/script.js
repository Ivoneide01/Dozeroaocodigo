// Efeitos e interatividade para o tema VS Code
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona efeito de hover nos itens do grid
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
    });
    
    // Efeito de pulsação no logo
    const logo = document.querySelector('.logo-icon');
    if (logo) {
        setInterval(() => {
            logo.classList.add('pulse');
            setTimeout(() => {
                logo.classList.remove('pulse');
            }, 1000);
        }, 3000);
    }
    
    // Efeito de digitação para títulos
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Descomente para ativar o efeito de digitação
        // typeWriter();
    }
    
    // Efeito de partículas no fundo (simulando ambiente de código)
    function createParticles() {
        const container = document.querySelector('.container');
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('code-particle');
            
            // Posição aleatória
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            // Tamanho aleatório
            const size = Math.random() * 3 + 1;
            
            // Velocidade aleatória
            const speed = Math.random() * 5 + 2;
            
            // Atraso aleatório
            const delay = Math.random() * 5;
            
            particle.style.cssText = `
                position: absolute;
                left: ${posX}%;
                top: ${posY}%;
                width: ${size}px;
                height: ${size}px;
                background-color: rgba(61, 90, 254, 0.7);
                border-radius: 50%;
                pointer-events: none;
                animation: float ${speed}s infinite ease-in-out ${delay}s;
            `;
            
            container.appendChild(particle);
        }
    }
    
    // Descomente para ativar o efeito de partículas
    // createParticles();
    
    // Adiciona classe para VS Code theme
    document.body.classList.add('vscode-theme');
    
    // Detecta scroll para efeitos na navegação
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Função para adaptar o tema ao VS Code
    function applyVSCodeTheme() {
        // Aqui você pode adicionar código para integrar com a API do VS Code
        // quando for implementar como uma extensão real
        console.log('VS Code theme applied');
    }
    
    // Chamada inicial
    applyVSCodeTheme();
});
