import React from "react";

const Light = ({color, isOn }) => {
    return (
        <div className="container-light">
            <div className={`light ${color}-light ${isOn && 'on'}`}> </div>
        </div>
    );
}
export default Light