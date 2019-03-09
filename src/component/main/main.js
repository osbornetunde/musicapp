import React from 'react';
import './main.css';
import Table from '../table/table';
import TrendingTable from '../trendingList/trendingTable';
import GenreTable from '../genreList/genreTable';
import Spinner from '../spinner/spinner';


const main = (
    {
        value, 
        tracks, 
        trendings, 
        genres, 
        displayTop, 
        displayTrending, 
        displayNew, 
        displayLyrics, 
        willShowLyrics,
        getMusicLyrics,
        songLyrics,
        musicName
    }) => {

    let display = <Spinner />;
    
    if (displayTop) {
        display = (
                <Table 
                tracks={tracks} 
                displayLyrics={displayLyrics}
                willShowLyrics={willShowLyrics}
                getMusicLyrics={getMusicLyrics}
                songLyrics={songLyrics}
                musicName={musicName}
                />
        )
    }
    
    if (displayTrending) {
        display = (
                <TrendingTable trendings={trendings}/>
        )
    }
    if (displayNew){
        display = (
            <GenreTable genres={genres}/>
        )
    }
    return (
        <div className="main">
            <div className="main__title">
                <h1>Music App</h1>
                <h4>{value}</h4>
            </div>
            {display}
        </div>
    )
}

export default main;