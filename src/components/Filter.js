import React from 'react'

function Filter({filterOn, updateFilter}) {
  return (
    <div id="filter-div">
        <button id="good-dog-filter" onClick={updateFilter}>Filter good dogs: {filterOn? "ON" : "OFF"}</button>
    </div>
  )
}

export default Filter