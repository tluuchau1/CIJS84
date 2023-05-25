import React from "react";

const Button = (props) => {
    const {type, nameBtn, onClick} = props;

    const buttonStyle = {
        border: 'none',
        outline: 'none',
        backgroundColor: 'gold',
        fontWeight: '500',
        fontSize: '20px',
        padding: '14px',
        marginLeft: '4px',
        borderRadius: '15px',
        cursor: 'pointer',
    };

    return (
        <button 
        className="form__btn"
        type={type}
        onClick={onClick}
        style={buttonStyle}
        >
            {nameBtn}   
        </button>
    );
};
export default Button;