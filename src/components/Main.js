import React from 'react';
import Card from './Card';
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    api.getInitialCards()
      .then(initialCards => setCards(initialCards))
      .catch(err => console.log(err));
  }, []);
  
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => setCards(state => state.map(c => c._id === card._id ? newCard : c)))
      .catch(err => console.log(err));
  }
  
  function handleCardDelete(card) {
    api.removeCard(card._id)
      .then(res => {
        setCards(cards.filter(function(item) {
          return item._id !== card._id;
        }));
      })
      .catch(err => console.log(err));
  }
  
  return (
    <main>
      <section className="profile">
        <img className="profile__avatar" src={currentUser?.avatar ? currentUser.avatar : '#'} alt="аватар" />
        <button className="profile__button-edit-avatar" type="button" onClick={props.onEditAvatar} />
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__name">{currentUser?.name ? currentUser.name : ''}</h1>
            <p className="profile__about">{currentUser?.about ? currentUser.about : ''}</p>
          </div>
          <button className="profile__button-edit" type="button" onClick={props.onEditProfile} />
        </div>
        <button className="profile__button-add" type="button" onClick={props.onAddPlace} />
      </section>
      
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card, i) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
