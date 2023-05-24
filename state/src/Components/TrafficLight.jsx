import React from 'react';
import Light from './Light.jsx';
import '../Components/Light.css'
import '../Components/trafficLight.css';
import { useState } from 'react';

const TrafficLight = () => {
    const [lightOn, SetLightOn] = useState('green');

    const TurnOnNextLight = () => {
        if(lightOn === 'green') {
            SetLightOn('yellow');
            return;
        }
        
        if(lightOn === 'yellow') {
            SetLightOn('red');
            return;
        }
        
        if(lightOn === 'red') {
            SetLightOn('green');
            return;
        }
    };

    return (
        <div style={{display:'flex', alignItems: 'center'}}>
            <div className="traffic-light">
                <Light color={"red"} isOn={lightOn === 'red'} />
                <Light color={"yellow"} isOn={lightOn === 'yellow'} />
                <Light color={"green"} isOn={lightOn === 'green'} />
            </div>
            <button onClick={TurnOnNextLight} style={{padding: 12, background: '#01e924'}}>Next</button>
        </div>
    );
}
export default TrafficLight;