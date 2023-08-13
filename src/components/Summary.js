import React from 'react'
import DogInfo from './DogInfo'

function Summary({displayDog, updatedDog}) {
  return (
    <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        {Object.keys(displayDog).length === 0 ? null : <DogInfo displayDog={displayDog} updatedDog={updatedDog} />}
  </div>
  )
}

export default Summary
