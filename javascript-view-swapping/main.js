var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (let i = 0; i < $tabList.length; i++) {
    if (event.target === $tabList[i]) {
      event.target.className = 'tab active';
    } else {
      $tabList[i].className = 'tab';
    }
  }
  var $dataView = event.target.getAttribute('data-view');
  for (let k = 0; k < $viewList.length; k++) {
    if ($viewList[k].getAttribute('data-view') === $dataView) {
      $viewList[k].className = 'view';
    } else {
      $viewList[k].className = 'view hidden';
    }
  }
});
