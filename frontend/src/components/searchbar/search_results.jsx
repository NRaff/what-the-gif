import React from "react"
import '../../stylesheets/root.scss'

class SearchResults extends React.Component {
  render(){
    const results = this.props.results.map((gif, i) => (
      <div className='gif-result' id={i} key={i} >
        <img src={gif.images.fixed_height.url} alt={gif.title} />
        {/* <p>{gif.title}</p> */}
      </div>
    ))

    return(
      <div className='gif-wrapper'>
        {results}
      </div>
    )
  }
}

export default SearchResults