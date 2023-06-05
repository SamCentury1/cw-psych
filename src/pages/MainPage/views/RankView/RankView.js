import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';
import "../views.css"
import "./RankView.css"

const RankView = ({handleSubmit, instructions, state, updateAttributeRanking, handleRankAttributes,handleGoBack}) => {

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

    // const [listItems, setListItems] = useState(state.confirmed_att)

    function handleOnDragEnd(result) {
        if (!result.destination) return;
    
        const items = Array.from(state.confirmed_attributes);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        // updateCharacters(items);
        console.log(items)
        updateAttributeRanking(items)
      }

    //   console.log(state)

      const [nextPage, setNextPage] = useState(null)


    return (
        // <Overlay >


            
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="modal-container"
                    variants={dropIn}
                    initial={state.lastPage === 2 ? "hidden" : "exit"}
                    animate="visible"
                    exit={nextPage === 4 ? "exit" : "hidden"}
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
                    <div className='modal-body-container'>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="listItems">
                            {(provided) => (
                            <div className='rank-attribute-container' {...provided.droppableProps} ref={provided.innerRef}>
                                {state.confirmed_attributes.map((data, index) => {
                                return (
                                    <Draggable key={data.key} draggableId={data.key} index={index} id={data.key}>
                                    {(provided) => (
                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className='rank-attribute-card'>
                                                <div className='rank-attribute-key'>{index+1}</div>
                                                <div className='rank-attribute-body'>{data.body}</div>

                                        </div>
                                    )}
                                    </Draggable>
                                );
                                })}
                                {provided.placeholder}
                            </div>
                            )}
                        </Droppable>
                        </DragDropContext>                        

                    </div>

                    <div className='modal-controls-layer'>
                        <motion.div 
                            className='controls-button-back'
                            style={{y:'50%', top:'-10%'}}
                            whileHover={{backgroundColor: '#ffffff' }}
                            onClick={() => handleGoBack(2)}
                        >
                            Back
                        </motion.div>

                        <ProgressBar state={state} />
                        <motion.div 
                            className='controls-button-next'
                            style={{y:'50%', top:'-10%'}}
                            whileHover={{backgroundColor: '#643aa7' }}
                            onClick={() => {handleRankAttributes(); setNextPage(4)}}
                        >
                            Confirm
                        </motion.div>
                    </div>

                </motion.div>   
       
        // </Overlay>
    )
}

export default RankView
