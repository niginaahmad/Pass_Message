const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const display = document.querySelector('#display');
const error = document.querySelector('#errorMsg');


submit.addEventListener('click', function (e) {
  e.preventDefault();


  if (input.value === "") {
    error.style.display = "block";


    setTimeout(function () {

      error.style.display = "none";
    }, 2000);
    display.innerHTML = ""
  } else {
    display.innerHTML = input.value.toUpperCase();
    input.value = '';
  }
})