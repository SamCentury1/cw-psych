import React from 'react'
import "./ProgressBar.css"
import * as AiIcons from 'react-icons/ai'

const ProgressBar = ({state}) => {

    console.log(state)

    const displayContent = (pageActive,stepComplete,index) => {

        const incomplete = pageActive === true ? {backgroundColor : 'rgb(180, 69, 184)'} : {backgroundColor:'#ffffff', color: 'rgb(180, 69, 184)'}

        const activeComplete = pageActive === true ? {backgroundColor : 'rgb(180, 69, 184)'} : {backgroundColor: 'rgb(161, 41, 161)'}

        if (stepComplete === true) {
            return (
                <div className='progress-item' style={activeComplete}>
                    <AiIcons.AiOutlineCheck/>
                </div>
            )

        } else {
            return (
                <div className='progress-item' style={incomplete}>{index}</div>
            )            
        }

    }

    return (
        <div className='progress-container'>
            {
                displayContent(state.intro_view_visible,state.step_1_confirmed,1)
            }
            {
                displayContent(state.define_view_visible, state.step_2_confirmed, 2)
            }
            {
                displayContent(state.rank_view_visible, state.step_3_confirmed, 3)
            }
            {
                displayContent(state.score_view_visible, state.step_4_confirmed, 4)
            }
            {
                displayContent(state.confirm_view_visible, state.step_5_confirmed, 5)
            }                                                
        </div>
    )
}

export default ProgressBar