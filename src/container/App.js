import React, { Component } from 'react';
import './App.css';
import Option from '../component/option/option';
import Main from '../component/main/main';
import top from '../apis/top';
import trending from '../apis/trending';
import genre from '../apis/genre';
import lyricsApi from '../apis/lyricsApi';


class App extends Component {
 state = { 
    title : '',
    topSong: null,
    trendingArtist: null,
    newGenre: null,
    displayTopSong: false,
    displayTrendingArtist: false,
    displayNewGenre: false,
    showLyrics: false,
    musicLyrics: ''
    }



showLyricsHandler = (e) => {
        console.log(e.target.id)
        if(e.currentTarget.id === e.target.id) {
        this.setState({
            showLyrics: !this.state.showLyrics
        });
    }
}

 getTopSongHandler = async (event) => {
    event.persist()
    const response = await top.get('/chart.tracks.get', {
        params: {
            apikey:`${process.env.REACT_APP_MM_KEY}`
        }
    })


     this.setState({ 
         
        topSong: response.data.message.body.track_list,
        title: event.target.textContent,
        displayTopSong: !this.state.displayTopSong,
        displayTrendingArtist: false,
        displayNewGenre: false
    })
 }

 getTrendingArtistHandler = async (event) => {
    event.persist()
    const response = await trending.get('/chart.artists.get', {
        params: {
            apikey:`${process.env.REACT_APP_MM_KEY}`
        }
    })

    console.log(response.data.message.body.artist_list)
     this.setState({ 
        trendingArtist: response.data.message.body.artist_list,
        title: event.target.textContent,
        displayTrendingArtist: !this.state.displayTrendingArtist,
        displayNewGenre: false,
        displayTopSong: false

    })
}

getNewGenreHandler = async (event) => {
    event.persist()
    const response = await genre.get('/music.genres.get', {
        params: {
            apikey:`${process.env.REACT_APP_MM_KEY}`
        }
    })
    const new_genre = response.data.message.body.music_genre_list.slice(0, 9);
    // console.log(new_genre[0].music_genre.music_genre_name);
    this.setState({ 
       newGenre: new_genre,
       title: event.target.textContent,
       displayNewGenre: !this.state.displayNewGenre,
       displayTopSong: false,
       displayTrendingArtist: false

   })
}


getLyrics = async (event) => {
    event.persist()
    const response = await lyricsApi.get(`/track.lyrics.get?track_id=${event.target.id}`, {
        params: {
            apikey:`${process.env.REACT_APP_MM_KEY}`
        }
    })

    // console.log(response.data.message.body.lyrics.lyrics_body)
    this.setState({
        musicLyrics: response.data.message.body.lyrics.lyrics_body
    })
}

    render() {
        
        return (
            <React.Fragment>
                <div className="background">
                    <Option
                    onGetTop={this.getTopSongHandler}
                    onGetTrending={this.getTrendingArtistHandler}
                    onGetGenre={this.getNewGenreHandler}
                    />
                    <Main 
                    value={this.state.title}
                    tracks={this.state.topSong}
                    trendings={this.state.trendingArtist}
                    genres={this.state.newGenre}
                    displayTop={this.state.displayTopSong}
                    displayTrending={this.state.displayTrendingArtist}
                    displayNew={this.state.displayNewGenre}
                    displayLyrics={this.showLyricsHandler}
                    willShowLyrics={this.state.showLyrics}
                    getMusicLyrics={this.getLyrics}
                    songLyrics={this.state.musicLyrics}
                    />
                </div>
            </React.Fragment>
        )
    }
}


export default App;