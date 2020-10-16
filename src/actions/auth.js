import Swal from 'sweetalert2'
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from '../types/types'
import { finishLoading, startLoading } from './ui'

export const startLoginWithEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch( startLoading() )

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch( login( user.uid, user.displayName ) )

                dispatch( finishLoading() )
            })
            .catch( err => {
                console.log('error', err)
                dispatch( finishLoading() )

                Swal.fire({
                    title: 'Error!',
                    text: err.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                  })
            })
    }
}

export const startRegisterWithEmailPassword = (email, password, name) => {
    return (dispatch) => {
        dispatch( startLoading() )

        firebase.auth().createUserWithEmailAndPassword(email, password).then(async ({ user }) => {
            await user.updateProfile({ displayName: name })

            dispatch( login( user.uid, user.displayName ) )
        })
        .catch( err => {
            console.log('error', err)
            dispatch( finishLoading() )

            Swal.fire({
                title: 'Error!',
                text: err.message,
                icon: 'error',
                confirmButtonText: 'OK'
              })
        })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        dispatch( startLoading() )

        firebase.auth().signInWithPopup( googleAuthProvider ).then( ({ user }) => {
            dispatch( login( user.uid, user.displayName ) )

            dispatch( finishLoading() )
        })
    }
}

export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const startLogout = () => {
    return async ( dispatch ) => {
        await firebase.auth().signOut()

        dispatch( logout() )
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}