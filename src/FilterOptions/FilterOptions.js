import React from 'react';
import './FilterOptions.css';
  
export default function FilterOptions(props) {
  const handleChange = function(value) {
    props.selectFilter(value)
  }

  return (
    <div className='form-group'>
      <label htmlFor='filter-options'>
        Filter By
      </label>
      <fieldset id='filter-options'>
        <label><input type='radio' name='filter-option' onChange={(e) => handleChange(e.target.value)}value='Planets'/>Planets</label>
        <label><input type='radio' name='filter-option' onChange={(e) => handleChange(e.target.value)}value='Spaceships'/>Spaceships</label>
        <label><input type='radio' name='filter-option' onChange={(e) => handleChange(e.target.value)}value='Vehicles'/>Vehicles</label>
        <label><input type='radio' name='filter-option' onChange={(e) => handleChange(e.target.value)}value='Characters'/>Characters</label>
        <label><input type='radio' name='filter-option' onChange={(e) => handleChange(e.target.value)}value='Films'/>Films</label>
        <label><input type='radio' name='filter-option' onChange={(e) => handleChange(e.target.value)}value='Species'/>Species</label>
      </fieldset>
    </div>
  )
}
  