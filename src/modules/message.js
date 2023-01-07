export function message() {
	const closeButton = document.querySelector('#close-modal');
	const modalContainer = document.querySelector('#modal-component-container');
	const modal = document.querySelector('#modal-container');

	openModal();

	closeButton.addEventListener('click', () => {
		closeModal();
	});

	function openModal() {
		showAndHidde(modalContainer, ['block', 'animate-bg-fadeIn'], ['hidden', 'animate-bg-fadeOut']);
		showAndHidde(modal, ['animate-modal-scaleIn'], ['animate-modal-scaleOut']);
	}

	function closeModal() {
		showAndHidde(modalContainer, ['animate-bg-fadeOut'], ['animate-bg-fadeIn']);
		showAndHidde(modal, ['animate-modal-scaleOut'], ['animate-modal-scaleIn']);

		setTimeout(() => {
			showAndHidde(modalContainer, ['hidden'], ['block']);
		}, 500);
	}

	function showAndHidde(element, classessToAdd, classessToRemove) {
		element.classList.remove(...classessToRemove);
		element.classList.add(...classessToAdd);
	}
}
