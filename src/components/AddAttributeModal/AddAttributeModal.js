import React, {  useState } from 'react'
import {motion} from 'framer-motion'
import Overlay from '../Overlay/Overlay'
// import "./AddAttributeModal.css"
import * as AiIcons from 'react-icons/ai'
import './AddAttributeModal.css'
import '../../pages/MainPage/views/views.css'


const AddAttributeModal = ({handleClose, handleAddAttribute}) => {

    const dropIn = {
        hidden: {
            // x:'100vw',
            x: '-50%',
            y:'-10%',
            opacity:'0',
        },
        visible: {
            x: '-50%',
            y:'50%',
            opacity:1,
            transition: {
                duration:0.5,
            }
        },
        exit: {
            // x:'-100vw',
            y:'50%',
            opacity:0,
            transition: {
                duration:0.5,
            }
        },
    }

    const [attributeText, setAttributeText] = useState(null);
    const [exampletext, setExampletext] = useState(null);


    return (
        <Overlay onClick={handleClose}>

            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="add-attribute-modal-container"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{width:'50%',height:'50%', top:'0%'}}
            >
                <motion.div 
                    className='modal-close-container'
                    whileHover={{scale:1.1}}
                    onClick={handleClose}
                >
                    <AiIcons.AiOutlineClose />
                </motion.div>
                <div className='attribute-modal-header-container'>
                    <div className='modal-header-elem'>Add a new Attribute</div>
                </div>
                <div className='attribute-modal-body-container'>
                    <div className='input-container'>
                        <label>Attribute</label  >
                        <input type="text" name="attribute-id" className='student-id-input' onChange={e => setAttributeText(e.target.value)}/>
                    </div>

                    <div className='input-container'>
                        <label>Example</label  >
                        <input type="text" name="example-id" className='student-id-input' onChange={e => setExampletext(e.target.value)}/>
                    </div>

                    <div className='add-attribute-submit-container'>
                        <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className='add-attribute-submit-button'
                                onClick={(e) => handleAddAttribute({attribute:attributeText, example: exampletext})}
                                >
                                SUBMIT
                        </motion.button>                        

                    </div>
                    {/* <div className='submit-id-button-container'>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className='submit-id-button'
                            onClick={(e) => handleSubmit({attribute:attributeText, example: exampletext})}
                            >
                            SUBMIT
                        </motion.button>
                    </div> */}
                </div>



            </motion.div>            
        </Overlay>
    )
}

export default AddAttributeModal
