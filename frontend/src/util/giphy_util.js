import { GIPHY_KEY } from "../config";
import axios from "axios";

const giphy = {
  search: "https://api.giphy.com/v1/gifs/search",
  trending: "https://api.giphy.com/v1/gifs/trending",
  categories:"https://api.giphy.com/v1/gifs/categories",
  gifById: "https://api.giphy.com/v1/gifs/"
}

export const gifObject = gif => ({
  title: gif.title,
  embedUrl: gif.url,
  gifId: gif.id,
  images: {fixed_height: gif.images.fixed_height}
})
// always set the api key as 
// the first param after the endpoint
let params = {
  api_key: `?api_key=${GIPHY_KEY}`,
  q: "&q=",
  limit: "&limit=",
  offset: "&offset=",
  rating: "&rating=pg-13",
  lang: "&lang=en",
  gifId: "&gif_id="
}

// Gets a bunch of gifs in an array
export const getGameDeck = async (categories) => {
  // debugger
  let deckGifs = [];
  for (const cat of categories){
    let response = await searchGifs(cat, 30)
    deckGifs = deckGifs.concat(response.data.data)
  }
  return deckGifs
}

export const setGameDeck = cats => {
  let deckGifs;
  cats.forEach(async cat => {
    let response = await searchGifs(cat, 30)
    deckGifs = deckGifs.concat(response.data.data)
  })
  return deckGifs
}

// Should return a gif object from giphy
export const getGifById = gifId => (
  axios.get(giphy.search + params.api_key + params.gifId + gifId)
)

// Returns 10 (or specified number) of gifs
export const searchGifs = (searchTerm, numCards=10) => {
  const requestItems = [
    giphy.search,
    params.api_key,
    params.rating,
    `${params.limit}${numCards}`,
    params.q,
    searchTerm.name_encoded,
  ]
  const requestUrl = requestItems.join('')
  return (
    axios.get(requestUrl)
  )
}

export const searchFavGifs = (searchTerm, numCards = 10) => {
  const requestItems = [
    giphy.search,
    params.api_key,
    params.rating,
    `${params.limit}${numCards}`,
    params.q,
    searchTerm
  ]
  const requestUrl = requestItems.join('')
  return (
    axios.get(requestUrl)
  )
}

// gets gif parent categories
export const getGifCategories = () => (
  axios.get(giphy.categories + params.api_key)
)

const greenCategories = [
  "actions",
  "memes",
  "reactions"
]

//Segments out sub categories and returns array
//getGifCategories().then(res => giphy_util.getGameCategories(res))
export const getGameCategories = payload => {
  // debugger
  const categories = payload.data.data.filter(sub => (
    greenCategories.includes(sub.name)
  ))
  let gameCategories = []
  categories.forEach(cat => (
    gameCategories = gameCategories.concat(cat.subcategories)
  ))
  return gameCategories
}




