import * as constants from '../app/constants';

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function generateCards(count) {
  let cardArray = [];
  for (let i = 0; i < count; i++) {
    let card = {
      num: Math.floor(Math.random() * 13) + 2,
      suit: constants.suits[Math.floor(Math.random() * 4)],
    };

    let cardExists = cardArray.find(
      cardInArray => cardInArray.num === card.num && cardInArray.suit === card.suit,
    );

    if (cardExists) {
      count += 1;
    } else {
      cardArray.push(card);
    }
  }

  return shuffle([...cardArray, ...cardArray]);
}

export default generateCards;
