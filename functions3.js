//3.js

var button = document.getElementById('action');
var input = document.getElementById('text_field');

button.addEventListener('click', function () {
  console.log('clicked');
});

button.addEventListener('click', function () {
  console.log('Other click');
  input.setAttribute('value', 'HelloWorld');
  });