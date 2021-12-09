import * as GiphyUtil from '../util/giphy_util'
import { shuffleArray } from '../components/component_utils/methods'
import { RECEIVE_ALL_CATEGORIES } from '../actions/deck_category_actions'
import { RECEIVE_ALL_CARDS } from '../actions/game_deck_actions'

export const setupGameDeck = async manager => {
  await GiphyUtil.getGifCategories()
    .then( categories => {
      const cats = GiphyUtil.getGameCategories(categories)
      const payload = {
        type: RECEIVE_ALL_CATEGORIES,
        categories: shuffleArray(cats)
      }
      manager.sendToGame(payload)
      // debugger
      GiphyUtil.getGameDeck(randomSample(cats))
      .then(cards => {
        // debugger
        const cardsPayload = {
          type: RECEIVE_ALL_CARDS,
          cards: cards
        }
        manager.sendToGame(cardsPayload)
      })
    })
}

const randomSample = (cats, num=10) => (
  shuffleArray(cats).slice(0, num)
)

  