import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { startRegisterWithEmailPassword } from '../../actions/auth'
import { setError, setRemoveError } from '../../actions/ui'
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

    const [ values, handleInputChange ] = useForm({
        name: 'dario',
        email: 'd@gmail.com',
        password: '12345',
        confirmPassword: '12345'
    })
    const { name, email, password, confirmPassword } = values

    const dispatch = useDispatch()
    const { msgError } = useSelector( state => state.ui)

    const handleRegister = (e) => {
        e.preventDefault()

        if (isFormValid()) {
            dispatch( startRegisterWithEmailPassword(email, password, name) )
        }
    }
    const isFormValid = () => {
        let messageError = ''
        if (name.trim().length <= 3) {
            messageError = 'Name is required or must be grathen than 4 chars long'
            console.log(messageError)
            dispatch( setError(messageError) )
            return false
        }

        if ( !validator.isEmail(email) ) {
            messageError = 'Email is required or invalid'
            console.log(messageError)
            dispatch( setError(messageError) )
            return false
        }

        if ( password !== confirmPassword || password.length < 5) {
            messageError = 'Password should be at least 5 characters and match each other'
            console.log(messageError)
            dispatch( setError(messageError) )
            return false;
        }

        dispatch( setRemoveError() )
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={ handleRegister }  className="animate__animated animate__fadeIn">
                {
                    ( msgError !== null)
                    && <div className="auth__alert-error">
                        { msgError }
                    </div>
                }

                <input
                    type="text"
                    className="auth__input"
                    placeholder="Name"
                    name="name"
                    value={ name }
                    onChange={ handleInputChange }
                    autoComplete="off"
                />

                <input
                    type="text"
                    className="auth__input"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    onChange={ handleInputChange }
                    autoComplete="off"
                 />

                <input
                    type="password"
                    className="auth__input"
                    placeholder="Password"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    className="auth__input"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={ confirmPassword }
                    onChange={ handleInputChange }
                />

                <button type="submit" className="btn btn-primary btn-block mb-5">Register</button>

                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already register? Login instead
                </Link>
            </form>
        </>
    )
}
