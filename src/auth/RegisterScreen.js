import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form>
                <input type="text" className="auth__input" placeholder="Name" name="nane" autoComplete="off" />
                <input type="text" className="auth__input" placeholder="Email" name="email" autoComplete="off" />
                <input type="password" className="auth__input" placeholder="Password" name="password" />
                <input type="password" className="auth__input" placeholder="Confirm Password" name="confirm-password" />

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
