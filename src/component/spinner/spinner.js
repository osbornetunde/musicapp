import React from 'react';
import spinning from './spinner.gif';
import '../lyrics/lyrics';
import './spinner.css'


const spinner = () => {

    return (
        <div className="spinner">
            <img
            src={spinning}
            alt="Loading..."
            />
            <p>Please click on the following options on the sidebar</p>
        </div>
    );
}

export default spinner;