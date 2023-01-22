'use strict'

new Swiper('.swiper',{
    autoplay:{
        delay:3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    loop:true,
    speed:900,
})

new Swiper('.image-slider',{
    slidesPerView:2,
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay:{
        delay:10000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
})


document.addEventListener('click', documentClick);

function documentClick(event) {
    const targetItem = event.target;
    if(targetItem.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu__open');
    }
}

