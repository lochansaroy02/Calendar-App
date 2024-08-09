import React, { useRef, useState } from 'react';
import { getRandomColor } from './Utils/colorGenerator';
import ResizableDiv from './ResizableDiv';

const Grid = ({ resources }) => {
    
    const color = getRandomColor();
    const [clickedCells, setClickedCells] = useState({});
    const [width, setWidth] = useState(100);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartX = useRef(0);
    const initialWidth = useRef(width);

    const handleCellClick = (outerIndex, innerIndex) => {

        setClickedCells(prevState => ({
            ...prevState,
            [`${outerIndex}-${innerIndex}`]: true,
        }));
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        dragStartX.current = e.clientX;
        initialWidth.current = width;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const deltaX = e.clientX - dragStartX.current;
            setWidth(initialWidth.current + deltaX);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <div className='flex flex-col ml-48 pt-[55px]'>
            <div className='overflow-x-auto'>
                <div className='overflow-x-auto overflow-y-hidden'>
                    <div className='flex flex-wrap'>
                        {Array.from({ length: resources }, (_, outerIndex) => (
                            <div key={outerIndex} className='flex'>
                                {Array.from({ length: 31 }, (_, innerIndex) => (
                                    <div
                                        onClick={() => handleCellClick(outerIndex, innerIndex)}
                                        key={innerIndex}
                                        id='box'
                                        className='bg-neutral-900 w-28 h-16 border-2 px-1 flex items-center relative border-neutral-200 text-yellow-300 text-center'
                                    >
                                        {outerIndex === 0 ? (
                                            innerIndex + "  " + daysOfWeek[innerIndex % 7]
                                        ) : (
                                            <>
                                                {clickedCells[`${outerIndex}-${innerIndex}`] && (
                                                    <ResizableDiv />)}
                                            </>
                                        )}
                                    </div>
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
