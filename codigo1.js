const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces')
const articulo = document.querySelector('.articulo');
ham.addEventListener("click", ()=>{
    enlaces.classList.toggle('activado');
    articulo.classList.toggle('actper');
    
})