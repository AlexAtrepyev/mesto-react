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
  
  return (
    <main>
      <section className="profile">
        <img className="profile__avatar" src={currentUser && currentUser.avatar} alt="аватар" />
        <button className="profile__button-edit-avatar" type="button" onClick={props.onEditAvatar} />
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__name">{currentUser && currentUser.name}</h1>
            <p className="profile__about">{currentUser && currentUser.about}</p>
          </div>
          <button className="profile__button-edit" type="button" onClick={props.onEditProfile} />
        </div>
        <button className="profile__button-add" type="button" onClick={props.onAddPlace} />
      </section>
      
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card, i) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
