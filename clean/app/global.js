document.addEventListener('click', documentClick);

function documentClick(event) {
    const targetItem = event.target;
    if(targetItem.closest('.header__burger')){
        document.querySelector('.wrapper').classList.toggle('menu__open');
    }
}

