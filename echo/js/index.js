document.addEventListener('click', documentClick);

function documentClick(event) {
    const targetItem = event.target;
    if(targetItem.closest('.header__burger')){
        document.documentElement.classList.toggle('menu__open');
    }
}


new Swiper('.swiper',{
    navigation:{
        nextEl: '.swiper-prev',
        prevEl: '.swiper-next',
    },
    loop: true,
    autoHight:true,
    slidesPerView:3,
    spaceBetween:50,
    // autoplay:{
    //     delay:2000,
    //     stopOnLastSlide:false,
    // },
    breakpoints: {
        740: {
            slidesPerView:3,
        },
        440: {
            slidesPerView:2,
        },
        0: {
            slidesPerView:1,
        }
    },
    speed:600,

})
