import * as GiphyUtil from './giphy_util'
import { shuffleArray } from '../components/component_utils/methods'
import { RECEIVE_ALL_CATEGORIES } from '../actions/categories/deck_category_actions'
import { RECEIVE_ALL_CARDS } from '../actions/cards/game_deck_actions'

export const getGameContent = async manager => {
  const superCats = await GiphyUtil.getGifCategories()
  const cats = GiphyUtil.getGameCategories(superCats)
  const payload = {
    type: RECEIVE_ALL_CATEGORIES,
    categories: shuffleArray(cats)
  }
  manager.sendToGame(payload)
  const sample = randomSample(cats)
  const deck = await GiphyUtil.getGameDeck(sample)
  const gameDeck = deck.map(card => GiphyUtil.gifObject(card))
  const cardsPayload = {
    type: RECEIVE_ALL_CARDS,
    cards: gameDeck.sort(() => Math.random() - 0.5)
  }
  manager.sendToGame(cardsPayload)
}

export const randomSample = (cats, num=10) => (
  shuffleArray(cats).slice(0, num)
)