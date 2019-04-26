import React from 'react';
import './FilterOptions.css';
  
export default function FilterOptions(props) {
  const handleChange = function(value) {
    props.selectFilter(value)
  }

  const buildFilterOptions = function() {
    return props.filterOptions.map(option => {
      return (
        <label key={option}>
          <input type='radio' name='filter-option' onChange={(e) => handleChange(e.target.value)}value={option} checked={props.filter === option}/>
          {option}
        </label>
      )
    })
  }

  return (
    <div className='form-group'>
      <label htmlFor='filter-options'>
        Filter By
      </label>
      <fieldset id='filter-options'>
        {buildFilterOptions()}
      </fieldset>
    </div>
  )
}
  