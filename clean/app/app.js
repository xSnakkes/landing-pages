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


new Swiper(document.querySelector('.swiper'), {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    speed: 1400,
    loop: true,
});


// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
// ScrollSmoother.create({
// 	wrapper: '.wrapper-smooth',
// 	content: '.content-smooth'
// })
