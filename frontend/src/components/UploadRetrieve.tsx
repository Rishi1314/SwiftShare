"use client"
import React, { useState } from 'react'
import Upload from './ui/Upload'
import Retrieve from './ui/Retrieve'

const UploadRetrieve = () => {
    const [uploadBut, setuploadBut] = useState(true)
    const [retrieveBut, setretrieveBut] = useState(false)
    const handleClick = (e) => {
        const active = e.currentTarget.textContent
        if (active === "Upload") {
            setretrieveBut(false)
            setuploadBut(true)
        } else {
            setuploadBut(false)
            setretrieveBut(true)
        }

    }
    return (
        <div className='w-[50vw] gap-2 flex flex-col bg-blue-400 rounded-2xl p-2 text-white'>
            <div role="tablist" className="tabs flex w-[100%] gap-2 tabs-lg">
                <a role="tab" onClick={(e) => { handleClick(e) }} className={`tab duration-200 rounded-2xl  ${uploadBut ? "tab-active w-[150%] shadow-lg  text-blue-400 bg-white " : " bg-blue-200 w-[50%] text-white"}`}>Upload</a>
                <a role="tab" onClick={(e) => { handleClick(e) }} className={`tab duration-200 rounded-2xl ${retrieveBut ? "tab-active w-[150%] shadow-lg  text-blue-400 bg-white " : " bg-blue-200 w-[50%] text-white"}`}>Retrieve</a>
            </div>
            {uploadBut ? <Upload /> : <Retrieve />}
        </div>
    )
}

export default UploadRetrieve