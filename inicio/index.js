
  document.addEventListener("DOMContentLoaded", () => {
  const thumb = document.getElementById("thumb");
  const playBtn = document.getElementById("play-btn");
  const wrapper = document.querySelector(".video-wrapper");

  if (playBtn && thumb && wrapper) {
    playBtn.addEventListener("click", () => {
      wrapper.innerHTML = `
        <iframe 
          src="https://www.youtube.com/embed/bu4iYKqy6mo?autoplay=1" 
          title="Servicios Kolbing"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>`;
    });
  }
});

  
  window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    
    if (window.scrollY > 10) {
      // Cuando el usuario baja
      header.classList.remove("transparent");
    } else {
      // Cuando está arriba del todo
      header.classList.add("transparent");
    }
  });

  // Estado inicial al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    if (window.scrollY <= 10) {
      header.classList.add("transparent");
    }
  });



document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuNav = document.getElementById("menu-nav");

  menuToggle.addEventListener("click", () => {
    menuNav.querySelector("ul").classList.toggle("active");
  });
});

// Reveal on scroll for footer elements
document.addEventListener("DOMContentLoaded", () => {
  const toReveal = document.querySelectorAll('.footer-column, .footer-social');
  if (!('IntersectionObserver' in window)) {
    toReveal.forEach(el => el.classList.add('is-visible'));
    return;
  }

  toReveal.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  toReveal.forEach(el => io.observe(el));
});

// Abrir enlaces en pestaña nueva (sin tocar el HTML)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const lower = href.toLowerCase();
    // Ignora anclas internas y esquemas especiales
    if (lower.startsWith('#') || lower.startsWith('mailto:') || lower.startsWith('tel:') || lower.startsWith('javascript:')) {
      return;
    }
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });
});

// Animación de entrada del header manteniéndolo transparente en top
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  if (!header) return;
  header.classList.add("header-animate");
  if (window.scrollY <= 10) {
    header.classList.add("transparent");
  }
});
