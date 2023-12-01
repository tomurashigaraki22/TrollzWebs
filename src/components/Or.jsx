import React from 'react'

const Or = () => {
  return (
    <div className='flex flex-col gap-5'>
        <div className='flex  gap-5 items-center justify-center w-[300px] mt-5'>
            <hr className='w-[100px] '/>
            <p className='text-sm'>Or</p>
            <hr  className='w-[100px]'/>
        </div>
       <div>
       <button className='w-[300px] border-[1px] h-[40px] flex items-center justify-center bg-transparent text-xs'>Continue with Google</button>
        <button className='w-[300px] border-[1px] h-[40px] flex items-center justify-center bg-transparent text-xs mt-3'>Continue with Facebook</button>
       </div>
    </div>
  )
}

export default Or