function Card({card, key}) {

    return (
        <>
        <div className="card" key={key}>
            <img src={`./images/${card.image}`} alt={card.name}/>
            <h3>{card.name}</h3>
            <label>{card.category}</label>
            <p>Ilość godzin do nauki: {card.hours}</p>
          </div>
        </>
    );
}

export default Card;