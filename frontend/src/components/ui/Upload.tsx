"use client"
import React, { useRef, useState } from 'react'
import { FileUpload } from './file-upload';
import { PinataSDK } from "pinata-web3";


const Upload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const fileRef=useRef();

  const pinata = new PinataSDK({
    pinataJwt: process.env.PINATA_JWT!,
    pinataGateway: `${process.env.NEXT_PUBLIC_GATEWAY_URL}`,
  });
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  const uploadFile = async () => {
    try {
      // console.log(process.env.NEXT_PUBLIC_PINATA_JWT);
      const buffer = await files[0].arrayBuffer();
    // each entry of array should contain 8 bits
      const bytes = new Uint8Array(buffer);
      const text = "Hello World!";
    // const blob = new Blob([text], { type: "text/plain" });
    // const blob = new Blob(files[0], { type: files.type });
    // const file = new File([blob], "hello-world.txt");
    const data = new FormData();
      data.append("file", files[0]);
      console.log(data);
      
      
      
      
      const request = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
            
          },
          body: data,
        }
      );
      const response = await request.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  
  }
  
  
 
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
      <FileUpload ref={fileRef} onChange={handleFileUpload} />
        </div>
        <div className='flex lg:flex-row flex-col gap-2'>
        <input type="password" placeholder="Password" className="input bg-white border-blue-200 text-black w-full" />
        <input type="password" placeholder="Confirm Password" className="input bg-white border-blue-200 text-black w-full" />

        </div>
        <button className="btn bg-blue-500 border-0 text-white font-bold text-2xl hover:bg-blue-700" onClick={uploadFile}>Upload</button>
      </label>
    </div>
  )
}

export default Upload