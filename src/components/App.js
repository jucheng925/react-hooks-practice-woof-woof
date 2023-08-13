import React, {useState, useEffect} from "react";
import Filter from "./Filter";
import Dogbar from "./Dogbar";
import Summary from "./Summary"

function App() {
  const [dogs, setDogs] = useState([])
  const [displayDog, setDisplayDog] = useState({})
  const [filterOn, setFilterOn] = useState(false)

  useEffect(()=>{
    fetch("http://localhost:3001/pups")
    .then(r => r.json())
    .then(data => setDogs(data))
  }, [])

  function handleClick(dog) {
    setDisplayDog(dog)
  }

  function updatedDog(updatedDogObj) {
    const updatedDogsList = dogs.map((dog) => {
      if (dog.id === updatedDogObj.id) {
        return updatedDogObj
      }
      else return dog
    })
    setDisplayDog(updatedDogObj)
    setDogs(updatedDogsList)
  }

  function updateFilter(){
    setFilterOn(!filterOn)
  }

  const filteredDogs = dogs.filter((dog) => dog.isGoodDog)

  return (
    <div className="App">
      <Filter filterOn={filterOn} updateFilter={updateFilter}/>
      <Dogbar dogs={filterOn ? filteredDogs : dogs} handleClick={handleClick}/>
      <Summary displayDog={displayDog} updatedDog={updatedDog}/>
    </div>
  );
}

export default App;
