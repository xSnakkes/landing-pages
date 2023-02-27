const swiper = new Swiper('.page', {
    wrapperClass: 'page__wrapper',
    slideClass: 'page__screen',


    direction: 'vertical',
    slidesPerView: 'auto',
    
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensivity: 1,
    },
    watchOverflow: true,
    speed: 1100,

    observer: true,
    observerParents: true,
    observerSlideChildren: true,
    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'page__bullet',
        bulletActiveClass: 'page__bullet_active',
    },

    


    grabCursor: true,
    effect: "creative",
    creativeEffect: {
    prev: {
        shadow: true,
        translate: [ 0,"0%", -1],
    },
    next: {

        translate: [ 0,"150%", 0],
    },
    },
});