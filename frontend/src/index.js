import React from 'react';
import ReactDOM from 'react-dom'
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
// import axios from 'axios'

import { fetchHand, removeCardHand, receiveCardToHand} from './actions/hand_actions';
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
import {fetchPlayedCards} from './actions/played_cards_actions'
import { setFavoriteGIF } from './util/user_util'
import { setFavGIF } from './actions/user_actions'
import { deleteFavGIF } from './actions/user_actions'

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
  window.fetchPlayedCards = fetchPlayedCards
  window.removeCardHand = removeCardHand
  window.receiveCardToHand = receiveCardToHand


  window.setFavoriteGIF = setFavoriteGIF
  window.gifPayload = { 
    _id: '61b0f4408b2dfb580c1c9c31',
    gifId: '10UeedrT5MIfPG'
  }
  window.setFavGIF = setFavGIF
  window.deleteFavGIF = deleteFavGIF

  window.fetchPlayedCategory = fetchPlayedCategory
  window.fetchGifCategories = fetchGifCategories
  window.playCategory = playCategory
  window.fetchHand = fetchHand

  const cats = [
    'wow',
    'wtf',
    'yikes'
  ]
  window.cats = cats
  window.getGameDeck = getGameDeck(cats)
  
  // If a returning user has a session token stored in localStorage
  if (localStorage.jwtToken) {

    // Set the token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken);

    // Decode the token to obtain the user's information
    const decodedUser = jwt_decode(localStorage.jwtToken);

    // Create a preconfigured state we can immediately add to our store
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    // If the user's token has expired
    if (decodedUser.exp < currentTime) {
      // Logout the user and redirect to the login page
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    // If this is a first time user, start with an empty store
    store = configureStore({});
  }
  // Render our root component and pass in the store as a prop
  const root = document.getElementById('root');
  window.store = store

  ReactDOM.render(<Root store={store} />, root);
});