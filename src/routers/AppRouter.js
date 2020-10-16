import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { firebase } from '../firebase/firebase-config'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import { login } from '../actions/auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

    const dispatch = useDispatch()

    const [ checking, setChecking ] = useState( true )
    const [ isLoggedIn, setLoggedIn ] = useState( false )

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) )
                setLoggedIn( true )
            } else {
                setLoggedIn( false )
            }

            setChecking( false )
        })
    }, [ dispatch, setChecking, setLoggedIn ])

    if ( checking ) {
        return (
            <h1 className="loading">Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    {/* <Route path="/auth" component={ AuthRouter } /> */}
                    <PublicRoute path="/auth" component={ AuthRouter } isAuthenticated={ isLoggedIn } />
                    {/* <Route exact path="/" component={ JournalScreen } /> */}
                    <PrivateRoute exact path="/" component={ JournalScreen } isAuthenticated={ isLoggedIn } />
                </Switch>
            </div>
        </Router>
    )
}
