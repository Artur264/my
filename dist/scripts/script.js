const ulElement = document.querySelector('ul')
const liArray = Array.from(ulElement.querySelectorAll('.navigation__item'))

ulElement.addEventListener('click', (e) => {
    if (e.target.tagName === 'UL') retutn
    liArray.forEach((el, idx) => {
        el.classList.remove('active')
    })

    e.target.closest('.navigation__item').classList.add('active')
})