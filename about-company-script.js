const aboutCompanyData = document.querySelector('.about-company-data'),
      aboutCompanySlides = [...(aboutCompanyData.children)],
      aboutCompanySlideWidth = aboutCompanySlides[0].getBoundingClientRect().width,
      aboutCompanyPreviousSlideBtn = document.querySelector('.previous-slide-btn'),
      aboutCompanyNextSlideBtn = document.querySelector('.next-slide-btn')

aboutCompanySlides.forEach((slide, index) => {
	slide.style.left = aboutCompanySlideWidth * index + 'px'
})

function moveToSlide(currentSlide, targetSlide) {
	if (aboutCompanySlides.indexOf(targetSlide) === aboutCompanySlides.length - 1)
		aboutCompanyNextSlideBtn.classList.add('hidden-slide-btn')
	else if (aboutCompanySlides.indexOf(targetSlide) === 0)
		aboutCompanyPreviousSlideBtn.classList.add('hidden-slide-btn')
	else {
		aboutCompanyNextSlideBtn.classList.remove('hidden-slide-btn')
		aboutCompanyPreviousSlideBtn.classList.remove('hidden-slide-btn')
	}

	aboutCompanyData.style.transform = 'translateX(-' + targetSlide.style.left + ')'
	currentSlide.classList.remove('current-slide')
	targetSlide.classList.add('current-slide')
}

aboutCompanyNextSlideBtn.addEventListener('click', function () {
	const currentSlide = aboutCompanyData.querySelector('.current-slide'),
	      nextSlide = currentSlide.nextElementSibling
	moveToSlide(currentSlide, nextSlide)
})

aboutCompanyPreviousSlideBtn.addEventListener('click', function () {
	const currentSlide = aboutCompanyData.querySelector('.current-slide'),
	      previousSlide = currentSlide.previousElementSibling
	moveToSlide(currentSlide, previousSlide)
})