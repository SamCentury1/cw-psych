import React from 'react'

import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

// import { Item } from "./Item";

import './Attributes.css'
import '../AttributeCard/AttributeCard.css'







const Attributes = ({listItems, updateAttributeRanking, state}) => {

    // const finalSpaceCharacters = [
    //     {
    //       id: 'gary',
    //       name: 'Gary Goodspeed',
    //     },
    //     {
    //       id: 'cato',
    //       name: 'Little Cato',
    //     },
    //     {
    //       id: 'kvn',
    //       name: 'KVN',
    //     },
    //     {
    //       id: 'mooncake',
    //       name: 'Mooncake',
    //     },
    //     {
    //       id: 'quinn',
    //       name: 'Quinn Ergon',
    //     }
    //   ]

    // const [characters, updateCharacters] = useState(listItems);

    function handleOnDragEnd(result) {
        if (!result.destination) return;
    
        const items = Array.from(listItems);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        // updateCharacters(items);
        console.log(items)
        updateAttributeRanking(items)
      }

      return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="listItems">
            {(provided) => (
              <div className='question-container' {...provided.droppableProps} ref={provided.innerRef}>
                {listItems.map((data, index) => {
                  return (
                    <Draggable key={data.key} draggableId={data.key} index={index} id={data.key}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className='question-card'>
                            {/* <div className='question-card'> */}
                                <div className='question-key'>{index+1}</div>
                                <div className='question-body'>{data.body}</div>
                                {/* <div className='question-input-container'>
                                    <input 
                                        type="number" 
                                        className='question-input' 
                                        max={100}
                                        min={0}
                                        onChange={e => (e.target.value)}/>
                                </div> */}
                                {/* <div className='card-share'></div> */}
                            {/* </div> */}

                          {/* <div className="characters-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            { name }
                          </p> */}
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
      )

}

export default Attributes
