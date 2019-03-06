import React from 'react';
import GenreList from '../genreList/genreList';
import GenreTitle from '../genreList/genreTitle';
import Spinner from '../spinner/spinner'


const table = ({ genres }) => {
    
    if(!genres){
        return <Spinner />
    }
    return (
        <div className="genre_table">
            <GenreTitle />
            <ul className="song_list">
                <GenreList genres={genres}/>
            </ul>
      </div>
    )
}

export default table;