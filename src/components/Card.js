function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  
  return (
    <li className="card">
      <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className="card__info">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__likes-info">
          <button className="card__button-like" type="button" aria-label="лайк" />
          <span className="card__likes-number">{props.card.likes.length}</span>
        </div>
      </div>
      <button className="card__button-trash card__button-trash_inactive" type="button" aria-label="корзина" />
    </li>
  );
}

export default Card;
