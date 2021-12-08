import React from "react"

class SearchResults extends React.Component {
  render(){
    const results = this.props.results.map((gif, i) => (
      <li className='gif-result' id={i} key={i} >
        <img src={gif.embedUrl} alt={gif.title} />
        {/* <p>{gif.title}</p> */}
      </li>
    ))

    return(
      <ul>
        {results}
      </ul>
    )
  }
}

export default SearchResults