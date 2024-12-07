import React from 'react'
import { FileUpload } from './file-upload';

const Retrieve = () => {
  
  return (
    <div className='bg-white duration-1000 flex justify-center h-[80vh] py-2 items-center rounded-2xl'>
      <label className="form-control gap-2 w-[90%]">
  <div className="label">
    <span className="label-text">Enter the name of your file.</span>
  </div>
  <input type="text" placeholder="File Name" className="input bg-white border-blue-200  input-info w-full" />
  <input type="password" placeholder="Enter Password" className="input bg-white border-blue-200 text-black w-full" />

  <button className="btn bg-blue-500 border-0 text-white font-bold text-2xl hover:bg-blue-700">Retrieve</button>
    
      </label>
    </div>
  )
}

export default Retrieve