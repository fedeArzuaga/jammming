import React from 'react'
import { useForm } from '../../hooks/useForm'
import Input from '../../ui/Input/Input'
import { Button } from '../../ui/Button/Button'
import { getNewPlaylist } from '../../helpers/getNewPlaylist'
import { addTracksToTheNewPlaylist } from '../../helpers/addTracksToTheNewPlaylist'

const Playlist = ({ playlist, handleRemoveTracks }) => {

    const { inputState, handleChange } = useForm()

    const handleSave = async e => {

        if ( inputState.length > 0 ) {

            const newPlaylist = await getNewPlaylist( inputState )
            const newPlaylistID = await newPlaylist.id
            const uris = playlist.map( track => track.uri )

            addTracksToTheNewPlaylist( newPlaylistID, uris )

        }

    }

    return (
        <div className="col">
            
            <form>
                <label className='h4' htmlFor="new_playlist">
                    New playlist's name:
                </label>
                <Input 
                    type="text" 
                    name="new_playlist"
                    id="new_playlist"
                    required={ true }
                    value={ inputState }
                    eventHandler={ handleChange }
                />
            </form>

            <ul className="list-group">
                { playlist.length > 0 && playlist.map( song => (
                    <li 
                        key={ `${song.id}${song.name}` }
                        id={ song.id }
                        className="list-group-item d-flex justify-content-between align-items-center"
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
                            onClick={ handleRemoveTracks }
                        >
                            -
                        </button>
                    </li>
                ))}
                { playlist.length > 0 && (
                    <Button 
                        eventHandler={ handleSave }
                    >
                        SAVE TO SPOTIFY
                    </Button>
                )}
            </ul>

        </div>
    )
}

export default Playlist