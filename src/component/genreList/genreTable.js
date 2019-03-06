import React from 'react';
import GenreList from '../genreList/genreList';
import GenreTitle from '../genreList/genreTitle';
import Spinner from '../spinner/spinner'


const table = ({ genres }) => {
    
    if(!genres){
        return <Spinner />
    }
    return (
        <React.Fragment>
            <GenreTitle />
            <ul className="song_list">
                <GenreList genres={genres}/>
            </ul>
      </React.Fragment>
    )
}

export default table;