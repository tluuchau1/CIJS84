

const InputCustom = ({type,title, name, placeholder}) => {
    return (
    <div className="form__input">
        <label className="form__label">{title}</label>
        <input className="form__control" type = {type} name = {name} placeholder = {placeholder} />
    </div>
    );
};
export default InputCustom;