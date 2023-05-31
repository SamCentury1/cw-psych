import React from 'react'
import {motion} from 'framer-motion'
import CheckMark from '../CheckMark/CheckMark'
import "./StepCard.css"

const StepCard = ({data,stepCompleted,handleSubmit}) => {
    return (
        <div className='step-container'>
            <div className='step-number-container'>
                    <div className='step-number'>
                        {data.step}
                    </div>
                </div>
            <div className='step-text'> {data.body}
            </div>
            <div className='step-confirm'>
                {
                    stepCompleted === true ? (
                        <CheckMark state={stepCompleted} />
                    ) : (
                        <motion.div
                            onClick={handleSubmit}
                            className='confirm-selection-btn'
                        >
                            Confirm
                        </motion.div>
                    )
                }
            </div>                                    
        </div>
    )
}

export default StepCard