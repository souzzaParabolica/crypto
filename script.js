// const prompt = require("prompt-sync")();

// let idade = Number(prompt("Qual a sua idade? "));

// if (idade < 13) {
//     console.log("O valor do ingresso é R$ 10,00.")
// } else if (idade < 18) {
//     console.log("O valor do ingresso é R$ 15,00.")
// } else if (idade < 65) {
//     console.log("O valor do ingresso é R$ 20,00.")
// } else {
//     console.log("O valor do ingresso é R$ 12,00.")
// }
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");
const underline = document.getElementById("tab-underline");

function animateCards(container) {
  const cards = container.querySelectorAll(".farm-card");
  gsap.fromTo(
    cards,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power2.out" }
  );
}

// Inicializar underline na primeira aba e ativar os cards
const firstTab = tabs[0];
gsap.set(underline, { width: firstTab.offsetWidth, x: firstTab.offsetLeft });
tabs[0].classList.add("text-white");
animateCards(document.getElementById("tab-syrup"));

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const activeContent = document.getElementById(`tab-${tab.dataset.tab}`);
    const currentContent = Array.from(contents).find(
      (c) => !c.classList.contains("hidden")
    );

    if (activeContent === currentContent) return; // se já ativo, não faz nada

    // Fade out da aba atual
    gsap.to(currentContent, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        currentContent.classList.add("hidden");

        // Fade in da nova aba
        activeContent.classList.remove("hidden");
        gsap.fromTo(
          activeContent,
          { opacity: 0 },
          { opacity: 1, duration: 0.3 }
        );

        // animar cards
        animateCards(activeContent);
      },
    });

    // resetar estado dos tabs
    tabs.forEach((t) => t.classList.remove("text-white"));
    tabs.forEach((t) => t.classList.add("text-white/50"));
    tab.classList.add("text-white");

    // mover underline suavemente
    gsap.to(underline, {
      width: tab.offsetWidth,
      x: tab.offsetLeft,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});


  const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => {
            indicator.classList.remove('opacity-100');
            indicator.classList.add('opacity-50');
        });
        
        slides[index].classList.add('active');
        indicators[index].classList.remove('opacity-50');
        indicators[index].classList.add('opacity-100');
        
        currentSlide = index;
    }
    
    prevBtn.addEventListener('click', function() {
        let newIndex = currentSlide - 1;
        if (newIndex < 0) newIndex = slides.length - 1;
        showSlide(newIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        let newIndex = currentSlide + 1;
        if (newIndex >= slides.length) newIndex = 0;
        showSlide(newIndex);
    });
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    indicators[0].classList.remove('opacity-50');
    indicators[0].classList.add('opacity-100');
    
    setInterval(function() {
        let newIndex = currentSlide + 1;
        if (newIndex >= slides.length) newIndex = 0;
        showSlide(newIndex);
    }, 5000);

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
let menuOpen = false;

// Função para abrir o menu
function openMenu() {
  mobileMenu.classList.remove("hidden");
  gsap.fromTo(
    mobileMenu,
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
  );
  menuToggle.innerHTML = '<span data-lucide="x" class="w-6 h-6"></span>';
  lucide.createIcons();
  menuOpen = true;
}

// Função para fechar o menu
function closeMenu() {
  gsap.to(mobileMenu, {
    y: -50,
    opacity: 0,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => mobileMenu.classList.add("hidden"),
  });
  menuToggle.innerHTML = '<span data-lucide="menu" class="w-6 h-6"></span>';
  lucide.createIcons();
  menuOpen = false;
}

// Toggle do menu
menuToggle.addEventListener("click", () => {
  if (!menuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Fechar ao clicar no overlay (fora do conteúdo do menu)
mobileMenu.addEventListener("click", (e) => {
  // Se clicar direto no mobileMenu (não em algum li ou botão)
  if (e.target === mobileMenu) {
    closeMenu();
  }
});


// Botão Voltar ao Topo
const backToTop = document.getElementById('backToTop');

// Mostrar/ocultar botão baseado no scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.remove('opacity-0', 'invisible');
        backToTop.classList.add('opacity-100', 'visible');
    } else {
        backToTop.classList.remove('opacity-100', 'visible');
        backToTop.classList.add('opacity-0', 'invisible');
    }
});

// Função para voltar ao topo suavemente
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Atualizar ícones após o scroll (caso necessário)
backToTop.addEventListener('click', () => {
    setTimeout(() => {
        lucide.createIcons();
    }, 500);
});

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});