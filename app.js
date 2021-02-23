document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'fries',
            img:'imsges/fries.jpg' 
        },
        {
            name: 'fries',
            img:'imsges/fries.jpg' 
        },
        {
            name: 'cheeseburger',
            img:'imsges/cheeseburger.jpg' 
        },
        {
            name: 'cheeseburger',
            img:'imsges/cheeseburger.jpg' 
        },
        {
            name: 'hotdog',
            img:'imsges/hotdog.jpg' 
        },
        {
            name: 'hotdog',
            img:'imsges/hotdog.jpg' 
        },
        {
            name: 'ice-cream',
            img:'imsges/ice-cream.jpg' 
        },
        {
            name: 'ice-cream',
            img:'imsges/ice-cream.jpg' 
        },
        {
            name: 'milkshake',
            img:'imsges/milkshake.jpg' 
        },
        {
            name: 'milkshake',
            img:'imsges/milkshake.jpg' 
        },
        {
            name: 'pizza',
            img:'imsges/pizza.jpg' 
        },
        {
            name: 'pizza',
            img:'imsges/pizza.jpg' 
        },
    ]

    const grid = document.querySelector('.grid')

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = documet.createElement('img')
            card.setAttribute('src', 'images/blank.jpg')
            card.setAttribute('data-id', i)
            // card.eventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    createBoard()






})