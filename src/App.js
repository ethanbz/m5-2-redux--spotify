import React, { useEffect } from 'react';
import { BrowserRouter as Router,
  Switch, Route, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ArtistRoute from './components/ArtistRoute'
import { requestToken, receiveToken, tokenError } from './reducers/authReducer'

  const DEFAULT_ARTIST_ID = '1Mxqyy3pSjf8kZZL4QVxS0'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestToken())
    fetch('/spotify_access_token')
      .then(res => res.json())
      .then(data => dispatch(receiveToken(data.access_token)))
      .catch(err => {
        console.log(err)
        dispatch(tokenError())
      })
  }, [])
  return <Router>
    <Switch>
      <Route exact path='/'>
        <Redirect to='/artists/1Mxqyy3pSjf8kZZL4QVxS0' />
      </Route>
      <Route path='/artists/:id'>
        <ArtistRoute />
      </Route>
    </Switch>
  </Router>;
};

export default App;
