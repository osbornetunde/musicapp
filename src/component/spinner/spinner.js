import React from 'react';
import spinning from './spinner.gif';
import '../lyrics/lyrics';


const spinner = () => {

    return (
        <div className="song-lyric">
            <img
            src={spinning}
            alt="Loading..."
            style={{ width: '200px', margin: '40px auto', display: 'block'}}
            />
        </div>
    );
}

export default spinner;