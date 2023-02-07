var modal = document.querySelector('.modal');
var openModal = document.querySelector('.open-modal-button');
var noButton = document.querySelector('.no-button');
openModal.addEventListener('click', function (event) {
  modal.className = 'modal';
});
noButton.addEventListener('click', function (event) {
  modal.className = 'modal none';
});
