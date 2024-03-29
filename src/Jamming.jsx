import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar"
import SearchResults from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import { useSearchForm } from "./hooks/useSearchForm";
import { useNavigate } from "react-router-dom";

function Jamming() {

    const navigate = useNavigate();
    const { inputState, trackList, handleSearchChange } = useSearchForm()
    const [ playlist, setPlaylist ] = useState([])
    const [ accessToken, setAccessToken ] = useState( localStorage.getItem("access_token") || "" )

    useEffect(() => {

        if ( accessToken.length === 0 && !window.location.href.includes("access_token") ) {
            
            navigate("/get-permissions")

        }              

        if ( accessToken.length === 0 || window.location.href.includes("access_token") ) {

            const access_token = window.location.href.split("=")[1].split("&")[0];
            setAccessToken( access_token )
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("expiresAt", (new Date().getTime() + 3600000).toString());
            navigate("/")

        }

    }, [ accessToken ])

    useEffect( () => {

        const currentTime = new Date().getTime();
        const expirationTime = Number( localStorage.getItem("expiresAt") )

        if ( currentTime >= expirationTime ) {
            localStorage.removeItem("access_token")
            localStorage.removeItem("expiresAt")
            setAccessToken("")
            navigate("/get-permissions")
        }

    }, [])
    
    const handleTracklist = event => {
        const { target } = event
        const trackID = target.parentElement.id;

        if ( !playlist.find( item => item.id === trackID ) ) {
            setPlaylist( prev => ([ ...prev, trackList.find( track => track.id === trackID )]))
        }
    }

    const handleRemoveTracks = ({ target }) => {
        setPlaylist( current => current.filter( track => track.id !== target.parentElement.id ) )
    }

    return (
        <div className="container">
            <h1>Jammming App!</h1>

            <div className="row">

                <div className="col-md-6">
                    <SearchBar
                        inputState={ inputState }
                        handleChange={ handleSearchChange }
                    />
                    <SearchResults 
                        inputValue={ inputState }
                        onAddTrack={ handleTracklist }
                        trackList={ trackList }
                    />
                </div>

                <div className="col-md-6">
                    <Playlist 
                        playlist={ playlist }
                        handleRemoveTracks={ handleRemoveTracks }
                    />
                </div>

            </div>

        </div>
    )
}

export default Jamming
