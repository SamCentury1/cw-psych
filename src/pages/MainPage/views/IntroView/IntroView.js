import React, { useState } from 'react'
import {motion} from 'framer-motion'
// import * as FaIcons  from 'react-icons/fa'

import "../views.css"

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


    console.log(state)

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
                        <div className='input-container'>
                            <input type="text" name="student-id" className='student-id-input' onChange={e => setParticipantId(e.target.value)}/>
                        </div>
                        <div className='submit-id-button-container'>
                            {/* <div className='submit-id-button'>SUBMIT</div> */}
                            {/* <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className='submit-id-button'
                                onClick={() => handleSubmit(participantId)}
                                >
                                SUBMIT
                            </motion.button> */}
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

                        <div className='progress-container'>
                            <div className='progress-item' style={state.step_1_confirmed === true ? {backgroundColor: '#643aa7 '} : {backgroundColor:'#ffffff'}}>1</div>
                            <div className='progress-item' style={state.step_2_confirmed === true ? {backgroundColor: '#643aa7 '} : {backgroundColor:'#ffffff'}}>2</div>
                            <div className='progress-item' style={state.step_3_confirmed === true ? {backgroundColor: '#643aa7 '} : {backgroundColor:'#ffffff'}}>3</div>
                            <div className='progress-item' style={state.step_4_confirmed === true ? {backgroundColor: '#643aa7 '} : {backgroundColor:'#ffffff'}}>4</div>
                            <div className='progress-item' style={state.step_5_confirmed === true ? {backgroundColor: '#643aa7 '} : {backgroundColor:'#ffffff'}}>5</div>
                        </div>

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