import React, {Component} from 'react';
import './SearchAndFilterOptions.css';
import SearchBar from '../SearchBar/SearchBar';
import FilterOptions from '../FilterOptions/FilterOptions';
  
export default class SearchAndFilterOptions extends Component {
  state = {
    query: '',
    filter: '',
    error: null
  }

  updateQuery = (query) => {
    this.setState({query})
  }

  selectFilter = (filter) => {
    this.setState({filter})
  }

  render() {
    return (
      <form className='js-search-form' action="#">
        < SearchBar query={this.state.query} updateQuery={this.updateQuery}/>
        < FilterOptions filter={this.state.filter} selectFilter={this.selectFilter}/>
        < div className='form-controls'>
          <button type='submit'>Search</button>
        </div>
      </form>
    )
  }
}
  