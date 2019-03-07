import React from 'react';
import './option.css';
import Lyrics from '../lyrics/lyrics';

 const option = (
   { 
      onGetTop, 
      onGetTrending, 
      onGetGenre, 
      displaySuggestion, 
      getMusicLyrics, 
      willShowLyrics, 
      musicName,
      songLyrics,
      displayLyrics
    }) => {
          console.log(displaySuggestion)

  return (
    <div className="option">
      <h4 className="option__title">Your Library</h4>
      <ul className="option__list">
        <li  onClick={onGetTop}>Top 10 Songs</li>
        <li  onClick={onGetTrending}>Trending Artists</li>
        <li  onClick={onGetGenre}>New Genres</li>
      </ul>
      <div className="option__suggestion">
          <h4 className="option__suggestion_title">Suggestions</h4>
            {displaySuggestion.map( suggestion => {
              return (
                <div  
                key={suggestion.track.track_id}
                onClick={displayLyrics}>
                    <p 
                    onClick={getMusicLyrics} 
                    id={suggestion.track.track_id}
                    className={suggestion.track.track_name}
                    >{suggestion.track.track_name}</p>
                    {willShowLyrics ? 
                      <div>
                          <Lyrics 
                          id={suggestion.track.track_id} 
                          songLyrics={songLyrics} 
                          musicName={musicName}/>
                      </div> 
                      : null}
                </div>
              )
            })
          }
      </div>
    </div>
  )
}


export default option
