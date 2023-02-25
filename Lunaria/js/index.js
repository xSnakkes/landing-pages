
window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: -${this.scrollY}px`
    let scrollYmob = this.scrollY
    if(scrollY > 120){
        document.querySelector('.main').classList.add('opacity')
        
    } else {
        document.querySelector('.main').classList.remove('opacity')
    }
    if(scrollY > 300){
        document.documentElement.classList.add('active')
    }else {
        console.log('1')
        document.documentElement.classList.remove('active')
    } 
})


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

const btnUp = {
    addEventListener(){
        document.querySelector('.arrow-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

const btnTwo = {
    addEventListener(){
        document.querySelector('.circle-cursor').onclick = () => {
            console.log('1')
            window.scrollTo({
                top: 700,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}
btnUp.addEventListener()

btnTwo.addEventListener()

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
    breakpoints:{
        1082: {
            slidesPerView:4.5,
            speed:7000,
        },
        782: {
            speed:4000,
        },
        0: {
            slidesPerView:2,
            speed:2000,
        },
    }
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



function offset(el){
    const rect=el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}