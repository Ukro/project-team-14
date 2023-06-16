
const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    spaceBetween: 18,

    mousewheel: {
        invert: true,
        sensitivity:1,
      },

    breakpoints: {
        
        320: {
          slidesPerView: 1,
          
        },
        
        767: {
          slidesPerView: 2.6,
          
        },
        
        1200: {
          slidesPerView: 4,
          
        }
      }
  });


  