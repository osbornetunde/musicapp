import React, { Component } from 'react';
import './App.css';
import Option from '../component/option/option';
import Main from '../component/main/main';
import top from '../apis/top';
import trending from '../apis/trending';
import genre from '../apis/genre';
import lyricsApi from '../apis/lyricsApi';
import suggestionApi from '../apis/suggestionApi';


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
    showSuggestionLyrics: false,
    musicLyrics: '',
    suggestion: [],
    musicTitle: '',
    musicSuggestionTitle: ''
    }

componentDidMount() {
    this.showSuggestion()
}

showLyricsHandler = (e) => {
        console.log(e.target.id)
        if(e.target.id === '') {
        this.setState({
            showLyrics: false,
            musicLyrics: '',
            musicTitle: e.target.className,
            showSuggestionLyrics: !this.state.showSuggestionLyrics,
            displayTopSong: false
        })
    }
        this.setState({
            showLyrics: true,
            musicLyrics: '',
            musicTitle: e.target.className,
            showSuggestionLyrics: !this.state.showSuggestionLyrics
    })
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
        displayNewGenre: false,
        showSuggestionLyrics: false
    })
 }

 getTrendingArtistHandler = async (event) => {
    event.persist()
    const response = await trending.get('/chart.artists.get', {
        params: {
            apikey:`${process.env.REACT_APP_MM_KEY}`
        }
    })

     this.setState({ 
        trendingArtist: response.data.message.body.artist_list,
        title: event.target.textContent,
        displayTrendingArtist: !this.state.displayTrendingArtist,
        displayNewGenre: false,
        displayTopSong: false,
        showSuggestionLyrics: false

    })
}

getNewGenreHandler = async (event) => {
    event.persist()
    const response = await genre.get('/music.genres.get', {
        params: {
            apikey:`${process.env.REACT_APP_MM_KEY}`
        }
    })
    const new_genre = response.data.message.body.music_genre_list.slice(0, 10);
    this.setState({ 
       newGenre: new_genre,
       title: event.target.textContent,
       displayNewGenre: !this.state.displayNewGenre,
       displayTopSong: false,
       displayTrendingArtist: false,
       showSuggestionLyrics: false

   })
}


getLyrics = async (event) => {
    event.persist()
    const response = await lyricsApi.get(`/track.lyrics.get?track_id=${event.target.id}`, {
        params: {
            apikey:`${process.env.REACT_APP_MM_KEY}`
        }
    })

    this.setState({
        musicLyrics: response.data.message.body.lyrics.lyrics_body,
        showSuggestionLyrics: !this.state.showSuggestionLyrics,
        musicSuggestionTitle: event.target.className
    })
}

showSuggestion = async () => {
    const response = await suggestionApi.get('/chart.tracks.get', {
    params: {
        apikey:`${process.env.REACT_APP_MM_KEY}`
    }
})
    this.setState({
        suggestion:  response.data.message.body.track_list.sort(() => .5 - Math.random()).slice(0,5)

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
                    displaySuggestion={this.state.suggestion}
                    getMusicLyrics={this.getLyrics}
                    willShowLyrics={this.state.showSuggestionLyrics}
                    musicName = {this.state.musicSuggestionTitle}
                    songLyrics={this.state.musicLyrics}
                    displayLyrics={this.showLyricsHandler}
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
                    musicName = {this.state.musicTitle}
                    />
                </div>
            </React.Fragment>
        )
    }
}


export default App;