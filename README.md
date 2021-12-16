# What the Gif
## About
_What the Gif?!_ is a game inspired by _Apples to Apples_ and Cards Against Humanity. The game uses the Giphy API to supply a random set of gifs and categories (think _Apples to Apples_ greencards), and Socket.io to enable a realtime game between many players.
![Screen Shot 2021-12-15 at 2 10 37 PM](https://user-images.githubusercontent.com/13125699/146441299-e3f3dad4-3e23-4068-b53f-ee247ca35691.png)
## Team
| Team Member | LinkedIn | Github                |
|-------------|----------|-----------------------|
| Nick Raff          | [LinkedIn](https://www.linkedin.com/in/nickraff/)  | [Github](https://github.com/NRaff) |
| Adrian Rothschild      | [LinkedIn](https://www.linkedin.com/in/adrian-rothschild/)  | [Github](https://github.com/darothmedia)     |
| Alex Lolas     | [LinkedIn](https://www.linkedin.com/in/alex-lolas-88b19b228/)  | [Github](https://github.com/alexlolas)     |
| Matt Pettenato     | [LinkedIn](https://www.linkedin.com/in/matthew-pettenato-936236123/)  | [Github](https://github.com/mattpettenato)     |

__Explore the game for yourself, and invite friends to join, [here](https://what-the-gif.herokuapp.com/#/)!__
## Gameplay
To begin, each player is dealt a hand of gifs and an initial judge is selected for the first round. In a round, a random Category is presented and players then submit their closest matching gif for the judge to review. The game ends when a single player has been chosen as the winner a predetermined number of times.
![Screen Shot 2021-12-15 at 6 31 45 PM](https://user-images.githubusercontent.com/13125699/146319412-a4affac6-c2ba-4a5b-90cf-590ffd9aa867.png)
![Screen Shot 2021-12-15 at 6 33 58 PM](https://user-images.githubusercontent.com/13125699/146319633-60558dda-0620-4c3b-a00b-3141308f2a30.png)

## Technology Used
### MongoDB
- Allow users to create an account and store their favorite gif
- Provide a history of games played by a user
### Giphy
- Search for a specifc gif
- Get Giphy categories for use in the game
- Get the game deck based on a random assortment of the above categories
### Socket.io
- Establish a realtime connection for users and the game they are in
### React Tooltips
- Easily add, update, remove tooltips from various buttons in throughout the game
## Feature Highlights
### Realtime Game Management
We used Socket.io to ensure all clients stayed in sync through the game. We developed a utility to manage the socket on the client side that dispatched actions based on the payload type.
__Server Side__
```javascript
const updateGame = (payload, io) => {
  const { gameCode } = payload
  // Broadcasts the payload to the game's channel (subscribed to by all players)
  io.emit(`joined-game:${gameCode}`, payload)
}

module.exports = (io, socket) => {
  // * Join Game
  const socketJoinGame = payload => {
    joinGame(payload, io, socket)
  }

  const socketUpdateGame = payload => {
    updateGame(payload, io)
  }
  ...
  // Sets the listeners for user events
  socket.on("game:join", socketJoinGame)
  socket.on("game:create", socketCreateGame)
  socket.on("game:get", socketGetGame)
  socket.on("game:update", socketUpdateGame)
}
```
__Client Side__
```javascript
// The manager wraps socket functions for plain english invocation on the client side.
export const manager = gameCode =>  ({
  sendToGame: payload => {
    const newPayload = Object.assign({}, payload,{gameCode})
    // Delegates the payload to the servers updateGame function to broadcast to all players
    socket.emit(`game:update`, newPayload)
  },
  createGame: payload => {
    // Delegates the payload to the servers createGame function to broadcast back to the creator
    socket.emit(`game:create`, payload)
  },
  joinGame: payload => {
    // Delegates the payload to the servers joinGame function to broadcast to all players
    socket.emit(`game:join`, payload)
  }
})

// Sets up a socket for whatever game the player has joined/created. 
export const setupGameSocket = (gameCode, dispatch) => {
    if (gameCode) {
      socket.on(`joined-game:${gameCode}`, payload => {
        // Hands off the payload to Game Dispatch for further action (see below)
        GameDispatch(payload, dispatch)
      })
      socket.once(`created-game:${gameCode}`, payload => {
        dispatch(payload)
      })
    }
  return manager(gameCode)
}
```
### Joining a Game
Game dispatch served as a 'Grand Central Dispatch' for all payloads served back to players in realtime. In this instance, when a player joins a game, the server provides all relevant game information (users and game details) back to each player, and we leverage Redux's _dispatch_ the update each client's state.
![Screen Shot 2021-12-15 at 6 31 45 PM](https://user-images.githubusercontent.com/13125699/146319412-a4affac6-c2ba-4a5b-90cf-590ffd9aa867.png)
```javascript
// ~ join_form.jsx
handleSubmit(e){
    e.preventDefault()
    const {gameCode} = this.state
    const {dispatch} = this.props
    this.manager = this.manager ? this.manager : setupGameSocket(gameCode, dispatch)
    // sends a request to join a game given a specific code 
    // -> this hits MongoDB, and returns the updated game and updated players, to all players
    this.manager.joinGame(this.state)
  }
// ~ game_dispatch.js
const GameDispatch = (action, dispatch) => {
  switch(action.type) {
    ...
    case JOINED_GAME:
      dispatch(receiveUsers(action.users))
      dispatch(receiveGame(action.game))
      dispatch(setCurrentGame(action.game))
      break;
    ...
    default:
      dispatch(action)
      break;
  }
```
### Dealing Cards
Dealing cards is especially challenging because each players hand must come from the same 'deck'. Rather than dealing a players hand when the Board mounts for that player (which may result in players with the same cards), a single player must act as the 'dealer'.

To make sure we deal from the same deck, when the board mounts, we check if the user is the game owner, and if so, we trigger the ```setupBoard``` function which deals the cards in realtime.
```javascript
componentDidMount(){
    const {currentUser, game} = this.props
    const gameManager = manager(game.gameCode)
    if (currentUser.id === game.gameOwner) {
      if(!this.hasContent()) {
        getGameContent(gameManager)
          .then(() => {
            this.setupBoard()
          })
      }
    }
  }

setupBoard(){
  // Check that our Giphy API request has completed, and cards have been added to the state
  if (!this.hasContent()) {
    setTimeout(this.setupBoard.bind(this), 3000)
  } else {
    const { players, gameDeck, gameCode } = this.props
    this.manager = this.manager ? this.manager : manager(gameCode)
    // Iterate through each player, and dish out each card stack
    players.forEach((player, idx) => {
      const start = idx * 5
      const end = start + 5
      const cards = gameDeck.slice(start, end)
      // Send the players hand to Game Dispatch, so each players game deck remains in sync
      this.manager.sendToGame({
        type: "DEAL_HAND",
        payload: this.dealHandPayload(player, cards)
      })
    })
  }
}
```
### Timing the Round
Each round has a player defined time limit. To display a timer and keep players in sync when it ends, we used React Hooks.
```javascript
const Timer = React.memo(function Timer({
  remaining, 
  gameManager,
  gameOwner,
  currentUser,
}) {
  const [showSec, setShowSec] = useState(remaining);
  const timerEnds = () => {
    if (gameOwner === currentUser) {
      gameManager.sendToGame(toggleTimeUp())
    }
  }
  useEffect(() => setShowSec(remaining), [remaining]);
  useEffect(() => {
    const timer = showSec > 0 && setTimeout(() => setShowSec(showSec - 1), 1000);
    if (showSec === 0) {
      setTimeout(timerEnds, 1000)
    }
    return () => {
      clearInterval(timer)
    };
  }, [showSec, timerEnds]);
  return <span>{showSec}</span>;
});
```

## Development
### Installation
1. Clone the repository
2. From the project directory, run `npm run frontend-install`
3. Add a `keys_dev.js` file to the root `config` folder. This file should contain credentials to connect to MongoDB.
### Tools
Review all available scripts in the `package.json`.
- Run the server and watch for changes with `npm run server`
- Run the server and frontend with `npm run dev`
- Run the server, watch for changes, and utilize dev tools with `npm run server:debug`
