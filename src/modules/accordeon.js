const accordeon = () => {
    const chItems = document.querySelectorAll('.characteristics__item')

    chItems.forEach(item => {
        const chButton = item.querySelector('.characteristics__title')
        const chDesc = item.querySelector('.characteristics__description')

        chButton.addEventListener('click', () => {
            if (chDesc.classList.contains('open')) {
                chDesc.style.height = ''
            } else {
                chDesc.style.height = chDesc.scrollHeight + 'px'
            }
            chButton.classList.toggle('active')
            chDesc.classList.toggle('open')
        })
    })
}

export default accordeon