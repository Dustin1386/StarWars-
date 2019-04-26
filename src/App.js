import React from 'react';
import './App.css';
import SearchAndFilteringOptions from './SearchAndFilterOptions/SearchAndFilterOptions';
import DisplayResults from './DisplayResults/DisplayResults';
import SwapiService from './SwapiService/SwapiService';

export default class App extends React.Component {
  state = {
    results: [],
    filterOptions: [],
    api: new SwapiService(),
    error: null,
    filter: 'people',
    searchCount: 0,
    loading: true
  }

  async componentDidMount() {
    const {api} = this.state
    try {
      const response = await api.getFilterOptions()
      const filterOptions = Object.keys(response)
      this.setState({filterOptions, loading: false})
    } catch(err) {
      this.setState({error: err.message, loading: false})
    }
  }

  updateResults = (filter, results) => {
    const searchCount = this.state.searchCount + 1
    this.setState({filter, results, searchCount, loading: false})
  }

  setLoading = () => {
    this.setState({loading: true})
  }

  setError = (msg) => {
    this.setState({error: msg})
  }

  render() {
    const {loading} = this.state;
    return (
      <div className="App">
        <header>
          <h1>Welcome to the Star Wars Universe</h1>
          <div className={this.state.error ? 'error' : 'error hidden'}>{this.state.error}</div>
        </header>
        <main role='main'>
          <div className='loading' style={loading ? {display: 'normal'}: {display: 'none'}}>
            <img src='https://i.imgur.com/qvbAYu8.jpg' alt='loading' />
          </div>
          < SearchAndFilteringOptions
            filterOptions={this.state.filterOptions}
            api={this.state.api}
            updateResults={this.updateResults}
            setLoading={this.setLoading}
            setError={this.setError}
          />
          < DisplayResults results={this.state.results} filter={this.state.filter} searchCount={this.state.searchCount} />
        </main>
      </div>
    )
  } 
}
