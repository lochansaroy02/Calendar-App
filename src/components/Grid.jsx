import React, { useRef, useState } from 'react';

const Grid = ({ resources }) => {
    const [eventState, setEventState] = useState(true);
    const [stateArray, setStateArray] = useState([]);
    const [inner, setInner] = useState(0);
    const [outer, setOuter] = useState(0);
    const [width, setWidth] = useState(500);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartX = useRef(0);
    const initialWidth = useRef(width);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        dragStartX.current = e.clientX;
        initialWidth.current = width;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }
    const handleMouseMove = () => {
        if (isDragging) {
            const deltaX = e.clientX - dragStartX.current;
            setWidth(initialWidth.current + deltaX);
        }
    }
    const handleMouseUp = () => {
        setIsDragging(false)
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }


    const handleDrag = () => {
        setWidth(width - 1)
    }
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];



    return (
        <div className='flex flex-col ml-48 pt-[55px]'>
            <div className='overflow-x-auto'>
                <div className='overflow-x-auto overflow-y-hidden'>
                    <div className='flex flex-wrap'>
                        {Array.from({ length: resources }, (_, outerIndex) => (
                            <div key={outerIndex} className='flex'>
                                {Array.from({ length: 31 }, (_, innerIndex) => (
                                    outerIndex === 0 ? (
                                        <div onClick={() => {
                                            setInner(innerIndex);
                                        }} key={innerIndex} id='box' className='bg-neutral-900 w-28 h-16 border-2 p-6 sticky border-neutral-200 text-yellow-300 text-center'>
                                            {innerIndex + "  " + daysOfWeek[innerIndex % 7]}
                                        </div>
                                    ) : (
                                        <div onClick={() => {
                                            setOuter(outerIndex);
                                            setInner(innerIndex);
                                            setEventState(eventState);
                                            setStateArray((prevArray) => [...prevArray, { innerIndex, outerIndex }]);
                                            console.log(stateArray);

                                        }} key={innerIndex} id='box' className='bg-neutral-900 w-28 h-16 border-2  px-1  flex items-center  relative border-neutral-200 text-yellow-300 text-center'>


                                            {stateArray.map((item) => {
                                                return eventState && inner == item.innerIndex && outer == outerIndex && (
                                                    <div
                                                        className="bg-green-900 cursor-e-resize absolute rounded-lg hover:border hover:border-green-200 h-14 z-40 flex  pl-2"
                                                        id="eventDiv"
                                                        style={{ width: `${width}px` }}
                                                        onDrag={handleDrag}


                                                    >
                                                        <div>
                                                            <h1 className="text-sm">New event</h1>
                                                            <h1 className="text-sm">12AM- 12 PM</h1>
                                                        </div>
                                                    </div>
                                                )
                                            })}


                                        </div>
                                    )
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grid;
