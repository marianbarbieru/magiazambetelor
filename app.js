// const navSlide = () => {
//   const burger = document.querySelector('.burger');
//   const nav = document.querySelector('.main-nav');
//   const navLinks = document.querySelectorAll('.main-nav li a');

//   burger.addEventListener('click', () => {
//     // Clasa pentru meniu
//     nav.classList.toggle('nav-active');
//     // Animatie pentru navigatie
//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = '';
//       } else {
//         link.style.animation = `mainNavFade 0.3s ease forwards ${index / 7 +
//           0.8}s`;
//       }
//     });
//     // animatie pentru burger
//     burger.classList.toggle('toggle');
//   });
// };

// navSlide();

const burger = document.querySelector('.burger');
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav li a');
const alba = document.querySelector('#alba');

const tl = new TimelineLite({ paused: true, reversed: true });

tl.to(navLinks, 0.2, {
  opacity: 1,

  pointerEvents: 'initial'
})
  .to(alba, 0.2, {
    opacity: 1
  })
  .to(nav, 0.2, {
    opacity: 1
  });
burger.addEventListener('click', function(e) {
  burger.classList.toggle('toggle');
  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  toggleTween(tl);
});
function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
