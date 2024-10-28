//підключаємо слайдер
$('.slider-box').slick();


//налаштовуємо меню
let menu = document.querySelector('.nav');
let btn = document.querySelector('.mobile-menu');
btn.addEventListener('click' ,function() {
    menu.classList.toggle('active');
    console.log('click');
});
