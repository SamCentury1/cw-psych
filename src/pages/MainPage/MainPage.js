// import { AnimatePresence, color } from 'framer-motion'
// import React, { Component } from 'react'
// import UserModal from '../../components/UserModal/UserModal'
// import './MainPage.css'
import defaultAttributes from '../../utilities/defaultAttributes'
// import AttributeCard from '../../components/AttributeCard/AttributeCard'
// import {motion} from 'framer-motion'
// import CheckMark from '../../components/CheckMark/CheckMark'
// import StepCard from '../../components/StepCard/StepCard'
// import instructions from'../../utilities/instructions'
// import Attributes from '../../components/Attributes/Attributes'
// import colorDictionary from '../../utilities/colorDictionary'
// import * as HiIcons from 'react-icons/hi'
// import AddAttributeModal from '../../components/AddAttributeModal/AddAttributeModal'
// import PieChart from '../../components/PieChart/PieChart'
// import ConfirmChartModal from '../../components/ConfirmChartModal/ConfirmChartModal'

// class MainPage extends Component {

//     constructor (props) {
//         super(props)

//         this.state = {
//             modalVisible: true,
//             add_attribute_modal_visible: false,
//             confirm_chart_modal_visible:false,
//             participant_id:null,

//             attributes: defaultAttributes,

//             confirmed_attributes: null,

//             step_1_confirmed: false,
//             step_2_confirmed: false,
//             step_3_confirmed: false,

//             remaining_share: 100,
//         }
//     }


//     handleModalClose = async (elem) => {
    
//             this.setState({
//                 modalVisible:false,
//                 add_attribute_modal_visible:false,
//                 confirm_chart_modal_visible:false,
//             })

//     }

//     handleParticipantIdSubmit = (elem) => {
//         if (elem === '') {
//             this.setState({
//                 modalVisible:true,
//             }) 
//         } else {
//             this.setState({
//                 modalVisible:false,
//                 participant_id:elem
//             }) 
//         }
//     }

//     handleAttributeSelection = (elem) => {
//         const elemKey = elem.split('-')[0]
//         const elemStatus = elem.split('-')[1]

//         // const clickedAttribute = this.state.attributes.find((obj) => obj.key === elemKey)

//         this.setState((state) => {

//             let attributes = []

//             state.attributes.forEach(obj => {
//                 console.log(elemKey)
//                 if (obj.key === elemKey) {
//                     if (elemStatus === 'selected') {
//                         if (obj.selected === true) {
//                             attributes.push({key: obj.key, body: obj.body, subtext: obj.subtext, value: obj.value, default: obj.default, selected: false, removed:obj.removed })
//                         } else if (obj.selected === false) {
//                             if (obj.removed === true) {
//                                 attributes.push({key: obj.key, body: obj.body, subtext: obj.subtext, value: obj.value, default: obj.default, selected: true, removed:false })
//                             } else if (obj.removed === false) {
//                                 attributes.push({key: obj.key, body: obj.body, subtext: obj.subtext, value: obj.value, default: obj.default, selected: true, removed:obj.removed })
//                             }
//                         }
//                     } else if (elemStatus === 'removed') {
//                         if (obj.removed === true) {
//                             attributes.push({key: obj.key, body: obj.body, subtext: obj.subtext, value: obj.value, default: obj.default, selected: obj.selected, removed:false })
//                         } else if (obj.removed === false) {
//                             if (obj.selected === true) {
//                                 attributes.push({key: obj.key, body: obj.body, subtext: obj.subtext, value: obj.value, default: obj.default, selected: false, removed:true })
//                             } else if (obj.selected === false) {
//                                 attributes.push({key: obj.key, body: obj.body, subtext: obj.subtext, value: obj.value, default: obj.default, selected: obj.selected, removed:true })
//                             }
//                         }
//                     }
//                 }else {
//                     attributes.push({key: obj.key, body: obj.body, subtext: obj.subtext, value: obj.value, default: obj.default, selected: obj.selected, removed:obj.removed })
//                 }

