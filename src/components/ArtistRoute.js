import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchArtistProfile } from '../helpers/api-helpers'
import { useDispatch } from 'react-redux'
import { requestArtist, receiveArtist, artistError } from '../reducers/artistReducer'
import styled from 'styled-components'

const numFormat = (num) => {
    const str = num.toString()
    if (str.length > 3 && str.length < 7) return `${Math.floor(num/1000)}K`
    if (str.length > 6 && str.length < 10) return `${Math.floor(num/1000000)}M`
    if (str.length > 9) return `${Math.floor(num/1000000000)}B`
}

const ArtistRoute = () => {
    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.auth.token)
    const artistId = useParams().id
    const artist = useSelector(state => state.artists.currentArtist)

    useEffect(() => {
        if (!accessToken) return
        dispatch(requestArtist())
        fetchArtistProfile(accessToken, artistId)
            .then(data => dispatch(receiveArtist(data)))
            .catch(error => {
                console.log(error)
                dispatch(artistError())
            }) 
    }, [accessToken])

    if (artist) console.log(artist.profile)

    return (
        <>{artist && <>
        <Image src={artist.profile.images[0].url} />
        <h1>{artist.profile.name}</h1>
        <h3>{numFormat(artist.profile.followers.total)} followers</h3>
        <h3>{artist.profile.genres[0]},  {artist.profile.genres[1]}</h3></>
        }</>
    )
}

const Image = styled.img`
    border-radius: 50%;
    height: 150px;
    width: 150px;
    object-fit: cover;
`

export default ArtistRoute