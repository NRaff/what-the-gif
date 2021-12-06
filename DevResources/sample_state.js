const sample_state = {
  session: {
    isAuthenticated: true,
    currentUser: 1,
    currentGame: 1
  },
  ui: {

  },
  errors: {

  },
  entities: {
    cards: {
      gameDeck: {
        1: {
          id: 1,
          giphyUrl: "someurl.com",
          shortName: "CoolGif"
        },
        2: {
          id: 2,
          giphyUrl: "someurl.com",
          shortName: "CoolGif"
        },
      },
      // a card moves from gameDeck to playedCards when it is used
      playedCards: {
        3: {
          id: 3,
          giphyUrl: "someurl.com",
          shortName: "CoolGif"
        }
      }
    },
    players: {
      1: {
        id: 1,
        name: "Nick",
        favGif: "gif url/giphy id",
        games: [1,2,3,4],
        hand: [1,2,3,4,5] //cards.gameDeck ids
      },
      2: {
        id: 2,
        name: "Matt",
        favGif: "gif url/giphy id",
        games: [1, 2, 3, 4]
      }
    },
    games: {
      1: {
        id: 1,
        winner: null, //user id when gameover
        players: {
          1: {
            roundsWon: [] //array of rounds won ids
          },
          2: {
            roundsWon: [] //array of rounds won ids
          },
          3: {
            roundsWon: [] //array of rounds won ids
          }
        },
        currentRound: 1
      },
    },
    rounds: {
      1: {
        id: 1,
        winner: null, //user id set when judge selects winner
        winningGif: 1, //playedCards id
        judge: null, //user id set when round starts
        category: "some category/adjective/verb",
        submittedGifs: [1,2,3] //references playedCards
      }
    }
  }
}