const initialState = {
    currentArtist: null,
    status: 'idle'
}

const artistReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST-ARTIST':
            return {
                ...state,
                status: 'loading'
            }
        case 'RECEIVE-ARTIST':
            console.log(action.profile)
            return {
                status: 'idle',
                currentArtist: {
                    profile: action.profile
                }
            }
        case 'ARTIST-ERROR':
            return {
                ...state,
                status: 'error'
            }
        default: return state   
    }
    
}

export const requestArtist = () => ({
    type: 'REQUEST-ARTIST'
})

export const receiveArtist = (profile) => ({
    type: 'RECEIVE-ARTIST',
    profile
})

export const artistError = () => ({
    type: 'ARTIST-ERROR'
})

export default artistReducer