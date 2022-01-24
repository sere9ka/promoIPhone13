const sendForm = () => {
    const modal = document.querySelector('.modal')
    const btnOpen = document.querySelector('.card-details__button_delivery')
    const btnClose = document.querySelector('.modal__close')
    const title = document.querySelector('.card-details__title')
    const modalTitle = modal.querySelector('.modal__title')
    const form = modal.querySelector('form')

    const modalOpen = () => {
        modal.style.display = "flex"
        modalTitle.textContent = title.textContent
    }
    const modalClose = () => {
        modal.style.display = "none"
    }
    const clear = (modalLabels) => {
        modalLabels.forEach(label => {
            const span = label.querySelector('span')
            const input = label.querySelector('input')

            input.value = ''
            
            modalClose()
        })
    }

    btnClose.addEventListener('click', () => {
        modalClose()
    })
    btnOpen.addEventListener('click', () => {
        modalOpen()
    })


    form.addEventListener('submit', (event) => {
        event.preventDefault()

        const modalLabels = modal.querySelectorAll('.modal__label')

        const sendMessage = {}

        modalLabels.forEach(label => {
            const span = label.querySelector('span')
            const input = label.querySelector('input')

            sendMessage[span.textContent] = input.value
        })

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendMessage),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(() => clear(modalLabels))
    })
}

export default sendForm