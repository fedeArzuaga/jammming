import { useState } from "react"
import { getTracksByName } from "../helpers/getTracksByName"

export const useSearchForm = () => {
    
    const [ inputState, setInputState ] = useState("")
    const [ trackList, setTrackList ] = useState([])

    const handleSearchChange = async ({ target }) => {

        setInputState( target.value )
        
        if ( target.value.length > 0 ) {

            const data = await getTracksByName( target.value )
            const tracks = await data.tracks.items
            
            setTrackList( 
                tracks.map( track => {
                    return {
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                    }
                })
            )

        } else {

            setTrackList([])

        }

    }

    return {
        inputState,
        trackList,
        handleSearchChange
    }

}
