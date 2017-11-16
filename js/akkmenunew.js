let acc = document.querySelector('.menu__list'),
    list = acc.children

acc.addEventListener('click', event => {
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
        [...list].forEach(menu__item => {
            menu__item.classList.remove('menu__item_active')
            target.classList.add('menu__item_active')
        })
    }
})