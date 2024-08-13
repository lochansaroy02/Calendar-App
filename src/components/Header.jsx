import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Header = () => {



    const [popUp, setPopUp] = useState(false);

    const handlePopUp = () => {
        setPopUp(!true)

    }


    const date = new Date();
    // const thisMonth = date.getMonth()
    const thisMonth = date.toLocaleString('default', { month: 'long' });
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    return (
        <div className='fixed   z-40 w-full '>
            <div onClick={handlePopUp} className='bg-neutral-800 border-b  border-neutral-500  flex justify-between h-14 items-center pl-12 '>
                <div className=''>
                    <h1   className='text-xl cursor-pointer font-semibold text-yellow-300 '>
                        {thisMonth}
                        {popUp && <Calendar />}
                    </h1>
                </div>
                <div className='flex px-12 gap-6 text-yellow-500    ' >
                    <button>prev</button>
                    <h2>
                        date
                    </h2>
                    <button>next</button>
                </div>
            </div>

        </div>
    )
}

export default Header