const initialState = {
    token: null,
    status: 'idle'
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUEST-TOKEN':
            return {
                ...state,
                status: 'loading'
            }
        case 'RECEIVE-TOKEN':
            return {
                ...state,
                token: action.token,
                status: 'idle'
            }
        case 'TOKEN-ERROR':
            return {
                ...state,
                status: 'error'
            }
        default: return state      
    }
}

export const requestToken = () => ({
    type: 'REQUEST-TOKEN'
})

export const receiveToken = (token) => ({
    type: 'RECEIVE-TOKEN',
    token
})

export const tokenError = () => ({
    type: 'TOKEN-ERROR'
})

export default authReducer