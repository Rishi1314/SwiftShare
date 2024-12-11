import React, { useRef } from 'react'
import { FileUpload } from './file-upload';
import { PinataSDK } from 'pinata-web3';

const Retrieve = () => {
  const link = "https://purple-acceptable-alpaca-502.mypinata.cloud/ipfs/"
  const fileName = useRef();
  const pinata = new PinataSDK({
    pinataJwt: process.env.NEXT_PUBLIC_PINATA_JWT!,
    pinataGateway: "purple-acceptable-alpaca-502.mypinata.cloud",
  });
  const handleSubmit = async () => {
    console.log(fileName.current.value);
    window.open("https://stackoverflow.com","_blank");

    
  }
  
  return (
    <div className='bg-white duration-1000 flex justify-center h-[80vh] py-2 items-center rounded-2xl'>
      <label className="form-control gap-2 w-[90%]">
  <div className="label">
    <span className="label-text">Enter the name of your file.</span>
  </div>
  <input ref={fileName} type="text" placeholder="File Name" className="input text-black bg-white border-blue-200  input-info w-full" />
  <input type="password" placeholder="Enter Password" className="input bg-white border-blue-200 text-black w-full" />

  <button onClick={handleSubmit} className="btn bg-blue-500 border-0 text-white font-bold text-2xl hover:bg-blue-700">Retrieve</button>
    
      </label>
    </div>
  )
}

export default Retrieve