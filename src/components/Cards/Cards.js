import React from "react"
import CardsData from "./CardsData"

const createCard = (card) => (
    <div key={card.id} className="card">
      <img src={card.img} alt={card.title} />
      <h3>{card.name}</h3>
      <p>{card.tell}</p>
    </div>
  );
  

function Cards() {
    return (
        <div className="Cards">
            <h1>My Favorite Cards</h1>
            <div className="Card-Items">
                {CardsData.map(createCard)}
            </div>
        </div>
    )

}

export default Cards;