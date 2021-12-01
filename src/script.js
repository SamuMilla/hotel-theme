const menuBtn = document.querySelector('#menu-button');
const mobileMenu = document.querySelector('#mobile--menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu--link');
// scroll to sections 
let buttons = document.querySelectorAll('a');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.currentTarget.getAttribute('href');
      
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  //show mobile menu
 function menuToggle(){
     if(mobileMenu.classList.contains('menu-hidden')){
          mobileMenu.classList.remove('menu-hidden');
         mobileMenu.classList.add('menu-visible');
     }else{
         mobileMenu.classList.remove('menu-visible');
          mobileMenu.classList.add('menu-hidden');
     }
    
 }
 //hide mobile menu when click button
 console.log(mobileMenuLinks);
 
mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('menu-visible');
    mobileMenu.classList.add('menu-hidden');
  });
});

//  swiper
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button--prev",
    },
    spaceBetween: 15,
    breakpoints:{
      1024:{
        slidesPerView: 2,
      } 
    }
  });

// scroll reveal
const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true,
});
sr.reveal('.home--header, .section--title', {delay: 500});
sr.reveal('.home--details, .rooms--container', {delay: 600});

sr.reveal('.gallery--image', {origin: 'bottom', interval: 100});