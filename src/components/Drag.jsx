import React from 'react'
import Draggable, { DraggableCore } from 'react-draggable'
// ES6 format

const Drag = () => {
    return (
        <Draggable handle='.handle' >
            <div className="bg-red-500 w-1/2 ">
                <h1>I am a draggable element !</h1>
            </div>
        </Draggable>
    )
}

export default Drag