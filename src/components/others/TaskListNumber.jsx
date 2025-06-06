import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10  screen justify-between gap-5'>
     <div className='rounded-xl w-[45%] py-9 px-6 h-40 bg-purple-400'>
     <h2 className='text-3xl font-semibold'>0</h2>
     <h3 className='text-xl font-medium'>New Tasks</h3>
     </div>
     <div className='rounded-xl w-[45%] py-9 px-6 h-40 bg-blue-400'>
     <h2 className='text-3xl font-semibold'>3</h2>
     <h3 className='text-xl font-medium'>Completed Tasks</h3>
     </div>
     <div className='rounded-xl w-[45%] py-9 px-6 h-40 bg-green-400'>
     <h2 className='text-3xl font-semibold'>0</h2>
     <h3 className='text-xl font-medium'>Accepted Tasks</h3>
     </div>
     <div className='rounded-xl w-[45%] py-9 px-6 h-40 bg-yellow-300'>
     <h2 className='text-3xl font-semibold'>1</h2>
     <h3 className='text-xl font-medium'>Failed Task</h3>
     </div>
    </div>
  )
}

export default TaskListNumber;