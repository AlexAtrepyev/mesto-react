import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  
  function handleClick() {
    props.onCardClick(props.card);
  }
  
  function handleLikeClick() {
    props.onCardLike(props.card);
  }
  
  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }
  
  return (
    <li className="card">
      <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className="card__info">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__likes-info">
          <button className={`card__button-like ${isLiked && 'card__button-like_active'}`} type="button" aria-label="лайк" onClick={handleLikeClick} />
          <span className="card__likes-number">{props.card.likes.length}</span>
        </div>
      </div>
      <button className={`card__button-trash ${!isOwn && 'card__button-trash_inactive'}`} type="button" aria-label="корзина" onClick={handleDeleteClick} />
    </li>
  );
}

export default Card;
