// import React, { useEffect, useState } from 'react'
// import {motion} from 'framer-motion'
// import Overlay from '../Overlay/Overlay'
// import "./ConfirmChartModal.css"
// import * as AiIcons from 'react-icons/ai'
// import PieChart from '../PieChart/PieChart'
// import {db } from '../../firebase-config'
// import { addDoc, collection, Timestamp } from 'firebase/firestore'



// const ConfirmChartModal = ({handleSubmit, handleClose, state}) => {

//     const dropIn = {
//         hidden: {
//             y:'-100vh',
//             opacity:'0',
//         },
//         visible: {
//             y:'0',
//             opacity:1,
//             transition: {
//                 duration:'0.1',
//                 type:"spring",
//                 damping:'25',
//                 stiffness:'500'
//             }
//         },
//         exit: {
//             y:'100vh',
//             opacity:0,
//         },
//     }

//     const [surveyData,setSurveyData] = useState([])

//     useEffect(() => {

//         let allAttributes = []
//         let other = []

//         state.attributes.forEach(element => {

//             const confirmValue = state.confirmed_attributes.find((obj) => obj.key === element.key)

//             if (element.default === true) {
//                 if (confirmValue) {
//                     allAttributes.push({
//                         key:confirmValue.key,
//                         body:confirmValue.body,
//                         value:confirmValue.value,
//                     })
//                 } else {
//                     allAttributes.push({
//                         key:element.key,
//                         body:element.body,
//                         value:element.value,
//                     })                    
//                 }
//             } else if (element.default === false) {
//                 if (confirmValue) {
//                     other.push({
//                         body:confirmValue.body,
//                         value:confirmValue.value
//                     })
//                 } else {
//                     other.push({
//                         body:element.body,
//                         value:element.value
//                     })                    
//                 }
//             }

//         });

//         allAttributes.push({
//             key:'Z',
//             value: other.reduce(function (acc, obj) { return acc + obj.value; }, 0),
//             data: other
//         })


//         const saveData = () => {
            
//             const data = {
//                 user: state.participant_id,
//                 createdAt: Timestamp.now(),
//                 responses:allAttributes,
//             }

//             setSurveyData(data)
//         }
//         return () => {saveData()}

//     },[])

//     async function submitData(surveyData) {
//         console.log(surveyData)

//         await addDoc(collection(db,"responses"),surveyData)
//         handleSubmit()
//     }


//     console.log(state)
//     return (

//         <Overlay onClick={handleClose}>

//             <motion.div
//                 onClick={(e) => e.stopPropagation()}
//                 className="modal-container"
//                 variants={dropIn}
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//             >
//                 <motion.div 
//                     className='modal-close-container'
//                     whileHover={{scale:1.1}}
//                     onClick={handleClose}
//                 >
//                     <AiIcons.AiOutlineClose />
//                 </motion.div>
//                 <div className='modal-header-container'>
//                     <div className='modal-header-elem'>Confirm Data</div>
//                 </div>

//                 <div className='modal-body-container'>
//                     <div className='confirm-chart-body'>

//                         <table>
//                                 <thead>
//                                     <tr>
//                                         <td>Key</td>
//                                         <td>Attribute</td>
//                                         <td>Share</td>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         state.confirmed_attributes.map((item,index) => {
//                                             return (
//                                                 <tr key={index}>
//                                                     <td>{item.key}</td>
//                                                     <td>{item.body}</td>
//                                                     <td>{item.value}</td>
//                                                 </tr>
//                                             )
//                                         })
//                                     }
//                                 </tbody>
//                             </table>

//                             <div className='confirm-chart-modal-chart'>
//                                 <PieChart stateData={state.confirmed_attributes} remaining={0}/>
//                             </div>
//                     </div>


//                 </div>
//                     <div className='submit-id-button-container'>
//                         {/* <div className='submit-id-button'>SUBMIT</div> */}
//                         <motion.button
//                             whileHover={{ scale: 1.1 }}
//                             whileTap={{ scale: 0.9 }}
//                             className='submit-id-button'
//                             onClick={(e) => submitData(surveyData)}
//                             >
//                             SUBMIT
//                         </motion.button>
//                     </div>



//             </motion.div>            
//         </Overlay>
//     )
// }

// export default ConfirmChartModal