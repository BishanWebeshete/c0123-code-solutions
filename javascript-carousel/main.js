var imageArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];

var $img = document.querySelector('img');
var $nextIcon = document.querySelector('.right-arrow');
var $previousIcon = document.querySelector('.left-arrow');
var $circlesArray = document.querySelectorAll('.circle');
var $circlesContainer = document.querySelector('.image-circles');

var currentIndex = 0;

var changeImage = function () {
  if (currentIndex === 4) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
};

var changeDot = function () {
  var currentImage = imageArray[currentIndex];
  var currentCircle = $circlesArray[currentIndex];

  for (let i = 0; i < $circlesArray.length; i++) {
    if ($circlesArray[i] !== currentCircle) {
      $circlesArray[i].classList.remove('fa-solid');
      $circlesArray[i].classList.add('fa-regular');
    } else {
      $img.setAttribute('src', currentImage);
      $circlesArray[i].classList.add('fa-solid');
      $circlesArray[i].classList.remove('fa-regular');
    }
  }
};
$nextIcon.addEventListener('click', changeImage);
$nextIcon.addEventListener('click', changeDot);
$previousIcon.addEventListener('click', function () {
  if (currentIndex === 0) {
    currentIndex = 4;
  } else {
    currentIndex--;
  }
  var currentImage = imageArray[currentIndex];
  var currentCircle = $circlesArray[currentIndex];
  for (let i = 0; i < $circlesArray.length; i++) {
    if ($circlesArray[i] !== currentCircle) {
      $circlesArray[i].classList.remove('fa-solid');
      $circlesArray[i].classList.add('fa-regular');
    } else {
      $img.setAttribute('src', currentImage);
      $circlesArray[i].classList.add('fa-solid');
      $circlesArray[i].classList.remove('fa-regular');
    }
  }
});

$circlesContainer.addEventListener('click', function (event) {
  for (let i = 0; i < imageArray.length; i++) {
    if (Number(event.target.id) === i) {
      $img.setAttribute('src', imageArray[i]);
      currentIndex = i;
    }
  }
  for (let i = 0; i < $circlesArray.length; i++) {
    if (Number(event.target.id) === i) {
      $circlesArray[i].classList.add('fa-solid');
      $circlesArray[i].classList.remove('fa-regular');
    } else {
      $circlesArray[i].classList.add('fa-regular');
      $circlesArray[i].classList.remove('fa-solid');
    }
  }
});

setInterval(changeImage, 3000);
setInterval(changeDot, 3000);
