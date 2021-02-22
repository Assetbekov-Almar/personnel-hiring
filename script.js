const closeModalBtns = [...document.querySelectorAll('.close-modal-btn')],
      openModalBtns = [...document.querySelectorAll('.open-modal-btn')],
      burgerMenuElements = [...document.querySelectorAll('.burger-menu-element')],
      burgerMenuBtn = document.querySelector('.header-burger-menu')

burgerMenuBtn.addEventListener('click', function() {
	burgerMenuElements.forEach(element => {
		element.classList.add('burger-menu-open')
	})
	this.style.display = "none"
})

closeModalBtns.forEach(closeModalBtn => {
	closeModalBtn.addEventListener('click', function () {
		let modal = this.closest('.section-content').querySelector('.modal'),
		    modalForm = modal.querySelector('.modal-form')
		modal.style.display = "none"
		modalForm.reset()
	})
})

openModalBtns.forEach(openModalBtn => {
	openModalBtn.addEventListener('click', function () {
		this.closest('.section-content').querySelector('.modal').style.display = "flex"
	})
})

window.addEventListener('click', (e) => {
	let modal = e.target
	if (modal.classList.contains('modal')) {
		modal.style.display = "none"
		modal.querySelector('.modal-form').reset()
	}
	else if (modal.classList.contains('header-burger-navbar-bg')) {
		burgerMenuElements.forEach(element => {
			element.classList.remove('burger-menu-open')
		})
		burgerMenuBtn.style.display = "block"
	}
})
