const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces');

ham.addEventListener("click", ()=>{
    enlaces.classList.toggle('activado');

})