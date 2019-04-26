import React from 'react';
import './SearchBar.css';
  
export default function SearchBar(props) {
  return (
    <div className='form-group'>
      <label htmlFor='search'>
        Search
      </label>
      <input type='text' id='search' name='search' value={props.query} />
    </div>
  )
}
  