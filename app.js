var humburger= document.querySelector('.humburger');
var menu = document.querySelector('.menu-content');
humburger.addEventListener('click',function(){
    humburger.classList.toggle('active');
    menu.classList.toggle('active');
})