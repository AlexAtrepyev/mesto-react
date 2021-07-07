import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef('');
  
  React.useEffect(() => {
    avatarRef.current.value = currentUser?.avatar ? currentUser.avatar : '';
  }, [currentUser]);
  
  function handleChange(e) {
    avatarRef.current.value = e.target.value;
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }
  
  return (
    <PopupWithForm name="update" title="Обновить аватар" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input className="form__input" type="url" name="avatar" placeholder="Ссылка на картинку" ref={avatarRef} onChange={handleChange} required />
      <span className="form__error" id="avatar-error">Текст</span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
