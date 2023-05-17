const Button = ({type,namebutton}) => {
    return (
        <button className="form__button" type={type}>
            {namebutton}
        </button>
    );
}
export default Button;