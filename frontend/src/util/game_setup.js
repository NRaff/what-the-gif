import * as GiphyUtil from '../util/giphy_util'
import { shuffleArray } from '../components/component_utils/methods'
import { RECEIVE_ALL_CATEGORIES } from '../actions/deck_category_actions'
import { RECEIVE_ALL_CARDS } from '../actions/game_deck_actions'

export const setupCategories = manager => {
  GiphyUtil.getGifCategories()
    .then( categories => {
      const cats = GiphyUtil.getGameCategories(categories)
      const payload = {
        type: RECEIVE_ALL_CATEGORIES,
        categories: shuffleArray(cats)
      }
      // console.log("GET CATEGORIES")
      manager.sendToGame(payload)
    })
}

export const setupCards = (manager, cats) => {
  // console.log("SETUP CARDS")
  const sample = randomSample(cats, 8)
  // debugger
  GiphyUtil.getGameDeck(sample)
    .then(cards => {
      const newCards = cards.map((card, idx) => {
        const newCard = GiphyUtil.gifObject(card)
        return newCard
      })
      const cardsPayload = {
        type: RECEIVE_ALL_CARDS,
        cards: newCards
      }
      // debugger
      manager.sendToGame(cardsPayload)
    })
}


// export const searchGifs = (manager, cats) => {
//   GiphyUtil.searchGifs("stoked",10)
//     .then(res => {
//       const cardsPayload = {
//         type: RECEIVE_ALL_CARDS,
//         cards: res.data.data
//       }
//       manager.sendToGame(cardsPayload)
//     })
// }

export const randomSample = (cats, num=10) => (
  shuffleArray(cats).slice(0, num)
)

  