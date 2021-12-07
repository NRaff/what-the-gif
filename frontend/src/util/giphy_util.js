import { GIPHY_KEY } from "../config";
import axios from "axios";

const giphy = {
  search: "https://api.giphy.com/v1/gifs/search",
  trending: "https://api.giphy.com/v1/gifs/trending",
  categories:"https://api.giphy.com/v1/gifs/categories"
}

// always set the api key as 
// the first param after the endpoint
let params = {
  api_key: `?api_key=${GIPHY_KEY}`,
  q: "&q=",
  limit: "&limit=",
  offset: "&offset=",
  rating: "&rating=pg-13",
  lang: "lang=en",
}

const greenCategories = [
  "actions",
  "memes",
  "reactions"
]

export const searchDeckCategories = async (categories) => {
  let deckGifs = [];
  await categories.forEach(cat => {
    searchGifs(cat,30).then(res => {
      // debugger
      deckGifs = deckGifs.concat(res.data.data)
    })
  })
  return deckGifs
}

export const searchGifs = (searchTerm, numCards=10) => {
  const requestItems = [
    giphy.search,
    params.api_key,
    params.rating,
    `${params.limit}${numCards}`,
    params.q,
    searchTerm,
  ]
  const requestUrl = requestItems.join('')
  return (
    axios.get(requestUrl)
  )
}

export const getGifCategories = () => (
  axios.get(giphy.categories + params.api_key)
)

// does not hit an api
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




