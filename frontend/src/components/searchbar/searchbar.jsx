import React from "react";
import SearchResults from './search_results'
import '../../stylesheets/root.scss'

class SearchBar extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      searchTerm: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.fetchGifs(this.state.searchTerm)
  }

  updateSearchTerm(e){
    this.setState({searchTerm: e.target.value})
  }

  render(){
    return(
      <div className='search-container'>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Search for GIFS!</label>
            <input
              type="text"
              onChange={e => this.updateSearchTerm(e)}
              autoComplete='off' />
          </div>
        </form>
        <div className='results'>
            {(this.props.results.length !== 0) ? <SearchResults results={this.props.results} /> : null}
        </div>
      </div>
    )
  }
}

export default SearchBar