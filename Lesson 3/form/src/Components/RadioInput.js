const RadioInput = ({title,name,dataRadio}) => {
    return (
        <div className="form__radio">
            <label className="form__label">{title}:</label>

            {dataRadio.map((item, index) => (
            <div className="form__radio--list" key={index}>
                <label className="form__radio--label">{item.label}</label>
                <input type = "radio" className="form__radio--male" name={name} value={item.label} />
            </div>
            ))}
        </div>
    );
}
export default RadioInput;