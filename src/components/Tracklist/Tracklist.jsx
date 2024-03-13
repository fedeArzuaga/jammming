import React from 'react'

const Tracklist = ({ tracks, onAddTrack }) => {
    return (
        <ul className="list-group">
            { tracks.length > 0 && tracks.map( song => (
                <li 
                    key={ song.id } 
                    className="list-group-item d-flex justify-content-between align-items-center"
                    id={ song.id }
                >
                    <div>
                        <div>
                            { song.name }
                        </div>
                        <div>
                            { song.artist } &#124; { song.album }
                        </div>
                    </div>
                    <button
                        className="btn btn-outline-light"
                        onClick={ onAddTrack }
                    >
                        +
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Tracklist