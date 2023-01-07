import React, { useState } from "react";

function Pet({ pet })
{
  const { type, age, weight, gender, name } = pet

  const [isAdopted, setIsAdopted] = useState(false)

  function handleClick()
  {
    setIsAdopted(true)
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className={isAdopted ? "ui primary button" : 'ui disable button'}>Already adopted</button>
        <button className={isAdopted ? "ui disabled button" : "ui primary button"} onClick={handleClick}>Adopt pet</button>
      </div>
    </div>
  );
}
export default Pet;
