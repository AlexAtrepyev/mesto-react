import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditAvatarPopupOpen: false,
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isImagePopupOpen: false,
      selectedCard: null
    }
  }
  
  handleEditAvatarClick = () => {
    this.setState({ isEditProfilePopupOpen: true });
  };
  
  handleEditProfileClick = () => {
    this.setState({ isAddPlacePopupOpen: true });
  };
  
  handleAddPlaceClick = () => {
    this.setState({ isEditAvatarPopupOpen: true });
  };
  
  handleCardClick = (card) => {
    this.setState({ isImagePopupOpen: true, selectedCard: card });
  }
  
  closeAllPopups = () => {
    this.setState({
      isEditAvatarPopupOpen: false,
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isImagePopupOpen: false,
      selectedCard: null
    });
  }
  
  render() {
    return (
      <div className="page__content">
        <Header />
        
        <Main onEditAvatar={this.handleAddPlaceClick} onEditProfile={this.handleEditAvatarClick} onAddPlace={this.handleEditProfileClick} onCardClick={this.handleCardClick} />
        
        <Footer />
        
        <PopupWithForm name="update" title="Обновить аватар" isOpen={this.state.isEditAvatarPopupOpen} onClose={this.closeAllPopups}>
          <input className="form__input" type="url" name="avatar" placeholder="Ссылка на картинку" required />
          <span className="form__error" id="avatar-error">Текст</span>
        </PopupWithForm>
        
        <PopupWithForm name="edit" title="Редактировать профиль" isOpen={this.state.isEditProfilePopupOpen} onClose={this.closeAllPopups}>
          <input className="form__input" type="text" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
          <span className="form__error" id="name-error">Текст</span>
          <input className="form__input" type="text" name="about" placeholder="О себе" required minLength="2" maxLength="200" />
          <span className="form__error" id="about-error">Текст</span>
        </PopupWithForm>
        
        <PopupWithForm name="add" title="Новое место" isOpen={this.state.isAddPlacePopupOpen} onClose={this.closeAllPopups}>
          <input className="form__input" type="text" name="title" placeholder="Название" required minLength="2" maxLength="30" />
          <span className="form__error" id="title-error">Текст</span>
          <input className="form__input" type="url" name="link" placeholder="Ссылка на картинку" required />
          <span className="form__error" id="link-error">Текст</span>
        </PopupWithForm>
        
        <ImagePopup card={this.state.selectedCard} isOpen={this.state.isImagePopupOpen} onClose={this.closeAllPopups} />
      </div>
    );
  }
}

export default App;
