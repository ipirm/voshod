   var swiper = new Swiper('.swiper-inner', {
	   slidesPerView: 6,
	   centeredSlides: true,
      navigation: {
        nextEl: '.inner-slide-next',
        prevEl: '.inner-slide-prev',
      },
	    breakpoints: {
    600: {
      slidesPerView: 3,
    },
	800: {
		slidesPerView: 3,
	},
	 },
    });


   var swiper = new Swiper('.swiper-outer', {
	   slidesPerView: 6,
	   loop:true,
	   centeredSlides: true,
      navigation: {
        nextEl: '.outer-slide-next',
        prevEl: '.outer-slide-prev',
	  },
	 breakpoints: {
    600: {
      slidesPerView: 3,
    },
		 800: {
		slidesPerView: 3,
	},
	 },
    });



document.querySelector('.mobile-menu__btn').addEventListener('click', () => {
	console.log('fafaaf');
  document.body.classList.toggle('freeze');
	document.querySelector("html").classList.toggle('freeze');
	document.querySelector('.sidebar').classList.toggle('active-sidebar');
	document.querySelector('.header-right__col').classList.toggle('active-search');
	document.querySelector('.content-cinema').classList.toggle('active__content');
	document.querySelector('.mobile-header').classList.toggle('mobile-header-active');
});