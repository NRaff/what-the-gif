if (process.env.NODE_ENV === 'production') {
  module.exports = process.env.GIPHY_KEY
  // export const GIPHY_KEY = process.env.GIPHY_KEY
} else {
  module.exports = "zIF7tMEsYnTPVSoFcnvKZptB95Yvl7fA"
}