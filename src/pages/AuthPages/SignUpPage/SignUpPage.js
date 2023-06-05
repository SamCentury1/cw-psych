import React from 'react'
import {useNavigate} from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import {setDoc,doc} from 'firebase/firestore'
import { auth,db } from '../../../firebase-config'
import {motion} from 'framer-motion'
// import addImage from "../../images/addImage.png"

// import "./SignUpPage.css"
// import "../Auth.css"

const SignUpPage = () => {

    // const [registerEmail,setRegisterEmail] = useState("")
    // const [registerPassword,setRegisterPassword] = useState("")
    // const [firstName,setFirstName] = useState("")
    // const [lastName,setLastName] = useState("")

    const navigate = useNavigate()




    const register = async (e) => {
        e.preventDefault()
        const firstName = e.target[0].value;
        const lastName = e.target[1].value;
        const email = e.target[2].value;
        const password = e.target[3].value;


        const res = await createUserWithEmailAndPassword(auth,email,password)

        try {
            await updateProfile(res.user, {
                displayName: firstName+" "+lastName,
                photoURL: null,
            }) 
            await setDoc(doc(db, "users",res.user.uid), {
                uid:res.user.uid,
                firstName: firstName,
                lastName: lastName,
                email: email,
                photoURL: null
            })
            .then(navigate('/admin'))
        } catch (error) {
            console.log(error.message)
        }
    


    }

    return (
        <div className='main-center-container App'>
            <form className="auth-form-container" onSubmit={register}>
                <div className='form-header'>
                    <div className='form-header-text'>Sign Up</div>
                </div>

                <div className='form-body'>
                    <div className='form-body-input-container'>
                        <div className='form-body-item'>
                            <label className='form-body-label' htmlFor="firstName">First Name</label>
                            <input className='form-body-input' type="text" id="firstName"  />
                        </div>

                        <div className='form-body-item'>
                            <label className='form-body-label' htmlFor="lastName">Last Name</label>
                            <input className='form-body-input' type="text" id="lastName" />
                        </div>      

                        <div className='form-body-item'>
                            <label className='form-body-label' htmlFor="email">Email</label>
                            <input className='form-body-input' type="email" id="email"  />
                        </div>

                        <div className='form-body-item'>
                            <label className='form-body-label' htmlFor="password">Password</label>
                            <input className='form-body-input' type="password" id="password"  />
                        </div>
                    </div>


                    <div className='form-body-controls'>
                        <motion.button className='form-controls-button' whileHover={{scale:1.1}}>Register</motion.button>    
                    </div>      
                </div>
            </form>
        </div>
    )
}


export default SignUpPage
