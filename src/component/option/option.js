import React from 'react';
import './option.css';

 const option = ({ clicked, onGetTop, onGetTrending, onGetGenre }) => {


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
      </div>
    </div>
  )
}


export default option
