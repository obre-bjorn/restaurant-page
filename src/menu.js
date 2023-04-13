let items = [{
        name: 'Cake',
        src: './images/cake.jpg',
        price: 1400
    },
    {
        name: 'Pizza',
        src: './images/pizza.jpeg',
        price: 1500
    },
    {
        name: 'Bread',
        src: './images/bread.jpeg',
        price: 100
    }
]

function createMenu() {

    let menu = document.createElement('div')
    menu.id = "menu"

    let heading = document.createElement('h1')
    heading.textContent = 'Menu'
    menu.appendChild(heading)

    let itemsContainer = document.createElement('div')
    itemsContainer.classList.add('menu')

    // Add each item to itemsContainer 
    items.forEach((item) => {
        let itemCard = document.createElement('div')
        itemCard.classList.add('item-card')


        //Item Image 
        let itemImage = document.createElement('div');
        itemImage.classList.add('item-image')
        let itemPic = document.createElement('img')
        itemPic.src = item.src
        itemImage.appendChild(itemPic)

        //Item name
        let itemName = document.createElement('div')
        itemName.classList.add('item-desc')
        itemName.textContent = item.name

        //Item price
        let itemPrice = document.createElement('div')
        itemPrice.classList.add('item-price')
        itemPrice.textContent = `Ksh. ${item.price}`

        itemCard.appendChild(itemImage)
        itemCard.appendChild(itemName)
        itemCard.appendChild(itemPrice)


        itemsContainer.appendChild(itemCard)
    })

    menu.appendChild(itemsContainer)

    return menu

}

function loadMenu() {
    let main = document.querySelector('main')
    main.textContent = ""
    main.appendChild(createMenu())
}

export default loadMenu