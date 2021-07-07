import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');
  
  function handleChange(e) {
    e.target.name === "title" ? setTitle(e.target.value) : setLink(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      title,
      link
    });
    setTitle('');
    setLink('');
  }
  
  return (
    <PopupWithForm name="add" title="Новое место" buttonText="Добавить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input className="form__input" type="text" name="title" placeholder="Название" value={title} onChange={handleChange} required minLength="2" maxLength="30" />
      <span className="form__error" id="title-error">Текст</span>
      <input className="form__input" type="url" name="link" placeholder="Ссылка на картинку" value={link} onChange={handleChange} required />
      <span className="form__error" id="link-error">Текст</span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
