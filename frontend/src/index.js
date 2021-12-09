import React from 'react';
import ReactDOM from 'react-dom'
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { io } from 'socket.io-client'
import * as SessionAPI from './util/session_api_util';
import { logout, login, signup } from './actions/session_actions';
import {
  joinGame,
  createGame
} from './actions/game_actions'
import { fetchCards } from './actions/game_deck_actions';

import { fetchCard } from './actions/played_cards_actions';
import { fetchPlayedCategory } from './actions/played_category_actions';
import { fetchGifCategories } from './actions/deck_category_actions';
import { getGameCategories, getGameDeck, getGifCategories, searchGifs } from './util/giphy_util';
import { playCategory } from './actions/deck_category_actions';
import { fetchGifs } from './actions/searched_gifs_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  window.login = login
  window.logout = logout
  window.signup = signup
  window.createGame = createGame
  window.joinGame = joinGame
  window.searchGifs = searchGifs
  window.getGifCategories = getGifCategories
  window.getGameCategories = getGameCategories
  window.fetchCards = fetchCards
  window.fetchGifs = fetchGifs
  window.fetchCard = fetchCard

  window.fetchPlayedCategory = fetchPlayedCategory
  window.fetchGifCategories = fetchGifCategories
  window.playCategory = playCategory

  const cats = [
    'wow',
    'wtf',
    'yikes'
  ]
  window.cats = cats
  window.getGameDeck = getGameDeck(cats)
  
  if (localStorage.jwtToken) {
    SessionAPI.setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }
  // var socket = io()
  // socket.on('test chat', msg => {
  //   console.log(msg)
  // })
  // socket.on('pretty', msg => {
  //   console.log(msg)
  // })
  // const user = {
  //   email: "free@email.com",
  //   password: "123456"
  // }

  // const testGame = {
  //   "gameOwner": "61aebee64cc56c6b513259b2",
  //   "title": "Tesdfsdst",
  //   "maxPlayers": 8,
  //   "gameCode": "new 9",
  //   "scoreToWin": 8,
  //   "roundTimeLimit": 60
  // }

  // const joinPayload = {
  //   gameCode: "new 9",
  //   playerId: "61b0185794380516aae68435"
  // }
  // const createGameSocket = () => {
  //   socket.emit('game:create', testGame)
  // }

  // const joinGameSocket = () => {
  //   socket.emit('game:join', joinPayload)
  // }
  // window.joinGameSocket = joinGameSocket
  // window.createGameSocket = createGameSocket
  // socket.emit('test chat', 'base socket working')
  // socket.on('joined-game', payload => {
  //   console.log(payload)
  // })
  // socket.on('create-game', payload => {
  //   console.log(payload)
  // })
  // socket.on('create-game-error', payload => {
  //   console.log(payload)
  // })
  // socket.on('join-game-error', payload => {
  //   console.log(payload)
  // })
  const root = document.getElementById('root');
  window.store = store

  ReactDOM.render(<Root store={store} />, root);
});