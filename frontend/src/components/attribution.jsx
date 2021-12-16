import React from "react";
import giphyAttr from "../imgs/Poweredby_100px-Black_VertLogo.png"

const GiphyAttr = props => {
  return (
    <div id='giphy'>
      <img
        src={giphyAttr}
        alt="Powered by Giphy"
        className="giphy-attr"
      />
    </div>
    
  )
}

export default GiphyAttr
