import React, { useState } from 'react'
import {motion} from 'framer-motion'
// import * as FaIcons  from 'react-icons/fa'

import PieChart from '../../../../components/PieChart/PieChart'
import ProgressBar from '../../../../components/ProgressBar/ProgressBar'

import "../views.css"
import "./ConfirmView.css"
// import { Timestamp, addDoc, collection } from 'firebase/firestore'
// import { db } from '../../../../firebase-config'


const ConfirmView = ({state,instructions, handleGoBack, saveDataToDatabase,handleSubmit}) => {

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

    const chartOptions = {
        maintainAspectRatio: true,
        aspectRatio: 2,
        // responsive:true,
        borderWidth: 0,
        plugins: {
            legend: {
                position:'left',
              
            },
        }
    }


    const [nextPage, setNextPage] = useState(null)


    // const [surveyData,setSurveyData] = useState([])

    // useEffect(() => {

    //     let allAttributes = []
    //     let other = []

    //     state.attributes.forEach(element => {

    //         const confirmValue = state.ranked_attributes.find((obj) => obj.key === element.key)

    //         if (element.default === true) {
    //             if (confirmValue) {
    //                 allAttributes.push({
    //                     key:confirmValue.key,
    //                     body:confirmValue.body,
    //                     value:confirmValue.value,
    //                 })
    //             } else {
    //                 allAttributes.push({
    //                     key:element.key,
    //                     body:element.body,
    //                     value:element.value,
    //                 })                    
    //             }
    //         } else if (element.default === false) {
    //             if (confirmValue) {
    //                 other.push({
    //                     body:confirmValue.body,
    //                     value:confirmValue.value
    //                 })
    //             } else {
    //                 other.push({
    //                     body:element.body,
    //                     value:element.value
    //                 })                    
    //             }
    //         }

    //     });

    //     allAttributes.push({
    //         key:'Z',
    //         value: other.reduce(function (acc, obj) { return acc + obj.value; }, 0),
    //         data: other
    //     })


    //     const saveData = () => {
            
    //         const data = {
    //             user: state.participant_id,
    //             createdAt: Timestamp.now(),
    //             responses:allAttributes,
    //         }

    //         setSurveyData(data)
    //     }
    //     return () => {saveData()}

    // },[state.attributes, state.participant_id, state.ranked_attributes])

    // async function submitData(surveyData) {
    //     console.log(surveyData)

    //     await addDoc(collection(db,"responses"),surveyData)
    //     await handleSubmit()
    // }


    return (
        // <Overlay >

                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="modal-container"
                    variants={dropIn}
                    initial={state.lastPage === 4 ? "hidden" : "exit"}
                    animate="visible"
                    exit={nextPage === 6 ? "exit" : "hidden"}
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
                        <div className='confirm-pie-chart-container'>
                            <PieChart stateData={state.ranked_attributes} remaining={state.remaining_share} chartOptions={chartOptions}/>
                        </div>
                    </div>

                    <div className='modal-controls-layer'>
                        <motion.div 
                            className='controls-button-back'
                            style={{y:'50%', top:'-10%'}}
                            whileHover={{backgroundColor: '#ffffff' }}
                            onClick={() =>handleGoBack(4)}
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
                            onClick={() => {saveDataToDatabase(); setNextPage(6);handleSubmit()}}
                        >
                            Confirm
                        </motion.div>
                    </div>

                </motion.div>   
       
        // </Overlay>
    )
}

export default ConfirmView
