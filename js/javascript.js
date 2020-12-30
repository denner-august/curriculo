const close = document.getElementById("close");
const header =  document.querySelector("header");
const button_open = document.getElementById("button-open")
console.log(button_open)


close.addEventListener('click', function() {
   header.classList.remove('header-open')
})

button_open.addEventListener('click', ()=>{
   header.classList.add('header-open')
})