//             });

//             return {attributes}
//         })
//     }

//     confirmAttributeSelection = () => {
//         const unconfirmed =  this.state.attributes.filter((elem) => elem.selected ===false && elem.removed === false)
        
//         if (unconfirmed.length === 0) {
//             this.setState((state) => {
//                 const confirmed_attributes = state.attributes.filter((elem) => elem.selected === true)
//                 const step_1_confirmed = true
//                 return {step_1_confirmed, confirmed_attributes}
//             })
//         }
//     }

//     confirmAttributeRanking = () => {
        
//         this.setState((state) => {
//             const step_2_confirmed = true

//             let confirmed_attributes = []

//             state.attributes.forEach((attribute) => {

//                 if (attribute.selected === true) {
//                     const matchingColor = colorDictionary.find((obj) => obj.key === attribute.key)
    
//                     confirmed_attributes.push({
//                         key: attribute.key, 
//                         body: attribute.body, 
//                         subtext: attribute.subtext, 
//                         value: 0,
//                         color: matchingColor.code,
//                         default: attribute.default
//                     })
//                 }
//             })
//             return {step_2_confirmed, confirmed_attributes}
//         })

//     }
//     updateAttributeRanking = (elems) => {
//         this.setState({
//             confirmed_attributes: elems
//         })
//     }

//     displayAttributes = (step_1_confirmed, step_2_confirmed) => {
//         if (step_1_confirmed === false && step_2_confirmed === false) {
//             return (
//                 <div className='question-container'>
//                 {
//                     this.state.attributes.map((obj,key) => {
//                         return <AttributeCard key={key} data={obj} handleAttributeSelection={this.handleAttributeSelection} state={this.state}/>
//                     })
//                 }
//                 <div className='add-attribute-container'>
//                     <motion.div 
//                         className='add-attribute-button'
//                         whileHover={{scale:1.1}}
//                         onClick={this.openAttributeModal}
//                     >
//                         <div className='add-attribute-button-text'>Add Attribute</div>
//                         <HiIcons.HiPlus className='add-attribute-button-icon'/>
//                     </motion.div>
//                 </div>
//                 </div>
//             )
//         } else if (step_1_confirmed === true && step_2_confirmed === false) {
//             return <Attributes listItems={this.state.confirmed_attributes} updateAttributeRanking={this.updateAttributeRanking}/>
//         } else if (step_1_confirmed === true && step_2_confirmed === true) {
//             return (
//                 <div className='split-container'>
//                     <div className='question-container split-questions'>
//                         <div className='remaining-share'>
//                             <div>remaining share: {this.state.remaining_share}% </div>
//                             <motion.div 
//                                 className='card-share'
//                                 initial={{width:0}}
//                                 animate={{width: `${this.state.remaining_share}%`}}
//                                 style={{backgroundColor:'#000000'}}
//                             ></motion.div>
//                         </div>
//                         {
//                             this.state.confirmed_attributes.map((obj,key) => {
//                                 return <AttributeCard 
//                                             key={key} 
//                                             data={obj} 
//                                             handleAttributeSelection={this.handleAttributeSelection} 
//                                             state={this.state} 
//                                             handleInputChange={this.handleInputChange}
//                                         />
//                             })
//                         }
//                     </div>
                    
//                     {
//                         this.displayChart(this.state.step_1_confirmed,this.state.step_2_confirmed)
//                     }
//                 </div>
//             )
//         }
//     }

//     // when the user changes the values in the input container
//     handleInputChange = (e) => {

//         this.setState((state) => {

//             let confirmed_attributes = []
//             let sum = 0


//             let sumExceptKey = 0
//             state.confirmed_attributes.forEach(element => {
//                 if (element.key !== e.key) {
//                     sumExceptKey = sumExceptKey + element.value
//                 }
//             });

