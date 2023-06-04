
import React, {useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { UserAuth } from '../../../context/AuthContext'
import {motion} from 'framer-motion'

// import "./SignInPage.css"
// import "../Auth.css"
import "../AuthPages.css"

const SignInPage = () => {

    const {signIn} = UserAuth()

    const [signInEmail,setSignInEmail] = useState("")
    const [signInPassword,setSignInPassword] = useState("")
    const [errors,setErrors] = useState([])

    const navigate = useNavigate()

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {
            
            await signIn(signInEmail,signInPassword).then(async (auth) => {
                // console.log(auth.user.uid)
                await navigate('/admin')
            })
        } catch (e) {

            if (e.code === "auth/user-not-found") {
                setErrors(["user not found"])
            } 
            
            if (e.code === "auth/wrong-password") {
                setErrors(["wrong email or password"])
            }

            if (e.code === "auth/invalid-email") {
                setErrors(["please enter a valid email"])
            }

        }
    }

    const handleInputChange = (event) => {
        if (event.target.id === "email") {
            setSignInEmail(event.target.value)
        } else if (event.target.id === "password") {
            setSignInPassword(event.target.value)
        } else {
            return
        }
        setErrors([])
    }
    return (
        <div className="main-center-container App">
            <div className='form-error-container'>
                {
                    errors.map((err,idx) => {
                        return (
                            <div key={idx} className="form-error-message">{err}</div>
                        )
                    })
                }
            </div>
            <form className="auth-form-container" onSubmit={handleSubmit} >
                <div className='form-header'>
                    <div className='form-header-text'>Sign In</div>
                </div>
                <div className='form-body'>
                    <div className='form-body-input-container'>
                        <div className='form-body-item'>
                            <label htmlFor="email" className='form-body-label'>Email: </label>
                            <input className='form-body-input' type="email" id="email" onChange={(event) => {handleInputChange(event)}} />
                        </div>
                        <div className='form-body-item'>
                            <label htmlFor="password" className='form-body-label'>Password: </label>
                            <input className='form-body-input' type="password" id="password" onChange={(event) => {handleInputChange(event)}} />
                        </div>
                    </div>
                    <motion.div className='form-body-controls' whileHover={{scale:1.1}}>
                        <button className='form-controls-button' >Login</button>    
                    </motion.div>      
                </div>
            </form>
        </div>
    )
}

export default SignInPage



