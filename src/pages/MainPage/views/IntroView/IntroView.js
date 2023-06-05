import React, { useState } from 'react'
import {motion} from 'framer-motion'
import ProgressBar from '../../../../components/ProgressBar/ProgressBar'
// import * as FaIcons  from 'react-icons/fa'

import "../views.css"
import "./IntroView.css"

const IntroView = ({handleClose,handleSubmit, instructions,state}) => {

    const dropIn = {
        hidden: {
            top:'-45%',
            x:'200vw',
            y:'50%',
            opacity:'0',
            transition: {
                duration:1,
            }            
        },
        visible: {
            top:'-45%',
            x: '-50%',
            y:'50%',
            opacity:1,
            transition: {
                duration:1,
                type:"spring",
                damping:'25',
                stiffness:'500'
            }
        },
        exit: {
            top:'-45%',
            x:'-200vw',
            y:'50%',
            opacity:0,
            transition: {
                duration:1,

            }
        },
    }

    const [participantId, setParticipantId] = useState(null);
    const [nextPage, setNextPage] = useState(null)


    return (
        // <Overlay >


            
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="modal-container"
                    variants={dropIn}
                    initial={state.lastPage === 0 ? "hidden" : "exit"}
                    animate="visible"
                    exit={nextPage === 2 ? "exit" : "hidden"}
                >
                    <div className='modal-header-container'>
                        <div className='header-index'>
                            <div className='header-index-item'>{instructions.step}</div>
                        </div>
                        <div className='modal-header-elem'>
                            <div className='header-title'>{instructions.title}</div>
                            <div className='header-text'>{instructions.body}</div>
                        </div>
                    </div>
                    <div className='modal-body-container'>
                        <div className='intro-input-label'>Enter your Qualtrix ID</div>
                        <div className='intro-input-container'>
                            <input type="text" name="student-id" className='intro-input' onChange={e => setParticipantId(e.target.value)}/>
                        </div>
                    </div>

                    <div className='modal-controls-layer'>
                        <motion.div 
                            className='controls-button-back'
                            style={{y:'50%', top:'-10%'}}
                            whileHover={{backgroundColor: '#ffffff' }}
                        >
                            Back
                        </motion.div>

                        <ProgressBar state={state} />

                        <motion.div 
                            className='controls-button-next'
                            style={{y:'50%', top:'-10%'}}
                            whileHover={{backgroundColor: '#643aa7' }}
                            onClick={() => {handleSubmit(participantId); setNextPage(2)}}
                        >
                            Confirm
                        </motion.div>
                    </div>

                </motion.div>   
       
        // </Overlay>
    )
}

export default IntroView
