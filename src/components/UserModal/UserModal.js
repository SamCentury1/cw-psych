import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
// import * as FaIcons  from 'react-icons/fa'
import Overlay from '../Overlay/Overlay'
import "./UserModal.css"

const UserModal = ({handleClose,handleSubmit}) => {

    const dropIn = {
        hidden: {
            y:'-100vh',
            opacity:'0',
        },
        visible: {
            y:'0',
            opacity:1,
            transition: {
                duration:'0.1',
                type:"spring",
                damping:'25',
                stiffness:'500'
            }
        },
        exit: {
            y:'100vh',
            opacity:0,
        },
    }

    const [participantId, setParticipantId] = useState(null);



    return (
        <Overlay >
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal-container"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className='modal-header-container'>
                    <div className='modal-header-elem'>Enter your participant ID</div>
                </div>
                <div className='modal-body-container'>
                    <div className='input-container'>
                        <input type="text" name="student-id" className='student-id-input' onChange={e => setParticipantId(e.target.value)}/>
                    </div>
                    <div className='submit-id-button-container'>
                        {/* <div className='submit-id-button'>SUBMIT</div> */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className='submit-id-button'
                            onClick={() => handleSubmit(participantId)}
                            >
                            SUBMIT
                        </motion.button>
                    </div>
                </div>



            </motion.div>            
        </Overlay>
    )
}

export default UserModal
