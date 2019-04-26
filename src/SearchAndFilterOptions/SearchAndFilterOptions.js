import React, {Component} from 'react';
import './SearchAndFilterOptions.css';
import SearchBar from '../SearchBar/SearchBar';
import FilterOptions from '../FilterOptions/FilterOptions';
  
export default class SearchAndFilterOptions extends Component {
  state = {
    query: '',
    filter: ''
  }

  render() {
    return (
      <form className='js-search-form' action="#">
        < SearchBar query={this.state.query}/>
        < FilterOptions filter={this.state.filter} />
        < div className='form-controls'>
          <button type='submit'>Search</button>
        </div>
      </form>
    )
  }
}
  