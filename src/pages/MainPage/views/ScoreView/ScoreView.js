import React, { useState } from 'react'
import {motion} from 'framer-motion'
// import * as FaIcons  from 'react-icons/fa'

import PieChart from '../../../../components/PieChart/PieChart'
import ProgressBar from '../../../../components/ProgressBar/ProgressBar'

import "../views.css"
import "./ScoreView.css"


const ScoreView = ({instructions,state,handleInputChange,handleScoreAttributes, handleGoBack}) => {

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


    const widthValue = (data) => {
        let width = 0

        if (data.value <= 100 && data.value >= 0 ) {
            width = `${data.value}%`
        } else if (data.value < 0) {
            width = 0
        } 
        return width
    }

    // const maxValue = (key) => {
    //     let sumExceptKey = 0
    //     state.confirmed_attributes.forEach(element => {
    //         if (element.key !== key) {
    //             sumExceptKey = sumExceptKey + element.value
    //         }
    //     });

    //     return (100 - sumExceptKey)
    // }

    // const displayValue = (data,key) => {
    //     if (data.value > maxValue(key)) {
    //         return maxValue(key)
    //     } else {
    //         return data.value
    //     }
    // }  

    const displayValue = (obj) => {

        return state.remaining_share + Number(obj.value)
    }
    

    const chartOptions = {
        maintainAspectRatio: true,
        responsive: true,
        aspectRatio: 2,
        plugins: {
            legend: {
                display:false,
            },
        }
    }

    const [nextPage, setNextPage] = useState(null)

    console.log(state)

    return (
        // <Overlay >


            
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="modal-container"
                    variants={dropIn}
                    initial={state.lastPage === 3 ? "hidden" : "exit"}
                    animate="visible"
                    exit={nextPage === 5 ? "exit" : "hidden"}
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
                        <div className='scoring-attribute-container'>
                        <div className='scoring-attribute-card'>
                            <div className='scoring-attribute-rank'></div>
                            <div className='scoring-attribute-body'>Remaining Share</div>
                            <div className='scoring-attribute-value'>
                                <div className='scoring-attribute-input'>{state.remaining_share}%</div>
                            </div>
                            <motion.div 
                                className='scoring-attribute-share'
                                initial={{width:0}}
                                // onKeyPress={(e) => {return e.keyCode != 13}}
                                animate={{width: `${state.remaining_share}%`}}
                                style={{backgroundColor:"#000000"}}
                            ></motion.div>
                        </div>
                            {
                                state.ranked_attributes.map((obj, index) =>{
                                    return (
                                        <div key={index} className='scoring-attribute-card'>
                                            <div className='scoring-attribute-rank'>{index+1}</div>
                                            <div className='scoring-attribute-body'>{obj.body}</div>
                                            <div className='scoring-attribute-value'>
                                            <input 
                                                type="number" 
                                                className='scoring-attribute-input' 
                                                min={0}
                                                value={obj.value}
                                                onChange={(e) => handleInputChange({key:obj.key,value:e.target.value})}
                                                max={displayValue(obj)}
                                                />
                                            </div>
                                            <motion.div 
                                                className='scoring-attribute-share'
                                                initial={{width:0}}
                                                // onKeyPress={(e) => {return e.keyCode != 13}}
                                                animate={{width: widthValue(obj)}}
                                                style={{backgroundColor:obj.color}}
                                            ></motion.div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className='scoring-pie-chart-container'>
                            <PieChart stateData={state.ranked_attributes} remaining={state.remaining_share}  chartOptions={chartOptions}/>
                        </div>

                    </div>

                    <div className='modal-controls-layer'>
                        <motion.div 
                            className='controls-button-back'
                            style={{y:'50%', top:'-10%'}}
                            whileHover={{backgroundColor: '#ffffff' }}
                            onClick={() => handleGoBack(3)}
                        >
                            Back
                        </motion.div>

                        <ProgressBar state={state} />

                        {/* <div className='progress-container'>
                            <div className='progress-item' style={state.step_1_confirmed === true ? {backgroundColor: 'rgb(161, 41, 161) '} : {backgroundColor:'#ffffff'}}>1</div>
                            <div className='progress-item' style={state.step_2_confirmed === true ? {backgroundColor: 'rgb(161, 41, 161)'} : {backgroundColor:'#ffffff'}}>2</div>
                            <div className='progress-item' style={state.step_3_confirmed === true ? {backgroundColor: 'rgb(161, 41, 161) '} : {backgroundColor:'#ffffff'}}>3</div>
                            <div className='progress-item' style={state.step_4_confirmed === true ? {backgroundColor: 'rgb(161, 41, 161) '} : {backgroundColor:'#ffffff'}}>4</div>
                            <div className='progress-item' style={state.step_5_confirmed === true ? {backgroundColor: 'rgb(161, 41, 161) '} : {backgroundColor:'#ffffff'}}>5</div>
                        </div> */}

                        <motion.div 
                            className='controls-button-next'
                            style={{y:'50%', top:'-10%'}}
                            whileHover={{backgroundColor: '#a51d2e' }}
                            onClick={() => {handleScoreAttributes(); setNextPage(5)}}
                        >
                            Confirm
                        </motion.div>
                    </div>

                </motion.div>   
       
        // </Overlay>
    )
}

export default ScoreView
