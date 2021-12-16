# What the Gif
## About
_What the Gif?!_ is a game inspired by _Apples to Apples_ and Cards Against Humanity. The game uses the Giphy API to supply a random set of gifs and categories (think _Apples to Apples_ greencards), and Socket.io to enable a realtime game between many players.

__Explore the game for yourself, and invite friends to join, [here](https://what-the-gif.herokuapp.com/#/)!__
## Gameplay
To begin, each player is dealt a hand of gifs and an initial judge is selected for the first round. In a round, a random Category is presented and players then submit their closest matching gif for the judge to review. The game ends when a single player has been chosen as the winner a predetermined number of times.
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