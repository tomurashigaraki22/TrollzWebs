import React from 'react'

const ImageTile = ({ProductName}) => {
  return (
    <div className='flex flex-col gap-2 items-center'>
<div className="images w-[150px] h-[150px] bg-gray-200"></div>
<p>{ProductName}</p>
    </div>
  )
}



export default ImageTile