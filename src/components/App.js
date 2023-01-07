import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App()
{
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState("all");
  const [category, setCategory] = useState("all")

  useEffect(function ()
  {
    fetch("http://localhost:3001/pets")
      .then(function (resp)
      {
        return resp.json()
      })
      .then(function (data)
      {
        setPets(data)
      })
  }, [])

  function handleChange(e)
  {
    console.log(e.target.value)
    setCategory(e.target.value)
  }
  function handleClick()
  {
    console.log(category)
    setFilters(category)
  }

  const filteredPets = pets.filter(function (pet)
  {
    if (filters === "all") {
      return pet
    } else {
      return pet.type === filters
    }
  })

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters handleClick={handleClick} handleChange={handleChange} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={filteredPets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
