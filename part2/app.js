$(function () {
     // The base URL for the Deck of Cards API
     let baseURL = 'https://deckofcardsapi.com/api/deck';

     // Function to draw one card and display its value and suit
     async function part1() {
          let data = await $.getJSON(`${baseURL}/new/draw/`);
          let { suit, value } = data.cards[0];
          console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
     }

     // Function to draw two cards, using the deck ID from the first draw, and display their values and suits
     async function part2() {
          let firstCardData = await $.getJSON(`${baseURL}/new/draw/`);
          let deckId = firstCardData.deck_id;
          let secondCardData = await $.getJSON(`${baseURL}/${deckId}/draw/`);
          [firstCardData, secondCardData].forEach(card => {
               let { suit, value } = card.cards[0];
               console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
          });
     }

     // Function to set up the button click event to draw cards, display them with random positioning and rotation
     async function setup() {
          // Selecting button and card area elements
          let $btn = $('button');
          let $cardArea = $('#card-area');

          // Shuffle a new deck and display cards on button click
          let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
          $btn.show().on('click', async function () {
               // Draw a card from the shuffled deck
               let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
               let cardSrc = cardData.cards[0].image;

               // Generate random positioning and rotation for the card
               let angle = Math.random() * 90 - 45;
               let randomX = Math.random() * 40 - 20;
               let randomY = Math.random() * 40 - 20;

               // Append the card image to the card area with random positioning and rotation
               $cardArea.append(
                    $('<img>', {
                         src: cardSrc,
                         css: {
                              transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                         }
                    })
               );

               // Remove the button if no cards are remaining in the deck
               if (cardData.remaining === 0) $btn.remove();
          });
     }

     // Call the setup function to initialize the card drawing setup
     setup();
});
