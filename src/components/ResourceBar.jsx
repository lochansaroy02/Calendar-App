import React from 'react'

const ResourceBar = ({ setResources, }) => {
  const [ascii, setAscii] = React.useState(65)
  const lengthObj = {
    length: 15
  }


  let colorObj = [
    {

      value: 1,
      color: 'red',
      colorCode: '#FF0000'
    }, {
      value: 2,
      color: 'blue',
      colorCode: '#0000FF'

    },
    {
      value: 3,
      color: 'green',
      colorCode: '#008000'

    },
    {
      value: 4,
      color: 'yellow',
      colorCode: '#FFFF00'

    },
    {
      value: 5,
      color: 'orange',
      colorCode: '#FFA500'

    },
    {
      value: 6,
      color: 'purple',
      colorCode: '#800080'

    },
    {
      value: 7,
      color: 'pink',
      colorCode: '#FFC0CB'

    },
    {
      value: 8,
      color: 'brown',
      colorCode: '#A52A2A'

    },
    {
      value: 9,
      color: 'black',
      colorCode: '#000000'

    },
    {
      value: 10,
      color: 'white',
      colorCode: '#FFFFFF'

    },
    {
      value: 11,
      color: 'grey',
      colorCode: '#808080'

    },
    {
      value: 12,
      color: 'cyan',
      colorCode: '#00FFFF'

    },
    {
      value: 13,
      color: 'magenta',
      colorCode: '#FF00FF'

    },
    {
      value: 14,
      color: 'lightgreen',
      colorCode: '#90EE90'

    },
    {
      value: 15,
      color: 'lightblue',
      colorCode: '#ADD8E6'

    },
    {
      value: 16,
      color: 'lightyellow',
      colorCode: '#FFFFE0'

    },
    {
      value: 17,
      color: 'lightorange',
      colorCode: '#FFD700'

    },
    {
      value: 18,
      color: 'lightpurple',
      colorCode: '#9370DB'

    },
    {
      value: 19,
      color: 'lightpink',
      colorCode: '#FFB6C1'

    },
    {
      value: 20,
      color: 'lightbrown',
      colorCode: '#D2B48C'

    },
    {
      value: 21,
      color: 'lightblack',
      colorCode: '#696969'

    },
    {
      value: 22,
      color: 'lightwhite',
      colorCode: '#F5F5F5'
    }
  ]
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
    </div>
  )
}

export default ResourceBar