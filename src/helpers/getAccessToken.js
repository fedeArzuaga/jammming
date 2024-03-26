
export const getAccessToken = () => {
    
    const clientID = "88cda83545414a1abc9a48517d7c5d53"
    const redirect_uri = "http://localhost:5173/"

    const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientID}&redirect_uri=${redirect_uri}&scope=playlist-modify-public playlist-modify-private`

    window.location.href = url;

}