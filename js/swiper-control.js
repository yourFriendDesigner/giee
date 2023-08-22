var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 5,
	slidesPerView: 9,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});

new Swiper('.swiper', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	zoom: {
		maxRatio: 3,
		minRatio: 1,
	},


	slideToClickedSlide: true,
	slidesPerView: 1,
	preloadImages: false,

	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},

	watchSlidesProgress: true,
	watchSliedesVisibility: true,

	thumbs: {
		swiper: galleryThumbs
	}

});

