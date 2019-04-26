import React from 'react';
import './DisplayResults.css';
  
export default function DisplayResults(props) {
  const personResult = (result) => {
    return (
      <div>
        <div>Name: {result.name}</div>
        <div>Birth Year: {result.birth_year}</div>
        <div>Eye Color: {result.eye_color}</div>
        <div>Gender: {result.gender}</div>
        <div>Hair Color: {result.hair_color}</div>
        <div>Height (cm): {result.height}</div>
        <div>Mass (kg): {result.mass}</div>
      </div>
    )
  }

  const filmResult = (result) => {
    return (
      <div>
        <div>Title: {result.title}</div>
        <div>Director: {result.director}</div>
        <div>Producer: {result.producer}</div>
        <div>Release Date: {result.release_date}</div>
      </div>
    )
  }

  const starshipResult = (result) => {
    return (
      <div>
        <div>Name: {result.name}</div>
        <div>Model: {result.model}</div>
        <div>Manufacturer: {result.manufacturer}</div>
        <div>HyperDrive Rating: {result.hyperdrive_rating}</div>
        <div>Total Crew Members: {result.crew}</div>
      </div>
    )
  }

  const vehicleResult = (result) => {
    return (
      <div>
        <div>Name: {result.name}</div>
        <div>Model: {result.model}</div>
        <div>Manufacturer: {result.manufacturer}</div>
        <div>Total Crew Members: {result.crew}</div>
      </div>
    )
  }

  const speciesResult = (result) => {
    return (
      <div>
        <div>Name: {result.name}</div>
        <div>Classification: {result.classification}</div>
        <div>Designation: {result.designation}</div>
        <div>Language: {result.language}</div>
      </div>
    )
  }

  const planetResult = (result) => {
    return (
      <div>
        <div>Name: {result.name}</div>
        <div>Climate: {result.climate}</div>
        <div>Population: {result.population}</div>
      </div>
    )
  }

  const unknownResult = () => {
    return <div>Unable to find result</div>
  }

   
  const buildResult = (result, type) => {
    switch(type) {
      case 'people': return personResult(result)
      case 'planets': return planetResult(result)
      case 'films': return filmResult(result)
      case 'species': return speciesResult(result)
      case 'vehicles': return vehicleResult(result)
      case 'starships': return starshipResult(result)
      default: return unknownResult()
    }
  }

  const results = props.results.map((result, index) => {
    return <li key={index}>
      {buildResult(result, props.filter)}
    </li>
  })

  if (props.searchCount === 0) {
    return <div className='results'>Use the search and filter options above to explore the Star Wars Universe</div>
  } else if (props.results.length) {
    return (
      <div className='results'>
        <h2>Results</h2>
        <ul>
          {results}
        </ul>
      </div>
    )
  } else {
    return (
      <div className='results'>No results found</div>
    )
  }
  
}
  