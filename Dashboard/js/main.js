// MENU BURGER

document.addEventListener('click', documentClick);

function documentClick(event) {
    const targetItem = event.target;
    if(targetItem.closest('.menu__burger')){
        document.documentElement.classList.toggle('menu__open');
    } 
}