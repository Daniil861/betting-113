

// Объявляем слушатель событий "клик"
document.addEventListener('click', (e) => {

	const wrapper = document.querySelector('.wrapper');

	const targetElement = e.target as HTMLElement;

	const money = Number(localStorage.getItem('money'));
	const bet = Number(localStorage.getItem('current-bet'));

	// privacy screen
	if (targetElement.closest('.preloader__button')) {
		location.href = 'main.html';
	}

	// main screen
	if (targetElement.closest('[data-button="privacy"]')) {
		location.href = 'index.html';
	}

	if (targetElement.closest('[data-button="about"]')) {
		wrapper?.classList.add('_about');
	}

	if (targetElement.closest('[data-button="comands"]')) {
		wrapper?.classList.add('_comands');
	}

	if (targetElement.closest('[data-button="history"]')) {
		wrapper?.classList.add('_history');
	}

	if (targetElement.closest('[data-button="home"]')) {
		wrapper?.setAttribute('class', 'wrapper');
	}

})
