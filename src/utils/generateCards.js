import { suits, cardNames } from '../app/constants';
import uniqueId from 'uniqid';
import shuffleArray from './shuffleArray';
import randomNumber from './randomNumber';

function generateCards(count) {
  let cardArray = [];
  for (let i = 0; i < count; i++) {
    let card = {
      num: randomNumber(13, 2),
      suit: suits[randomNumber(4)],
      isOpen: false,
      isMatched: false,
    };

    let cardExists = cardArray.find(({ num, suit }) => num === card.num && suit === card.suit);

    cardExists ? (count += 1) : (cardArray = [...cardArray, card]);
  }

  let pairedArray = [...cardArray, ...cardArray].map(card => ({
    ...card,
    id: uniqueId(),
    cardName: cardNames[card.num],
  }));

  return shuffleArray(pairedArray);
}

export default generateCards;
