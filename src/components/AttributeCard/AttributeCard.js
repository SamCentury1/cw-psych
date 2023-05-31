import React from 'react'
import './AttributeCard.css'
import * as AiIcons from 'react-icons/ai'
import {motion} from 'framer-motion'

const AttributeCard = ({data, handleAttributeSelection, state, handleInputChange}) => {


    const widthValue = () => {
        let width = 0

        if (data.value <= 100 && data.value >= 0 ) {
            width = `${data.value}%`
        } else if (data.value < 0) {
            width = 0
        } 
        return width
    }

    const maxValue = (key) => {
        let sumExceptKey = 0
        state.confirmed_attributes.forEach(element => {
            if (element.key !== key) {
                sumExceptKey = sumExceptKey + element.value
            }
        });

        // let currentVal = state.confirmed_attributes.find((obj) => obj.key === key)
        // console.log(key,100 - sumExceptKey,currentVal.value)
        return (100 - sumExceptKey)
    }

    const displayValue = (key) => {
        console.log(key,maxValue(key))
        if (data.value > maxValue(key)) {
            return maxValue(key)
        } else {
            return data.value
        }
    }

    return (
        
        <div className='question-card'>
            {
                state.step_1_confirmed === true ? (
                    <></>
                ) : (
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
                )
            }

            <div className='question-key'>{data.key}</div>
            <div className='question-body'>{data.body}</div>


            <div className='question-input-container'>
                {
                    state.step_1_confirmed === true && state.step_2_confirmed === true ? 
                    (
                        <input 
                        type="number" 
                        className='question-input' 
                        min={0}
                        value={displayValue(data.key)}
                        onChange={(e) => handleInputChange({key:data.key,value:e.target.value})}
                        max={maxValue(data.key)}
                        />
                    )
                    :
                    (<></>)
                }


            </div>

            {
                state.step_1_confirmed === true && state.step_2_confirmed === true ? 
                (            
                <motion.div 
                    className='card-share'
                    initial={{width:0}}
                    // onKeyPress={(e) => {return e.keyCode != 13}}
                    animate={{width: widthValue()}}
                    style={{backgroundColor:data.color}}
                ></motion.div>
                )
                :
                (<></>)

            }


        </div>
    )
}

export default AttributeCard