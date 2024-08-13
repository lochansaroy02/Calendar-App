import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { getRandomColor } from './Utils/colorGenerator';

const ResizableDiv = ({ inner, outer }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [pressed, setPressed] = useState(false)
  const [color, setColor] = useState(getRandomColor());
  const [isHovered, setIsHovered] = useState(false);
  const [divWidth, setDivWidth] = useState(96);

  const refBox = useRef(null);
  const refLeft = useRef(null);
  const refRight = useRef(null);
  const minWidth = 96;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


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
      setIsResizing(false)
    };

    const onMouseDownLeft = (e) => {
      setIsResizing(true)
      xCord = e.clientX;
      document.addEventListener('mousemove', onMouseMoveLeft);
      document.addEventListener('mouseup', onMouseUpLeft);
    };


    const onMouseMoveRight = (e) => {
      const dx = e.clientX - xCord;
      console.log(dx)
      if (width + dx >= minWidth) {
        width += dx;
        xCord = e.clientX;
        resizableBox.style.width = `${width}px`;
        setDivWidth(width)
      }
    };

    const onMouseUpRight = () => {
      document.removeEventListener('mousemove', onMouseMoveRight);
      setIsResizing(false)
    };

    const onMouseDownRight = (e) => {
      setIsResizing(true)
      xCord = e.clientX;
      document.addEventListener('mousemove', onMouseMoveRight);
      document.addEventListener('mouseup', onMouseUpRight);
    };

    const resizeLeft = refLeft.current;
    const resizeRight = refRight.current;
    resizeLeft.addEventListener('mousedown', onMouseDownLeft);
    resizeRight.addEventListener('mousedown', onMouseDownRight);

    return () => {
      resizeLeft.removeEventListener('mousedown', onMouseDownLeft);
      resizeRight.removeEventListener('mousedown', onMouseDownRight);
    };
  }, []);

  return (



    <Draggable disabled={isResizing} >
      <div className="relative z-30 ">
        <div ref={refBox}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}

          style={{
            width: "96px",
            backgroundColor: isHovered ? color.lighterColor : color.originalColor,
            border: isHovered ? "2px solid white" : "2px solid transparent",
            transition: "background-color 0.2s, border 0.3s"
          }} onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} className=" h-full z-30  p-1  cursor-pointer  rounded-lg relative">


          <div ref={refLeft} className="absolute left-0  rounded-s-lg top-0 h-12    w-1   cursor-ew-resize"> </div>

          <div className=' text-white font-semibold flex flex-col items-start pl-2 '>
            <h1>Event </h1>
            <h1 className='text-xs'>  {divWidth < 100 ? "12 AM.." : "12AM - 12PM"}</h1>
          </div>

          <div ref={refRight} className="absolute right-0  top-0 h-12 w-1 rounded-e-lg  cursor-ew-resize"></div>
        </div>
      </div >
    </Draggable>
  );
};

export default ResizableDiv;
