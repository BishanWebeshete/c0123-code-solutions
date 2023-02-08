var span = document.querySelectorAll('span');
var i = 0;
span[i].className = 'current';
document.addEventListener('keydown', function (event) {
  var currentKey = event.key;
  if (currentKey === span[i].textContent) {
    span[i].className = 'correct';
    span[i + 1].className = 'current';
    return i++;
  } if (currentKey !== span[i].textContent) {
    span[i].className = 'incorrect';
  }
});
