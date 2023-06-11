import React from 'react'
import {motion} from 'framer-motion'
import * as AiIcons from 'react-icons/ai'
import "./SelectAttributeCard.css"

const SelectAttributeCard = ({data, handleAttributeSelection, state}) => {
    return (
        <div className='question-card'>
            <div className='question-controls'>
                <motion.div 
                    id={`${data.key}-selected`}
                    className='question-icon'
                    whileHover={{opacity:0.9}}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {handleAttributeSelection(`${data.key}-selected`)}}
                    style={data.selected ? {color: '#AFE1AF'} : {color: 'rgb(154, 154, 154)'}} 
                >
                    <AiIcons.AiFillCheckCircle />
                </motion.div>
                <motion.div 
                    id={`${data.key}-removed`}
                    className='question-icon'
                    whileHover={{opacity:0.9}}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {handleAttributeSelection(`${data.key}-removed`)}}
                    style={data.removed ? {color: '#FAA0A0'} : {color: 'rgb(154, 154, 154)'}} 
                >
                    <AiIcons.AiFillCloseCircle />
                </motion.div>
            </div>

            {/* <div className='question-key'>{data.key}</div> */}
            <div className='question-body'>
                <div className='question-body-attribute'>{data.body}</div>
                <div className='question-body-example'>{data.subtext}</div>    
            </div>            
        </div>
    )
}

export default SelectAttributeCard