let pageSlider = new Swiper('.page',{
    wrapperClass: 'page__wrapper',
    slideClass: 'page__screen',
    direction: 'vertical',
    slidesPerView:'auto',
    parallax:true,
    observer: true,
    observerParents: true,
    observerSlideChildren: true,
    mousewheel:{
        sensitivity:5,
    },
    init:true,
    grabCursor:false,
    init:false,
    on:{
        init:function(){
            menuSlider()
            setScrollType()
        },
        slideChange:function(){
            menuSliderRemove()
            menuLinks[pageSlider.realIndex].classList.add('_active')
        }
    }
})



let wrapper = document.querySelector('.wrapper')

function setScrollType() {
    let wrapper = document.querySelector('.wrapper')
    if(wrapper.classList.contains('_free')){
        wrapper.classList.remove('_free')
        pageSlider.params.freeMode = false
    }
    for (let index = 0; index < pageSlider.slides.length; index++) {
        const pageSlide = pageSlider.slides[index];
        const pageSlideContent = pageSlide.querySelector('.screen__content')
        if(pageSlideContent){
            const pageSlideContentHeight = pageSlideContent.offsetHeight
            if(pageSlideContentHeight> window.innerHeight){
                wrapper.classList.add('_free')
                pageSlider.params.freeMode = true
                break
            }
        }
    }
}







function menuSlider(){
    const secondSlides = document.querySelector('.menu__link')
    let index = 0
    secondSlides.addEventListener('click',(e)=>{
        index += 1
        pageSlider.slideTo(index,800)
        e.preventDefault()
    })
    const menuLinks = document.querySelectorAll('.menu__up')
    if(menuLinks.length>0){
        menuLinks[pageSlider.realIndex].classList.add('_active')
        for(let index = 0; index < menuLinks.length; index++){
            menuSliderRemove()
            const menuLink = menuLinks[index]
            menuLink.addEventListener('click',(e)=>{
                pageSlider.slideTo(index,800)
                menuLink.classList.add('_active')
                e.preventDefault()
            })
        }
    }
}

function menuSliderRemove(params) {
    let menuLinkActive = document.querySelector('.menu__link._active')

    if(menuLinkActive){
        menuLinkActive.classList.remove('_active')
    }
}



var X = 0;
var Y = 0;

window.addEventListener("mousemove", function (event) {
    X = event.clientX;
    Y = event.clientY;
});

function move() {
    document.getElementById('circle').style.left = X + 'px';
    document.getElementById('circle').style.top = Y + 'px';
    setTimeout(move, 10);
}

move();

// SCROLL PAGE

const animItems = document.querySelectorAll('._anim-items');

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

// BUTTON UP


// RANGE INPUT

const output = document.getElementById('value')
const scrollInput = document.getElementById('scroll-input')

const slider = document.getElementById('myRange').oninput = function(){
    const value = (this.value/125 - 1)
    scrollInput.style.width = `${value}px`

    output.innerHTML = this.value
    if(this.value == 25000){
        output.innerHTML = 'MORE THEN $25000'
        output.classList.remove('value')
        output.classList.add('pos')
    } else {
        output.classList.add('value')
        output.classList.remove('pos')
    }
}


// SPOLLER

const spollerButton = document.querySelectorAll('.card-button');

spollerButton.forEach(el => {
    el.addEventListener('click', ()=>{
        const content = el.nextElementSibling.querySelector('.cart-text')
        content.classList.toggle('open__card')
        el.classList.toggle('open__card')
        
    })
})


// MENU BURGER

document.addEventListener('click', documentClick);

function documentClick(event) {
    const targetItem = event.target;
    if(targetItem.closest('.menu__burger')){
        document.documentElement.classList.toggle('menu__open');
    } 
}


// SWIPER

const swiperCard = new Swiper('.card-slider',{
    slidesPerView:4.5,
    spaceBeetween:300,
    freeMode: true,
    speed:7000,
    loop:true,
    autoplay: {
        delay:0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
});

const swiperProject = new Swiper('.image-slider',{
    spaceBetween:30,
    autoHeight:true,
    freeMode: true,
    loop:true,
    observer: true,
    simulateTouch:false,
    autoplay: {
        delay:2000,
    },
    speed:1200,
    breakpoints:{
        1082: {
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
            slidesPerView:2.5,
        },
        782: {
            slidesPerView:1.5,
        },
        0: {
            slidesPerView:1,
        },
    }
});


// HEADER BAR ONSCROLL

const scrollItems = document.querySelectorAll('.scroll');

document.body.scrollTop = document.documentElement.scrollTop = 0;

if(scrollItems.length > 0){
    window.addEventListener('scroll', headerOnScroll);
    function headerOnScroll(params){
        for(let i = 0; i < scrollItems.length; i++){
            const scrollItem = scrollItems[i];
            const scrollHeight = scrollItem.offsetHeight;
            const scrollOffset = offset(scrollItem).top;
            const scrollStart = 4;

            let scrollItemPoint = window.innerHeight - scrollHeight / scrollStart;
            if(scrollHeight > window.innerHeight){
                scrollItemPoint = window.innerHeight - scrollHeight / scrollStart;
            }

            if((pageYOffset >= scrollOffset - scrollItemPoint) && pageYOffset <= (scrollOffset+scrollHeight)){
                document.documentElement.classList.remove('active')
            } else {
                document.documentElement.classList.add('active')
            }
        }
    }
}

function offset(el){
    const rect=el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

pageSlider.init()