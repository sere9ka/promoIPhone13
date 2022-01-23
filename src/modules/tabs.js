const tabs = () => {
    const tabs = document.querySelectorAll('.card-detail__change')
    const tabTitle = document.querySelector('.card-details__title')
    const tabImg = document.querySelector('.card__image_item')
    const price = document.querySelector('.card-details__price')
    const title = document.querySelector('title')


    const tabsOptions = [
        {
            name: "Graphite",
            memory: "128",
            price: "60000",
            img: "img/iPhone-graphite.webp"
        },
        {
            name: "Silver",
            memory: "256",
            price: "65000",
            img: "img/iPhone-silver.webp"
        },
        {
            name: "Sierra Blue",
            memory: "512",
            price: "70000",
            img: "img/iPhone-sierra_blue.webp"
        }
    ]

    const changeContent = (index) => {
        tabTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`
        price.textContent = `${tabsOptions[index].price}₽`
        title.textContent = `iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`
 
        tabImg.setAttribute('src', ` ${tabsOptions[index].img}`)
    }

    const chacngeActive = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active')

            if (index === indexClickedTab) {
                tab.classList.add('active')
            }
        })
        changeContent(indexClickedTab)
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            chacngeActive(index)
        })
    })

    changeContent(0)
}

export default tabs