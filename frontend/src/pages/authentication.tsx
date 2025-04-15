import React, { useState } from 'react'
import "@/app/globals.css";
import SignIn from '@/components/ui/SignIn';
import SignUp from '@/components/ui/SignUp';


const authentication = () => {
    const [login, setLogin] = useState(true)
  return (
      <div className=' min-h-[100vh] w-[100%] bg-white flex justify-center items-center flex-col overflow-hidden'>
            {login ? <SignIn login={login} setLogin={setLogin} /> : <SignUp />}
          
    </div>
  )
}

export default authentication