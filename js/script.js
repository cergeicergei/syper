@@include('swiper-bundle.js');
const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	loop: true,
	slidesPerView: 1, // this
	slidesPerColumn: 1,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button.prev',
		prevEl: '.slider-button.next',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
const iconMenu = document.querySelector('.header__burger');
if (iconMenu){
	const menuBody = document.querySelector('.header__menu');
	iconMenu.addEventListener('click', function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}



