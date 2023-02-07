var bulb = document.querySelector('.bulb');
var background = document.querySelector('.row');
bulb.addEventListener('click', function (event) {
  if (bulb.className === 'bulb') {
    bulb.className = 'bulb dark';
    background.className = 'row dark';
  } else if (bulb.className === 'bulb dark') {
    bulb.className = 'bulb';
    background.className = 'row';
  }
});
