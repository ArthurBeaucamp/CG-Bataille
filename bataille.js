/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
var gameLoop = true;
var handle = 0;
var valueCard = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
var hand1 = [];
var hand2 = [];

/**
 * Test card value
 *
 * @param string card1
 * @param string card2
 *
 * @return string
 */
const testCard = (card1, card2) => {
  let valueCard1 = card1.substring(0, card1.length -1);
  let valueCard2 = card2.substring(0, card2.length -1);

  let i = 0;
  let force1 = 0;
  let force2 = 0;

  valueCard.forEach((value) => {
    if (valueCard1 === value) {
      force1 = i;
    }

    if (valueCard2 === value) {
      force2 = i;
    }
    ++i;
  });

  if (force1 > force2) {
    return '1';
  } else if (force1 < force2) {
    return '2';
  } else {
    return 'PAT';
  }
};

const n = parseInt(readline()); // the number of cards for player 1
for (let i = 0; i < n; i++) {
    const cardp1 = readline(); // the n cards of player 1
    hand1.push(cardp1);
}
const m = parseInt(readline()); // the number of cards for player 2
for (let i = 0; i < m; i++) {
    const cardp2 = readline(); // the m cards of player 2
    hand2.push(cardp2);
}

// Game Loop
while (gameLoop) {

  // Battle
  switch (testCard(hand1[0], hand2[0])) {
    case '1':
      hand1.push(hand1[0]);
      hand1.push(hand2[0]);

      hand1.splice(0, 1);
      hand2.splice(0, 1);
      break;
    case '2':
      hand2.push(hand1[0]);
      hand2.push(hand2[0]);

      hand1.splice(0, 1);
      hand2.splice(0, 1);
      break;
    default:
  }

  handle++;

  // Winning Condition
  if (hand1.length === 0) {
    print('2 ' + handle);
    gameLoop = false;
  }

  if (hand2.length === 0) {
    print('1 ' + handle);
    gameLoop = false;
  }
}
