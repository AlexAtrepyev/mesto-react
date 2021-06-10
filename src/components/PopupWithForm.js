function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container popup__container_type_form">
        <h2 className="popup__title">{props.title}</h2>
        <form className="form" name={`form-${props.name}`} noValidate>
          {props.children}
          <button className="form__submit" type="submit" onClick={props.onClose}>Сохранить</button>
        </form>
        <button className="popup__button-close" type="button" onClick={props.onClose} />
      </div>
    </div>
  );
}

export default PopupWithForm;
