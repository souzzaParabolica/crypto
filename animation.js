if (window.matchMedia("(min-width: 768px)").matches) {
  const tl = gsap.timeline();

  // Header entra
  tl.from(
    "header",
    {
      y: -80,
      duration: 0.6,
      ease: "power3.out",
    },
    0
  );

  // Os 3 blocos principais do nav (logo / menu / icons+button)
  tl.from(
    "header nav > div",
    {
      opacity: 0,
      y: -20,
      duration: 0.45,
      ease: "power2.out",
      stagger: 0.12,
    },
    -0.55
  );

  // Itens internos: links, spans e botão Connect
  // Use fromTo pra garantir que o 'to' seja opacity:1 e y:0 — sem ambiguidade
  tl.fromTo(
    "header nav ul li, header nav span, header nav .connectButton",
    { opacity: 0, y: -10 },
    {
      opacity: 1,
      y: 0,
      duration: 0.38,
      ease: "power2.out",
      stagger: 0.07,
      // Quando terminar, removemos os estilos inline (limpa interferências)
      onComplete: () => {
        gsap.set(
          "header nav ul li, header nav span, header nav .connectButton",
          { clearProps: "opacity,transform" }
        );
      },
    },
    ">0.25" // começa um pouco depois dos blocos principais
  );
}

// ANIMAÇÕES DOS CONTEÚDOS
// Animação para a primeira section
gsap.fromTo(
  ".primeiraSecao",
  // Estado inicial
  {
    opacity: 0,
  },
  // Estado final
  {
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".primeiraSecao",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  }
);

// Animação em sequência para os elementos internos
const primeiraTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".primeiraSecao",
    start: "top 70%",
    toggleActions: "play none none none",
  },
});

primeiraTl
  // Título principal com efeito especial
  .from(".primeiraSecao h2", {
    y: 80,
    opacity: 0,
    rotationX: 90,
    transformOrigin: "top center",
    duration: 1,
    ease: "power3.out",
  })
  // Texto descritivo
  .from(
    ".primeiraSecao p",
    {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    "-=0.5"
  )
  // Botão com efeito de pulso
  .from(
    ".primeiraSecao .degradeButton",
    {
      y: 30,
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: "back.out(1.7)",
    },
    "-=0.3"
  )
  // Overlay suave
  .from(
    ".primeiraSecao .overlay",
    {
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    },
    "-=0.8"
  );
  

gsap.fromTo(
  ".degSection h2, .degSection p, .tradeButtonPai",
  { opacity: 0, y: 30 }, // COMEÇA daqui
  {
    opacity: 1,
    y: 0, // TERMINA aqui
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".degSection",
      start: "top 30%",
      toggleActions: "play none none none",
      // markers: true,
    },
  }
);

// Seleciona todos os cards
const cards = document.querySelectorAll(".cards .card");

// Caso seja mobile: anima individualmente conforme entra na tela
if (window.matchMedia("(max-width: 768px)").matches) {
  cards.forEach((card) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 30, filter: "blur(2px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // começa quando o card está quase visível
          toggleActions: "play none none none",
          // markers: true,
        },
      }
    );
  });
} else {
  // Caso seja desktop: anima todos com stagger, como já fazia
  gsap.fromTo(
    ".cards .card",
    { opacity: 0, y: 30, filter: "blur(2px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".cards",
        start: "top 60%",
        toggleActions: "play none none none",
        // markers: true,
      },
    }
  );
}

gsap.fromTo(
  ".segundaSecao .tituloSegundaSecao, .segundaSecao .pSegundaSecao, .segundaSecao .exploreButtonPai",
  { opacity: 0, y: 30 }, // COMEÇA daqui
  {
    opacity: 1,
    y: 0, // TERMINA aqui
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".segundaSecao",
      start: "top 30%",
      toggleActions: "play none none none",
      // markers: true,
    },
  }
);

gsap.fromTo(
  ".terceiraSecao div",
  { opacity: 0, y: 30 }, // COMEÇA daqui
  {
    opacity: 1,
    y: 0, // TERMINA aqui
    duration: .5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".terceiraSecao",
      start: "top 60%",
      toggleActions: "play none none none",
    //   markers: true,
    },
  }
);