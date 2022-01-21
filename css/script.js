const navbut = document.getElementById('navbut');
const mainmenu = document.getElementById('mainmenu');

navbut.addEventListener('click',() =>{
    mainmenu.classList.toggle('show');
});