import React from 'react'

function DogInfo({displayDog, updatedDog}) {
    function handleClick(){
        fetch(`http://localhost:3001/pups/${displayDog.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                isGoodDog: !displayDog.isGoodDog
            }),
        })
        .then(r => r.json())
        .then(updated => updatedDog(updated))
    }

  return (
    <div id="dog-info">
        <img src={displayDog.image} alt={displayDog.name} />
        <h2>{displayDog.name}</h2>
        <button onClick={handleClick}>{displayDog.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>    
    </div>
  )
}

export default DogInfo
