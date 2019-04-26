import React from 'react';
import './App.css';
import SearchAndFilteringOptions from './SearchAndFilterOptions/SearchAndFilterOptions';
import DisplayResults from './DisplayResults/DisplayResults';

export default class App extends React.Component {
  state = {
    results: [{id: '123', name: 'Skywalker'}]
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to the Star Wars Universe</h1>
        </header>
        <main>
          < SearchAndFilteringOptions />
          < DisplayResults results={this.state.results} />
        </main>
      </div>
    )
  } 
}
