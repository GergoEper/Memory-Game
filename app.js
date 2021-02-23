document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ]

    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
          const card = document.createElement('img')
          card.setAttribute('src', 'images/blank.png')
          card.setAttribute('data-id', i)
          // card.addEventListener('click', flipCard)
          grid.appendChild(card)
        }
      }

      //check for matches


      // flip card
      function flipCard() {
          var cardId = this.getAttribute('data-id')
          cardsChosen.push(cardArray[cardId].name)
          cardsChosenId.push(cardId)
          this.setAttribute('src', cardArray[cardId].img)
          if (cardsChosen === 2) {
            setTimeout(checkForMatch, 500)
          }

      }


    createBoard()






})