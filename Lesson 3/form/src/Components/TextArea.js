const TextArea = ({title,name,placeholder}) => {
    return (
        <div className="form__input">
            <label className="form__label">{title}</label>
            <textarea className="form__control" name={name} placeholder={placeholder} rows="3"></textarea>
        </div>
    );
}
export default TextArea;