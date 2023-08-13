import React from 'react'

function Dogbar({dogs, handleClick}) {
  const renderDogs = dogs.map((dog)=> <span key={dog.id} onClick={()=>handleClick(dog)}>{dog.name}</span>)

  return (
    <div id="dog-bar">
        {renderDogs}
    </div>
  )
}

export default Dogbar
