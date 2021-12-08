import React from "react"
import '../../stylesheets/root.scss'
import { FaStar } from 'react-icons/fa'

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
    const user = this.props.user
    const results = this.props.results.map((gif, i) => {
      return(
        <div className='gif-result' key={i} id={gif.images.fixed_height.url} onClick={this.handleClick} >
          <img src={gif.images.fixed_height.url} alt={gif.title} />
            <FaStar 
              key={i} 
              // color={user.fav}
            />
            
        </div>
      )
      
    })

    // 

    return(
      <div className='gif-wrapper'>
        {results}
      </div>
    )
  }
}

export default SearchResults