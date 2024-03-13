export const getTracksByName = ( string ) => {
    
    const accessToken = localStorage.getItem("access_token");
    const urlToFetch = `https://api.spotify.com/v1/search?q=${string}&type=track&limit=10`
    return fetch( urlToFetch, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then( response => response.json() )
            .then( data => data )

}
