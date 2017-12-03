let accomenu = document.querySelector('.menu__list'),
    listmenu = accomenu.children

accomenu.addEventListener('click', function (event) {
    let target = event.target
    if (!target.classList.contains('menu__title')) {
        return
    }

    event.preventDefault()
    target = target.parentNode
    if (target.classList.contains('menu__item_active')) {
        target.classList.remove('menu__item_active')
        return
    } else {
        for (var i = 0; i < listmenu.length; i++) {
            listmenu[i].classList.remove('menu__item_active')
            target.classList.add('menu__item_active')
        }
    }
});