//             const valueCalc = (value) => {
//                 if (value+sum > 100) {
//                     console.log('value + sum is greater than 100')
//                     return (100 - sum)
//                 } else if (value < 0) {
//                     return 0
//                 } else if (100-sumExceptKey < 0) {
//                     console.log('the values of other attributes are higher that 100')
//                 } else {
//                     return value
//                 }
//             }


//             state.confirmed_attributes.forEach((attribute) => {
//                 if (attribute.key === e.key) {
//                     confirmed_attributes.push({
//                         key: attribute.key, 
//                         body: attribute.body, 
//                         subtext: attribute.subtext, 
//                         value: valueCalc(Number(e.value)),
//                         color: attribute.color,
//                         default: attribute.default
//                     })
//                     sum = sum+Number(e.value)
//                 } else {
//                     confirmed_attributes.push(attribute)
//                     sum = sum+Number(attribute.value)
//                 }
//             })

//             const remaining_share_calc = (sum) => {
//                 if (sum > 100) {
//                     return 0
//                 }  else if (100 - sum) {
//                     return 100 - sum
//                 } else return 0
//             }

//             const remaining_share = remaining_share_calc(sum)
//             // const remaining_share = 100 - sum
//             // setTimeout(() => {
                
//             // },2000)

//             return {confirmed_attributes, remaining_share}

//         })
//     }

//     openAttributeModal = () => {
//         this.setState({
//             add_attribute_modal_visible:true
//         })
//     }

//     handleAddAttribute = (elem) => {


//         this.setState((state) => {
//             // if (elem.attribute !== '') {
//                 const newAttributeShell = colorDictionary[this.state.attributes.length]
//                 const newAttribute = {
//                     key: newAttributeShell.key, 
//                     body: elem.attribute, 
//                     subtext: elem.example, 
//                     value: 0, 
//                     default: false, 
//                     selected:true, 
//                     removed:false                
//                 }
//                 // let attributes = state.attributes
//                 // attributes.push(newAttribute)

//                 const attributes = state.attributes.map((attribute) => {
//                     return attribute
//                 })

//                 attributes.push(newAttribute)

//                 const add_attribute_modal_visible = false
//                 return {attributes,add_attribute_modal_visible }
//             // }
//         })  

//     }

//     displayChart = (step_1_confirmed,step_2_confirmed) => {
//         if (step_1_confirmed === true && step_2_confirmed === true) {
//             return <PieChart stateData={this.state.confirmed_attributes} remaining={this.state.remaining_share}/>
//         }
//     }

//     openConfirmChartModal = () => {
//         this.setState({
//             confirm_chart_modal_visible:true
//         })
//     }

//     handleSubmitData = () => {
//         this.setState({
//             step_3_confirmed:true,
//             confirm_chart_modal_visible:false
//         })
//         console.log(this.state)
//     }


//     render() {
        
//         return (
//             <div>
//                 <div className='App'>

//                         {
//                             this.state.step_3_confirmed === true ? (
//                                 <div>Thank you!</div>
//                             ) : (
//                                 <div className='main-container'>
//                                 <div className='header-container'>
//                                     <div className='header'>
//                                         Shape and Weight Based Inventory
//                                     </div>
//                                     <div className='participant-container'>
//                                         participant: {this.state.participant_id}
//                                     </div>
//                                 </div>
        
//                                 <div className='separator'></div>
        
//                                 <div className='body-container'>
//                                     <div className='instructions-container'>
        
//                                         <StepCard data={instructions[0]} stepCompleted={this.state.step_1_confirmed} handleSubmit={this.confirmAttributeSelection}/>
        
//                                         <StepCard data={instructions[1]} stepCompleted={this.state.step_2_confirmed} handleSubmit={this.confirmAttributeRanking} />
        
//                                         <StepCard data={instructions[2]} handleSubmit={this.openConfirmChartModal} />
        
        
//                                     </div>
        
//                                     {
//                                         this.displayAttributes(this.state.step_1_confirmed,this.state.step_2_confirmed)
//                                     }
        
        
//                                     {/* <div className='chart-container'>
//                                         {
//                                             this.displayChart(this.state.step_1_confirmed,this.state.step_2_confirmed)
//                                         }
        
