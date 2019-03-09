import React from 'react';
import spinning from './spinner.gif';





const musicspinner = () => {

    return (
        <div className="song-lyric">
            <img
            src={spinning}
            alt="Loading..."
            />
            <p style={{'color': '#fff'}}>Loading...</p>
        </div>
    );
}

export default musicspinner;