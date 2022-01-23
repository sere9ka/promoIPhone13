const accordeon = () => {
    const chItems = document.querySelectorAll('.characteristics__item')

    const chChange = (indexActive) => {
        chItems.forEach((item, index) => {
            if (index != indexActive) {
                const chButton = item.querySelector('.characteristics__title')
                const chDesc = item.querySelector('.characteristics__description')
                chDesc.style.height = ''
                chButton.classList.remove('active')
                chDesc.classList.remove('open')
            }
            
        })
    }

    chItems.forEach((item, index) => {
        const chButton = item.querySelector('.characteristics__title')
        const chDesc = item.querySelector('.characteristics__description')

        chButton.addEventListener('click', () => {
            chChange(index)
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