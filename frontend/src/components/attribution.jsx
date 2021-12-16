import React from "react";
import giphyAttr from "../imgs/Poweredby_640px-White_VertLogo.png"

const GiphyAttr = props => {
  return (
    <img 
      src={giphyAttr} 
      alt="Powered by Giphy" 
      className="giphy-attr"
    />
  )
}

export default GiphyAttr
