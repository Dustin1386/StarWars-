import React from 'react';
import './DisplayResults.css';
  
export default function DisplayResults(props) {
  const results = props.results.map(result => {
    return <li key={result.id}>
      <div>{result.name}</div>
    </li>
  })
  return (
    <div className='results'>
      <ul>
        {results}
      </ul>
    </div>
  )
  
}
  