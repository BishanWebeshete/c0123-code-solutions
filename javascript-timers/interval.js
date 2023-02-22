var $displayText = document.querySelector('.countdown-display');

var countdown = function () {
  if ($displayText.textContent > 0) {
    $displayText.textContent--;
  } else {
    $displayText.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownSequence);
  }
};

var countdownSequence = setInterval(countdown, 1000);
