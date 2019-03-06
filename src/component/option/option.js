import React from 'react';
import './option.css';

 const option = ({ onGetTop, onGetTrending, onGetGenre, displaySuggestion }) => {
          console.log(displaySuggestion)

  return (
    <div className="option">
      <h4 className="option__title">Your Library</h4>
      <ul className="option__list">
        <li  onClick={onGetTop}>Top Songs</li>
        <li  onClick={onGetTrending}>Trending Artists</li>
        <li  onClick={onGetGenre}>New Genres</li>
      </ul>
      <div className="option__suggestion">
          <h4 className="option__suggestion_title">Suggestions</h4>
            <p></p>
      </div>
    </div>
  )
}


export default option
