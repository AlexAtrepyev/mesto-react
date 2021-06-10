import React from 'react';
import Card from './Card';
import { api } from '../utils/api.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      userDescription: null,
      userAvatar: null,
      cards: []
    }
  }
  
  componentDidMount() {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        this.setState({
          userName: userData.name,
          userDescription: userData.about,
          userAvatar: userData.avatar,
          cards: initialCards
        });
      })
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <main>
        <section className="profile">
          <img className="profile__avatar" src={this.state.userAvatar} alt="аватар" />
          <button className="profile__button-edit-avatar" type="button" onClick={this.props.onEditAvatar} />
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="profile__name">{this.state.userName}</h1>
              <p className="profile__about">{this.state.userDescription}</p>
            </div>
            <button className="profile__button-edit" type="button" onClick={this.props.onEditProfile} />
          </div>
          <button className="profile__button-add" type="button" onClick={this.props.onAddPlace} />
        </section>
        
        <section className="elements">
          <ul className="elements__list">
            {this.state.cards.map((card, i) => (
              <Card key={card._id} card={card} onCardClick={this.props.onCardClick} />
            ))}
          </ul>
        </section>
      </main>
    );
  }
}

export default Main;
