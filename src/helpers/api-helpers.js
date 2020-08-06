import { useDispatch } from 'react-redux'
import { requestArtist, receiveArtist, artistError } from '../reducers/artistReducer'

export const fetchArtistProfile = async (token, artistId) => {
    const options = {
        headers: { Authorization: `Bearer ${token}` }
    }
    console.log(artistId)
    console.log(token)
    const url = `https://api.spotify.com/v1/artists/${artistId}`

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (data.id !== undefined) return data

}