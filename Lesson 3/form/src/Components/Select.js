const Select = ({title, dataOption}) => {
    return (
        <div className="form__select">
            <label className="form__label">{title}</label>
           <select className="form-select" name = {title}>
           {dataOption.map((item,index)=> ( 
                <option key={index} className="form__option" value={item.name}>{item.name}</option>
            ))}
           </select>
        </div>
    );
}
export default Select