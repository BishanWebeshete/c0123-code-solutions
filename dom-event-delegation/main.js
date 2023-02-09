var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  if (event.target && event.target.nodeName === 'BUTTON') {
    var $closestTask = event.target.closest('.task-list-item');
    console.log('targets closest task-list-item', $closestTask);
    $closestTask.remove();
  }
  console.log('event target:', event.target);
  console.log('event target tagName:', event.target.tagName);
});
