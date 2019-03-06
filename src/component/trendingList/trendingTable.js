import React from 'react';
import TrendingList from '../trendingList/trendingList';
import TrendingTitle from '../trendingList/trendingTitle';
import Spinner from '../spinner/spinner'


const table = ({ trendings }) => {
    
    if(!trendings){
        return <Spinner />
    }
    return (
        <div className="trending_table">
            <TrendingTitle />
            <ul className="song_list">
                <TrendingList trendings={trendings}/>
            </ul>
      </div>
    )
}

export default table;