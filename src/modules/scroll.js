const scroll = () => {
    const body = document.querySelector('body')

    const goToScroll = (link) => {
        const id = link.getAttribute('href').substring(1)
        const section = document.getElementById(id)
        if (section) {
            seamless.elementScrollIntoView(section, {
                behavior: 'smooth',
                block: 'start'
            })
        } else {
            seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
    }
    
    body.addEventListener('click', (e) => {
        e.preventDefault()
        let link = e.target
        if (e.target.closest('.header-menu__item') || e.target.closest('.card-details__link-characteristics')) { 
            goToScroll(link)
        }
    })

}

export default scroll