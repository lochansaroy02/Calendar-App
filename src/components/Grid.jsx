import React, { useState } from 'react';
import ResizableDiv from './ResizableDiv';

const Grid = ({ resources }) => {
    const date = new Date();

    let currentDate = parseInt(String(date.getDate()).padStart(2, '0'));
    console.log(currentDate)


    const [clickedCells, setClickedCells] = useState({});
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const handleCellClick = (outerIndex, innerIndex) => {

        setClickedCells(prevState => ({
            ...prevState,
            [`${outerIndex}-${innerIndex}`]: true,
        }));
    };



    return (
        <div className='flex flex-col  ml-48 pt-[55px]'>
            <div className='overflow-x-auto'>
                <div className='overflow-x-auto overflow-y-hidden'>
                    <div className='flex flex-wrap'>
                        {Array.from({ length: resources }, (_, outerIndex) => (
                            <div key={outerIndex} className='flex'>
                                {Array.from({ length: 31 }, (_, innerIndex) => (
                                    <div
                                        onDoubleClick={() => handleCellClick(outerIndex, innerIndex)}
                                        key={innerIndex}
                                        style={{
                                            height: outerIndex === 0 ? '48px' : '64px',
                                        }}
                                        id='box'
                                        className='bg-neutral-900 w-28    border-2 px-1 flex items-center justify-center relative border-neutral-200 text-neutral-100 text-center'
                                    >
                                        {outerIndex === 0 ? (
                                            <h1 className={`${innerIndex === currentDate - 1 ? 'bg-yellow-700 px-2 rounded-lg ' : ''}`}> {innerIndex + 1 + "   " + daysOfWeek[innerIndex % 7]}</h1>

                                        ) : (
                                            <>
                                                {clickedCells[`${outerIndex}-${innerIndex}`] && (
                                                    <ResizableDiv inner={innerIndex} outer={outerIndex} />)}
                                            </>
                                        )}


                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Grid;