//                                     </div> */}
        
//                                 </div>
        
//                                 <div className='submit-container'></div>
        
//                             </div>                                
//                             )
//                         }



//                     <AnimatePresence>
//                             { this.state.modalVisible && <UserModal 
//                                 showModal={this.state.modalVisible}
//                                 // handleClose={this.handleModalClose}
//                                 handleSubmit={this.handleParticipantIdSubmit}
//                                 /> }
//                     </AnimatePresence>

//                     <AnimatePresence>
//                             { this.state.add_attribute_modal_visible && <AddAttributeModal 
//                                 showModal={this.state.add_attribute_modal_visible}
//                                 handleClose={this.handleModalClose}
//                                 handleSubmit={this.handleAddAttribute}
//                                 /> }
//                     </AnimatePresence>            

//                     <AnimatePresence>
//                             { this.state.confirm_chart_modal_visible && <ConfirmChartModal 
//                                 showModal={this.state.confirm_chart_modal_visible}
//                                 handleClose={this.handleModalClose}
//                                 handleSubmit={this.handleSubmitData}
//                                 state={this.state}
//                                 /> }
//                     </AnimatePresence>                             
//                 </div>
//             </div>
//         )
//     }
// }

// export default MainPage


import React, { Component } from 'react'
import { AnimatePresence } from 'framer-motion'

// utilities
import instructions from '../../utilities/instructions'
import colorDictionary from '../../utilities/colorDictionary'

// Views
import IntroView from './views/IntroView/IntroView'
import DefineView from './views/DefineView/DefineView'
import RankView from './views/RankView/RankView'
import ScoreView from './views/ScoreView/ScoreView'
import ConfirmView from './views/ConfirmView/ConfirmView'

// modals 
import AddAttributeModal from '../../components/AddAttributeModal/AddAttributeModal'

//database
import { Timestamp,collection,addDoc  } from 'firebase/firestore'
import { db } from '../../firebase-config'



