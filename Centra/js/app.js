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

var animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(params){
        for(let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active');
            }
        }
    }
    animOnScroll()
}

function offset(el){
    const rect=el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

