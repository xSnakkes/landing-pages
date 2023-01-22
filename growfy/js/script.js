'use strict'

document.addEventListener('click', documentClick);

function documentClick(event) {
    const targetItem = event.target;
    if(targetItem.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu__open');
    }
}