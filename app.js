const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.main-nav li a');

  burger.addEventListener('click', () => {
    // Clasa pentru meniu
    nav.classList.toggle('nav-active');
    // Animatie pentru navigatie
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `mainNavFade 0.3s ease forwards ${index / 7 +
          0.8}s`;
      }
    });
    // animatie pentru burger
    burger.classList.toggle('toggle');
  });
};

navSlide();
