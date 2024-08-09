import React, { useEffect, useRef, useState } from 'react';
import { getRandomColor } from './Utils/colorGenerator';

const ResizableDiv = () => {

  const [color, setColor] = useState(getRandomColor());
  const [divWidth, setDivWidth] = useState(96);

  const refBox = useRef(null);
  const refLeft = useRef(null);
  const refRight = useRef(null);
  const minWidth = 96;

  useEffect(() => {

    const resizableBox = refBox.current;
    const style = window.getComputedStyle(resizableBox);
    let width = parseInt(style.width, 10);
    let xCord = 0;

    // LEFT RESIZE
    const onMouseMoveLeft = (e) => {
      const dx = xCord - e.clientX;
      if (width + dx >= minWidth) {
        width += dx;
        xCord = e.clientX;
        resizableBox.style.width = `${width}px`;
        resizableBox.style.left = `${resizableBox.offsetLeft - dx}px`;
      }
    };

    const onMouseUpLeft = () => {
      document.removeEventListener('mousemove', onMouseMoveLeft);
    };

    const onMouseDownLeft = (e) => {
      xCord = e.clientX;
      document.addEventListener('mousemove', onMouseMoveLeft);
      document.addEventListener('mouseup', onMouseUpLeft);
    };

    // RIGHT RESIZE
    const onMouseMoveRight = (e) => {
      const dx = e.clientX - xCord;
      if (width + dx >= minWidth) {
        width += dx;
        xCord = e.clientX;
        resizableBox.style.width = `${width}px`;
        setDivWidth(width)
        // console.log(width)
      }
    };

    const onMouseUpRight = () => {
      document.removeEventListener('mousemove', onMouseMoveRight);
    };

    const onMouseDownRight = (e) => {
      xCord = e.clientX;
      document.addEventListener('mousemove', onMouseMoveRight);
      document.addEventListener('mouseup', onMouseUpRight);
    };

    const resizeLeft = refLeft.current;
    resizeLeft.addEventListener('mousedown', onMouseDownLeft);
    const resizeRight = refRight.current;
    resizeRight.addEventListener('mousedown', onMouseDownRight);

    return () => {
      resizeLeft.removeEventListener('mousedown', onMouseDownLeft);
      resizeRight.removeEventListener('mousedown', onMouseDownRight);
    };
  }, []);

  return (
    <div className="relative">
      <div ref={refBox} style={{
        backgroundColor: color,
        width: "96px",

      }} className=" h-12  z-40    rounded-lg relative">

        <div ref={refLeft} className="absolute left-1 top-0 h-14  w-1   cursor-ew-resize"> </div>

        <div className=' text-white  '>
          <h1>Event </h1>

          <h1 className='text-xs'>  {divWidth < 100 ? "12 AM.." : "12AM - 12PM"}</h1>

        </div>
        <div ref={refRight} className="absolute right-1 top-0 h-14 w-1 rounded-e-lg  cursor-ew-resize"></div>
      </div>
    </div>
  );
};

export default ResizableDiv;
