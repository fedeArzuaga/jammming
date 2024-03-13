export const addTracksToTheNewPlaylist = ( playlistID, uris ) => {
    
    const accessToken = localStorage.getItem("access_token")

    const data = {
        uris,
        position: 0
    }

    fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify( data )
    })
    .then( response => response.json() )
    .then( data => data )

}
