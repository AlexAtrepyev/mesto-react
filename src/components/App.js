import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);
  
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  
  React.useEffect(() => {
    api.getUserInfo()
      .then(user => setCurrentUser(user))
      .catch(err => console.log(err));
  }, []);
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };
  
  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }
  
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard(null);
  }
  
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main onEditAvatar={handleAddPlaceClick} onEditProfile={handleEditAvatarClick} onAddPlace={handleEditProfileClick} onCardClick={handleCardClick} />
        <Footer />
        
        <PopupWithForm name="update" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input className="form__input" type="url" name="avatar" placeholder="Ссылка на картинку" required />
          <span className="form__error" id="avatar-error">Текст</span>
        </PopupWithForm>
        
        <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input className="form__input" type="text" name="name" placeholder="Имя" required minLength="2" maxLength="40" />
          <span className="form__error" id="name-error">Текст</span>
          <input className="form__input" type="text" name="about" placeholder="О себе" required minLength="2" maxLength="200" />
          <span className="form__error" id="about-error">Текст</span>
        </PopupWithForm>
        
        <PopupWithForm name="add" title="Новое место" buttonText="Добавить" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input className="form__input" type="text" name="title" placeholder="Название" required minLength="2" maxLength="30" />
          <span className="form__error" id="title-error">Текст</span>
          <input className="form__input" type="url" name="link" placeholder="Ссылка на картинку" required />
          <span className="form__error" id="link-error">Текст</span>
        </PopupWithForm>
        
        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
