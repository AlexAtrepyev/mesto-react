import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
  const avatarRef = React.useRef('');
  
  function handleChange(e) {
    avatarRef.current.value = e.target.value;
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
    avatarRef.current.value = '';
  }
  
  return (
    <PopupWithForm name="update" title="Обновить аватар" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input className="form__input" type="url" name="avatar" placeholder="Ссылка на картинку" ref={avatarRef} onChange={handleChange} required />
      <span className="form__error" id="avatar-error">Текст</span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
