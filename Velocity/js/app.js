const tabsBtns = document.querySelectorAll('.tab__button');

const tabsItems = document.querySelectorAll('.tabs__item');
console.log(tabsItems)

function hideTabs(){
    tabsItems.forEach(item => {
        item.classList.add('hide');
    });
    tabsBtns.forEach(btn => {
        btn.classList.remove('active');
    })
}

function showTabs(index){
    tabsItems[index].classList.remove('hide')
    tabsBtns[index].classList.add('active');
}

hideTabs()

showTabs(0)

tabsBtns.forEach((btn, index) =>{
    btn.addEventListener('click', () => {
        hideTabs()
        showTabs(index)})
})
