const Card =({ title, image, decription }) => {
    return (
        <div className="box-container">
            <span className="box-top">
             <img className="box-img" width="40" height="40" src={image} data-src={image} alt={title}/>
            </span>
            <span className="box-bottom">
                <p className="box-title">{title}</p>
                <p className="box-decription">{decription}</p>
            </span>
        </div>
    )
}
export default Card;