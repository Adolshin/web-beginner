let accoteam = document.querySelector('.team-acco'),
listteam = accoteam.children

accoteam.addEventListener('click', function (event) {
let target = event.target
if (!target.classList.contains('team-acco__trigger')) {
    return
}

event.preventDefault()
target = target.parentNode
if (target.classList.contains('team-acco__item_active')) {
    target.classList.remove('team-acco__item_active')
    return
} else {
    for (var i = 0; i < listteam.length; i++) {
        listteam[i].classList.remove('team-acco__item_active')
        target.classList.add('team-acco__item_active')
    }
}
});
