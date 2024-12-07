"use client"
import React, { useState } from 'react'
import { FileUpload } from './file-upload';

const Upload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };
 
  return (
    <div className='bg-white duration-1000 flex flex-col items-center justify-evenly h-[80vh] py-2 rounded-2xl'>
      <label className="form-control gap-2 w-[90%]">
  <div className="label">
    <span className="label-text">Give a name to your file.</span>
    <span className="label-text-alt">Something Catchy</span>
  </div>
  <input type="text" placeholder="File Name" className="input bg-white border-blue-200  input-info w-full" />
  
  {/* <div className="w-full max-w-4xl mx-auto min-h-96 border border-dased bg-blue-200 border-neutral-200  rounded-lg"> */}
  <div className="w-full max-w-4xl mx-auto h-50 border border-dased bg-blue-200 border-neutral-200  rounded-lg">
      <FileUpload onChange={handleFileUpload} />
        </div>
        <div className='flex lg:flex-row flex-col gap-2'>
        <input type="password" placeholder="Password" className="input bg-white border-blue-200 text-black w-full" />
        <input type="password" placeholder="Confirm Password" className="input bg-white border-blue-200 text-black w-full" />

        </div>
        <button className="btn bg-blue-500 border-0 text-white font-bold text-2xl hover:bg-blue-700">Upload</button>
      </label>
    </div>
  )
}

export default Upload