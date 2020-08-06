import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import authReducer from './reducers/authReducer'
import artistReducer from './reducers/artistReducer'

const reducer = combineReducers({
    auth: authReducer,
    artists: artistReducer
})

const store = createStore(
    reducer,
    composeWithDevTools()
)

export default store