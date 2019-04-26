import React, {Component} from 'react';
import './SearchAndFilterOptions.css';
import SearchBar from '../SearchBar/SearchBar';
import FilterOptions from '../FilterOptions/FilterOptions';
  
export default class SearchAndFilterOptions extends Component {
  state = {
    query: '',
    filter: 'people',
    error: null
  }

  updateQuery = (query) => {
    this.setState({query})
  }

  selectFilter = (filter) => {
    this.setState({filter})
  }

  handleSubmit = async (e) => {
    this.props.setLoading();
    const {api} = this.props;
    const {query, filter} = this.state;

    e.preventDefault();
    try {
      const res = await api.search(query, filter)
      this.props.updateResults(this.state.filter, res.results)
    } catch(err) {
      this.props.setError(err.message)
    }
  }

  render() {
    return (
      <form className='js-search-form' action="#" onSubmit={(e) => this.handleSubmit(e)}>
        < SearchBar query={this.state.query} updateQuery={this.updateQuery}/>
        < FilterOptions filter={this.state.filter} selectFilter={this.selectFilter} filterOptions={this.props.filterOptions}/>
        < div className='form-controls'>
          <button className='button' type='submit'>Search</button>
        </div>
      </form>
    )
  }
}
  