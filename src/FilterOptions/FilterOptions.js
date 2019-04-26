import React from 'react';
import './FilterOptions.css';
  
export default function FilterOptions(props) {
  return (
    <div className='form-group'>
      <label htmlFor='filter-options'>
        Filter By
      </label>
      <fieldset id='filter-options'>
        <label><input type='radio' name='filter-option' value='Planets'/>Planets</label>
        <label><input type='radio' name='filter-option' value='Spaceships'/>Spaceships</label>
        <label><input type='radio' name='filter-option' value='Vehicles'/>Vehicles</label>
        <label><input type='radio' name='filter-option' value='Characters'/>Characters</label>
        <label><input type='radio' name='filter-option' value='Films'/>Films</label>
        <label><input type='radio' name='filter-option' value='Species'/>Species</label>
      </fieldset>
    </div>
  )
}
  