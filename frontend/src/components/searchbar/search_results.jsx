import React from "react"
import '../../stylesheets/root.scss'

class SearchResults extends React.Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(e){
    const req = {
      _id: this.props.user.id,
      gifId: e.currentTarget.id
    }
    this.props.setFavGIF(req)

  }
  
  render(){
    const results = this.props.results.map((gif, i) => {
      return(
        <div className='gif-result' key={i} id={gif.images.fixed_height.url} onClick={this.handleClick} >
          <img src={gif.images.fixed_height.url} alt={gif.title} />
        </div>
      )
      
    })
    return(
      <>
        <h2>Set your favorite GIF by clicking below. <br/> This will show up with your display name during a game.</h2>
      <div className='gif-wrapper'>
        {results}
      </div>
      </>
    )
  }
}

export default SearchResults