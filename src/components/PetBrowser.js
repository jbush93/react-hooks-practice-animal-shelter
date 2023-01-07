import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets })
{

  const mappedPets = pets.map(function (pet)
  {
    return <Pet key={pet.id} pet={pet} />
  })

  return <div className="ui cards">{mappedPets}</div>;
}

export default PetBrowser;
