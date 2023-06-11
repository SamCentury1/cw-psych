import React from 'react'
import {motion} from 'framer-motion'
import Overlay from '../Overlay/Overlay'
// import * as FaIcons  from 'react-icons/fa'

// import "../../"
import "./ErrorModal.css"

const ErrorModal = ({handleClose,errorMessage}) => {

    const dropIn = {
        hidden: {
            top:'0%',
            x:'0%',
            y:'-150vh',
            opacity:0,
            transition: {
                duration:1,
            }            
        },
        visible: {
            top:'-50%',
            x: '0%',
            y:'0%',
            opacity:1,
            transition: {
                duration:1,
                type:"spring",
                damping:'25',
                stiffness:'500'
            }
        },
        exit: {
            top:'0%',
            x:'0%',
            y:'150vh',
            opacity:0,
            transition: {
                duration:1,

            }
        },
    }


    return (
        <Overlay >


            
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="error-modal-container"
                    variants={dropIn}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className='error-modal-header-container'>
                        <div className='error-modal-header'>
                            Not so fast!
                        </div>
                    </div>

                    <div className='error-modal-body-container'>
                        <div className='error-modal-body-text'>
                            {errorMessage}
                        </div>
                    </div>

                    <div className='error-modal-submit-container'>
                        <motion.div 
                            className='error-modal-submit-button' 
                            onClick={handleClose}
                            whileHover={{scale:1.1}}
                        >
                            Okay
                        </motion.div>
                    </div>
                    

                </motion.div>   
       
        </Overlay>
    )
}

export default ErrorModal
