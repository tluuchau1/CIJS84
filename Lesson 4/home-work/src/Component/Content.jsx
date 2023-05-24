const Card = (props) => {
    const {
    src,
    titleIndex = "left",
    Title = null,
    imageShow = true,
    widthImg = 300,
    heightImg = 300,
    } = props;
    return (
        <div className="container">
            {titleIndex == "top" && <div className="title">{Title}</div>}
            {imageShow && (
            <div className={imageShow ? "l-6" : ""}>
                <img 
                src = 'https://lh3.googleusercontent.com/jfvyyQ-ivQ0QgegUzSFKuODBfb5-9obyC9o7M-crE6u1I5JHVcZGuLZW2s4EAulXDTocLOaOIvGc13UWXJa4LEYHVIDYSMbjpD_GN7q45Q'
                className="image" 
                width={widthImg} 
                height={heightImg} /> 
            </div>
            )}
            <div className={imageShow ? "l-6" : "l-12"}>
                {titleIndex != "top" && <label className="title">{Title}</label>}
                {/* <label className="title">{Title}</label> */}
                <label className="content__body">Chiều nay giá nhân dân tệ trên thị trường quốc tế giảm 0,2% so với USD thấp nhất 5 tháng qua do số liệu kinh tế trung quốc Tuần này kém...</label>
            </div>
        </div>
    );
}
export default Card