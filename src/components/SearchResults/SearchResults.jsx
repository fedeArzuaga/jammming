import React from 'react'
import Tracklist from '../Tracklist/Tracklist'

const SearchResults = ({ inputValue, onAddTrack, trackList }) => {

    return (
        <div className='mt-5'>

            <h4>Search Results:</h4>

            <div className="row">
                <div className="col">
                    { (inputValue.length > 0 && trackList.length > 0) && (
                        <Tracklist 
                            tracks={ trackList }
                            onAddTrack={ onAddTrack }
                        />
                    )}
                </div>
            </div>

        </div>
    )
}

export default SearchResults