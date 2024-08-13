import React from 'react'

const ResourceBar = ({ setResources, }) => {
  const [ascii, setAscii] = React.useState(65)
  const [resourceLength, setResourceLength] = React.useState(10)
  const lengthObj = {
    length: resourceLength
  }


  setResources(lengthObj.length)



  return (
    <div className='absolute mt-14   w-fit '>
      {
        Array.from(lengthObj, (_, i) => String.fromCharCode(ascii + i - 1)).map((letter, index,) => {
          return (
            <div key={index}
              style={{
                height: index === 0 ? '47px' : '64px',
              }}
              className='bg-neutral-900 w-48 font-semibold  border-2 border-b-0  p-6    border-neutral-500  bg text-yellow-300 '>
              {index == 0 ? " " : ("Resource " + letter)}
            </div>
          )
        })
      }
      <div onClick={() => {
        setResourceLength(resourceLength + 1)
        setAscii(ascii + 1)
      }} className='bg-neutral-900 flex  absolute bottom-2 w-48 h-14  cursor-pointer font-semibold  border-2 border-b-0  py-2  border-neutral-500  bg text-yellow-300'>
        <h1 className='ml-6'>Add</h1>
      </div>
    </div>
  )
}

export default ResourceBar