export class MainPage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            // modalVisible: true,
            add_attribute_modal_visible: false,
            // confirm_chart_modal_visible:false,
            participant_id:null,
            
            intro_view_visible:true, // 1
            define_view_visible:false, // 2
            rank_view_visible:false, // 3
            score_view_visible:false, // 4
            confirm_view_visible:false, // 5

            instructions: instructions,

            attributes: defaultAttributes,
            confirmed_attributes: null,
            ranked_attributes:null,

            step_1_confirmed: false,
            step_2_confirmed: false,
            step_3_confirmed: false,
            step_4_confirmed: false,
            step_5_confirmed: false,

            remaining_share: 100,
            lastPage:1,
        }
    }

    handleAttributeModalClose = async (elem) => {
    
            this.setState({
                // modalVisible:false,
                add_attribute_modal_visible:false,
                // confirm_chart_modal_visible:false,
            })

    }

    handleGoBack = (page) => {
        this.setState((state) => {
            let intro_view_visible // 1
            let define_view_visible // 2
            let rank_view_visible // 3
            let score_view_visible // 4
            let confirm_view_visible // 5
            let lastPage
            if (page === 1) {
                intro_view_visible = true
                define_view_visible = false
                rank_view_visible = false
                score_view_visible = false
                confirm_view_visible = false
                lastPage = 2
            } else if (page === 2) {
                intro_view_visible = false
                define_view_visible = true
                rank_view_visible = false
                score_view_visible = false
                confirm_view_visible = false
                lastPage = 3                
            } else if (page === 3) {
                intro_view_visible = false
                define_view_visible = false
                rank_view_visible = true
                score_view_visible = false
                confirm_view_visible = false
                lastPage = 4               
            } else if (page === 4) {
                intro_view_visible = false
                define_view_visible = false
                rank_view_visible = false
                score_view_visible = true
                confirm_view_visible = false
                lastPage = 5               
            }
            return {intro_view_visible,define_view_visible,rank_view_visible,score_view_visible,confirm_view_visible,lastPage}
        })
    }

    displayProgressItem = () => {

    }

    handleParticipantSubmit = (elem) => {
        this.setState({
            participant_id: elem,
            step_1_confirmed: true,
            intro_view_visible: false,
            define_view_visible: true,
            lastPage:1
        })
    }

    // selecting an attribute
    handleAttributeSelection = (elem) => {
        const elemKey = elem.split('-')[0]
        const elemStatus = elem.split('-')[1]

        this.setState((state) => {

            let attributes = []

            state.attributes.forEach(obj => {
                if (obj.key === elemKey) {
                    if (elemStatus === 'selected') {
                        if (obj.selected === true) {
                            attributes.push({key: obj.key, body: obj.body, subtext: obj.subtext, value: obj.value, default: obj.default, selected: false, removed:obj.removed })
                        } else if (obj.selected === false) {
                            if (obj.removed === true) {
                                attributes.push({key: obj.key, body: obj.body, subtext: obj.subtext, value: obj.value, default: obj.default, selected: true, removed:false })
                            } else if (obj.removed === false) {
                                attributes.push({key: obj.key, body: obj.body, subtext: obj.subtext, value: obj.value, default: obj.default, selected: true, removed:obj.removed })
                            }
                        }
                    } else if (elemStatus === 'removed') {
                        if (obj.removed === true) {
                            attributes.push({key: obj.key, body: obj.body, subtext: obj.subtext, value: obj.value, default: obj.default, selected: obj.selected, removed:false })
                        } else if (obj.removed === false) {
                            if (obj.selected === true) {
                                attributes.push({key: obj.key, body: obj.body, subtext: obj.subtext, value: obj.value, default: obj.default, selected: false, removed:true })
                            } else if (obj.selected === false) {
                                attributes.push({key: obj.key, body: obj.body, subtext: obj.subtext, value: obj.value, default: obj.default, selected: obj.selected, removed:true })
                            }
                        }
                    }
                }else {
                    attributes.push({key: obj.key, body: obj.body, subtext: obj.subtext, value: obj.value, default: obj.default, selected: obj.selected, removed:obj.removed })
                }

            });

            return {attributes}
        })
    }

    openAttributeModal = () => {
        this.setState({
            add_attribute_modal_visible:true
        })
    }

    handleAddAttribute = (elem) => {

        this.setState((state) => {
            // if (elem.attribute !== '') {
                const newAttributeShell = colorDictionary[this.state.attributes.length]
                const newAttribute = {
                    key: newAttributeShell.key, 
                    body: elem.attribute, 
                    subtext: elem.example, 
                    value: 0, 
                    default: false, 
                    selected:true, 
                    removed:false                
                }
                // let attributes = state.attributes
                // attributes.push(newAttribute)

                const attributes = state.attributes.map((attribute) => {
                    return attribute
                })

                attributes.push(newAttribute)

                const add_attribute_modal_visible = false
                return {attributes,add_attribute_modal_visible }
            // }
        })  

    }

    confirmAttributeSelection = () => {
        const unconfirmed =  this.state.attributes.filter((elem) => elem.selected ===false && elem.removed === false)
        
        if (unconfirmed.length === 0) {
            this.setState((state) => {
                const confirmed_attributes = state.attributes.filter((elem) => elem.selected === true)
                const step_2_confirmed = true
                const define_view_visible = false
                const rank_view_visible = true
                const lastPage = 2
                return {step_2_confirmed, confirmed_attributes, define_view_visible, rank_view_visible, lastPage}
            })
        }
    }
 
    updateAttributeRanking = (elems) => {
        this.setState({
            confirmed_attributes: elems
        })
    }

    handleDefineAttributes = () => {
        
    }

    handleRankAttributes = () => {
        this.setState((state) => {
            const rank_view_visible = false // 3
            const score_view_visible = true // 4
            const step_3_confirmed =  true
            const lastPage = 3

            const ranked_attributes = state.confirmed_attributes.map((obj) => {
                const matchedColor = colorDictionary.find((color) => color.key === obj.key)
                return {
                    key: obj.key, 
                    body: obj.body, 
                    subtext: obj.subtext, 
                    value: 0, 
                    default: obj.default, 
                    selected:obj.selected, 
                    removed:obj.removed,
                    color:matchedColor.code                      
                }
                
            })

            return {rank_view_visible,score_view_visible,step_3_confirmed, ranked_attributes,lastPage}
        })
        // this.setState({
        //     rank_view_visible:false, // 3
        //     score_view_visible:true, // 4
        //     step_3_confirmed: true,
        //     ranked_attributes
        // })
    }

    // when the user changes the values in the input container
    handleInputChange = (e) => {

        this.setState((state) => {

            let ranked_attributes = []


            


            // let sumExceptKey = 0
            // state.ranked_attributes.forEach(element => {
            //     if (element.key !== e.key) {
            //         sumExceptKey = sumExceptKey + element.value
            //     }
            // });

            // const valueCalc = (value) => {
            //     if (value+sum > 100) {
            //         console.log('value + sum is greater than 100')
            //         return (100 - sum)
            //     } else if (value < 0) {
            //         return 0
            //     } else if (100-sumExceptKey < 0) {
            //         console.log('the values of other attributes are higher that 100')
            //     } else {
            //         return value
            //     }
            // }


            state.ranked_attributes.forEach((attribute) => {
                if (attribute.key === e.key) {

                    const allAttributesExceptThisOne = state.ranked_attributes.filter((obj) => obj.key !== e.key)

                    const sumOfAllOtherAttributes = this.calculateSumOfObjects(allAttributesExceptThisOne,'value')


                    if (e.value < 0 ) {
                        ranked_attributes.push({
                            key: attribute.key, 
                            body: attribute.body, 
                            subtext: attribute.subtext, 
                            value: 0,
                            color: attribute.color,
                            default: attribute.default,
                        })
                    } else if (sumOfAllOtherAttributes + Number(e.value) > 100) {
                        const missingShare = 100 - sumOfAllOtherAttributes
                        ranked_attributes.push({
                            key: attribute.key, 
                            body: attribute.body, 
                            subtext: attribute.subtext, 
                            value: missingShare,
                            color: attribute.color,
                            default: attribute.default
                        })                        
                    } else {
                        ranked_attributes.push({
                            key: attribute.key, 
                            body: attribute.body, 
                            subtext: attribute.subtext, 
                            value: Number(e.value),
                            color: attribute.color,
                            default: attribute.default
                        })                        
                    }

                } else {
                    ranked_attributes.push(attribute)
                    // sum = sum+Number(attribute.value)
                }
            })

            // const remaining_share_calc = (sum) => {

                // if (sum > 100) {
                //     return 0
                // }  else if (100 - sum) {
                //     return 100 - sum
                // } else return 0
            // }

            const remaining_share = 100 - this.calculateSumOfObjects(ranked_attributes,'value')
            // const remaining_share = 100 - sum
            // setTimeout(() => {
                
            // },2000)


            return {ranked_attributes, remaining_share}

        })
    }
    

    handleScoreAttributes = () => {
        this.setState({
            score_view_visible:false, // 4
            confirm_view_visible:true, // 5
            step_4_confirmed: true,
            lastPage:4
        })
    }

    calculateSumOfObjects = (object, property) => {
        const calculate = object.reduce(function(previousVal, currentVal) {
            return previousVal + currentVal[property]
        }, 0)
        return calculate
    }


    // handleConfirmData = () => {
        
    // }

    handleConfirm = () => {
        this.setState({
            step_5_confirmed:true,
            confirm_view_visible:false
        })
        console.log(this.state)
    }

    saveDataToDatabase = async () => {
        let allAttributes = []
        let other = []

        this.state.attributes.forEach(element => {

            const confirmValue = this.state.ranked_attributes.find((obj) => obj.key === element.key)

            if (element.default === true) {
                if (confirmValue) {
                    allAttributes.push({
                        key:confirmValue.key,
                        body:confirmValue.body,
                        value:confirmValue.value,
                    })
                } else {
                    allAttributes.push({
                        key:element.key,
                        body:element.body,
                        value:element.value,
                    })                    
                }
            } else if (element.default === false) {
                if (confirmValue) {
                    other.push({
                        body:confirmValue.body,
                        value:confirmValue.value
                    })
                } else {
                    other.push({
                        body:element.body,
                        value:element.value
                    })                    
                }
            }

        });

        allAttributes.push({
            key:'Z',
            value: other.reduce(function (acc, obj) { return acc + obj.value; }, 0),
            data: other
        })

        const data = {
            user: this.state.participant_id,
            createdAt: Timestamp.now(),
            responses:allAttributes,
        }

        await addDoc(collection(db,"responses"),data)



    }


    render() {
        return (
        // <div>
            <div className='App' >


                <AnimatePresence>
                    { this.state.intro_view_visible && <IntroView 
                        showModal={this.state.intro_view_visible}
                        //handleClose={this.handleModalClose}
                        instructions={instructions[0]}
                        handleSubmit={this.handleParticipantSubmit}
                        state={this.state}
                        handleGoBack={this.handleGoBack}
                        /> }
                </AnimatePresence>

                <AnimatePresence>
                    { this.state.define_view_visible && <DefineView 
                        showModal={this.state.define_view_visible}
                        openAttributeModal={this.openAttributeModal}
                        handleAttributeSelection={this.handleAttributeSelection}
                        confirmAttributeSelection={this.confirmAttributeSelection}
                        instructions={instructions[1]}
                        state={this.state}
                        handleGoBack={this.handleGoBack}
                        /> }
                </AnimatePresence>    

                <AnimatePresence>
                    { this.state.rank_view_visible && <RankView 
                        showModal={this.state.rank_view_visible}
                        handleAttributeSelection={this.handleAttributeSelection}
                        handleRankAttributes={this.handleRankAttributes}
                        updateAttributeRanking={this.updateAttributeRanking}
                        instructions={instructions[2]}
                        state={this.state}
                        handleGoBack={this.handleGoBack}
                        /> }
                </AnimatePresence>   


                <AnimatePresence>
                    { this.state.score_view_visible && <ScoreView 
                        showModal={this.state.score_view_visible}
                        instructions={instructions[3]}
                        handleInputChange={this.handleInputChange}
                        handleScoreAttributes={this.handleScoreAttributes}
                        state={this.state}
                        handleGoBack={this.handleGoBack}
                        /> }
                </AnimatePresence>  

                <AnimatePresence>
                    { this.state.confirm_view_visible && <ConfirmView 
                        showModal={this.state.confirm_view_visible}
                        instructions={instructions[4]}
                        state={this.state}
                        handleGoBack={this.handleGoBack}
                        handleSubmit={this.handleConfirm}
                        saveDataToDatabase={this.saveDataToDatabase}
                        /> }
                </AnimatePresence>                  










                <AnimatePresence>
                            { this.state.add_attribute_modal_visible && <AddAttributeModal 
                                showModal={this.state.add_attribute_modal_visible}
                                handleClose={this.handleAttributeModalClose}
                                handleAddAttribute={this.handleAddAttribute}
                                /> }
                </AnimatePresence>   
                <AnimatePresence>
                            { 
                            this.state.step_1_confirmed &&
                            this.state.step_2_confirmed &&
                            this.state.step_3_confirmed &&
                            this.state.step_4_confirmed &&
                            this.state.step_5_confirmed && 
                            <div className='final-thank-you'>Thank you!</div>}
                </AnimatePresence>                                 
            </div>

        // </div>
        )
    }
}

export default MainPage