'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', showModal);
}

const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});
