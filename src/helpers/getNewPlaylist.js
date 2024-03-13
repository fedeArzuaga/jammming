
export const getNewPlaylist = ( name ) => {

    const accessToken = localStorage.getItem("access_token")
    const userID = "fi810aug8dyxsw3n7zhkh3i5o"

    const data = {
        name,
        description: "",
        public: false
    }
    
    return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify( data )
    })
    .then( response => response.json() )
    .then( data => data )


}
