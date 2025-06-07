import React from 'react'
import Header from '../others/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-screen p-10'>
        <Header/>
        <div>
          <form action="">
            <h3>Task Title</h3>
            <input type="text" placeholder='Write Something you want to do...' />
            <h1>Description</h1>
            <textarea name="" id="" cols='30' rows='10'></textarea>
          </form>
        </div>
    </div>
  )
}

export default AdminDashboard