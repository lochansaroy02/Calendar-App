import React, { useState } from 'react'

const ResourceBar = ({ setResources }) => {
  const [ascii, setAscii] = React.useState(65)
  const lengthObj = {
    length: 15
  }
  setResources(lengthObj.length)

  return (
    <div className='absolute mt-14   w-fit '>
      {
        Array.from(lengthObj, (_, i) => String.fromCharCode(ascii + i - 1)).map((letter, index) => {
          return (
            <div key={index} className='bg-neutral-900 w-48 font-semibold  border-2 border-b-0  p-6  h-16    border-neutral-500  bg text-yellow-300 '>
              {index == 0 ? " " : ("Resource " + letter)}
            </div>
          )
        })
      }
    </div>
  )
}

export default ResourceBar