const close = document.getElementById("close");
const header =  document.querySelector("header");


close.addEventListener('click', function() {
   header.classList.remove('header-open')
})

