function handleFocus(event) {
  console.log("'focus' event has fired");
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log("'blur' event has fired");
  console.log(event.target.name);
}

function handleInput(event) {
  console.log("'input' event has fired");
  console.log(event.target.input);
}

var $name = document.querySelector('#user-name');
var $email = document.querySelector('#user-email');
var $textarea = document.querySelector('textarea');

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$textarea.addEventListener('focus', handleFocus);
$textarea.addEventListener('blur', handleBlur);
$textarea.addEventListener('input', handleInput);
