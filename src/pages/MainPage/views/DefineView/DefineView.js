import React, { useState } from 'react'
import {motion} from 'framer-motion'
// import * as FaIcons  from 'react-icons/fa'
import SelectAttributeCard from '../../../../components/SelectAttributeCard/SelectAttributeCard'
import * as HiIcons from 'react-icons/hi'

import "../views.css"
import "./DefineView.css"


const DefineView = ({handleClose,handleAttributeSelection,confirmAttributeSelection,instructions,state, openAttributeModal,handleGoBack}) => {

    

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

    const [nextPage, setNextPage] = useState(null)

    console.log(state)
    return (
        // <Overlay >


            
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="modal-container"
                    variants={dropIn}
                    initial={state.lastPage === 1 ? "hidden" : "exit"}
                    animate="visible"
                    exit={nextPage === 3 ? "exit" : "hidden"}
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
                    <div className='modal-body-container' >
                        <div className='define-attribute-container'>
                            {
                                state.attributes.map((obj,index) => {
                                    return <SelectAttributeCard key={index} data={obj} handleAttributeSelection={handleAttributeSelection}/>
                                })
                            }
                            <div className='add-attribute-container2'>
                                <motion.div 
                                    className='add-attribute-button'
                                    // whileHover={{scale:1.1}}
                                    onClick={openAttributeModal}
                                    // handleAddAttribute={handleAddAttribute}
                                >
                                    <div className='add-attribute-button-text'>Add Attribute</div>
                                    <HiIcons.HiPlus className='add-attribute-button-icon'/>
                                </motion.div>
                            </div>                            
                        </div>
                    </div>

                    <div className='modal-controls-layer'>
                        <motion.div 
                            className='controls-button-back'
                            style={{y:'50%', top:'-10%'}}
                            whileHover={{backgroundColor: '#ffffff' }}
                            onClick={() => handleGoBack(1)}
                        >
                            Back
                        </motion.div>

                        <div className='progress-container'>
                            <div className='progress-item' style={state.step_1_confirmed === true ? {backgroundColor: 'rgb(161, 41, 161) '} : {backgroundColor:'#ffffff'}}>1</div>
                            <div className='progress-item' style={state.step_2_confirmed === true ? {backgroundColor: 'rgb(161, 41, 161)'} : {backgroundColor:'#ffffff'}}>2</div>
                            <div className='progress-item' style={state.step_3_confirmed === true ? {backgroundColor: 'rgb(161, 41, 161) '} : {backgroundColor:'#ffffff'}}>3</div>
                            <div className='progress-item' style={state.step_4_confirmed === true ? {backgroundColor: 'rgb(161, 41, 161) '} : {backgroundColor:'#ffffff'}}>4</div>
                            <div className='progress-item' style={state.step_5_confirmed === true ? {backgroundColor: 'rgb(161, 41, 161) '} : {backgroundColor:'#ffffff'}}>5</div>
                        </div>

                        <motion.div 
                            className='controls-button-next'
                            style={{y:'50%', top:'-10%'}}
                            whileHover={{backgroundColor: '#643aa7' }}
                            onClick={() => {confirmAttributeSelection(); setNextPage(3)}}
                        >
                            Confirm
                        </motion.div>
                    </div>

                </motion.div>   
       
        // </Overlay>
    )
}

export default DefineView
