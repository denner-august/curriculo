const close = document.getElementById("close");
const header =  document.querySelector("header");
const button_open = document.getElementById("button-open");
const button_open_nav = document.getElementById("button-open-nav");
const nav = document.querySelector("nav")
const nav_close = document.getElementById("close-mobile");

close.addEventListener('click', ()=> {
   header.classList.remove('header-open')
})

button_open.addEventListener('click', ()=>{
   header.classList.add('header-open')
})

button_open_nav.addEventListener('click', ()=>{
   nav.classList.add('nav-open')
})

nav_close.addEventListener('click', function() {  
   nav.classList.remove('nav-open')
})