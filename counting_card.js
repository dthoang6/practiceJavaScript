/*In the casino game Blackjack, a player can gain an advantage over the house by keeping track
of the relative number of high and low cards remaining in the deck.

    - when the count is positive, player should bet high.
    - when the count is zero, or negative, player should bet low.
*/
var count = 0;
function countingCard(card) {
    switch (card) {
        case 2: case 3: case 4: case 5: case 6:
            count++;
        //case 7, 8, 9 do nothing.
        case 10: case 'J': case 'Q': case 'K': case 'A':
            count--;
    }

    if (count > 0) {
        return count + " Bet";
    }
    return count + " Hold";
}