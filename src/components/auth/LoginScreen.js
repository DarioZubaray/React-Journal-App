import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { startGoogleLogin, startLoginWithEmailPassword } from '../../actions/auth'
import { setError, setRemoveError } from '../../actions/ui'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const dispatch = useDispatch()
    const { loading, msgError } = useSelector( state => state.ui)

    const [ formValues, handleInputChange ] = useForm({
        email: 'd@gmail.com',
        password: '123456'
    })

    const { email, password } = formValues

    const handleLogin = (e) => {
        e.preventDefault()

        if (isFormValid()) {
            dispatch( startLoginWithEmailPassword(email, password) )
        }
    }

    const isFormValid = () => {
        let messageError = ''
        if ( !validator.isEmail(email) ) {
            messageError = 'Email is required or invalid'
            console.log(messageError)
            dispatch( setError(messageError) )
            return false
        }
        if ( password.length < 5) {
            messageError = 'Password should be at least 5 characters and match each other'
            console.log(messageError)
            dispatch( setError(messageError) )
            return false;
        }

        dispatch( setRemoveError() )
        return true;
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() )
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={ handleLogin }>
                {
                    ( msgError !== null)
                    && <div className="auth__alert-error">
                        { msgError }
                    </div>
                }

                <input
                    type="text"
                    className="auth__input"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    autoComplete="off"
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    className="auth__input"
                    placeholder="Password"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <button type="submit" className="btn btn-primary btn-block" disabled={ loading }>Login</button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div className="google-btn" onClick={ handleGoogleLogin }>
                        <div className="google-icon-wrapper">
                            <img
                                className="google-icon" 
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google button"
                            />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>
            </form>
        </>
    )
}
