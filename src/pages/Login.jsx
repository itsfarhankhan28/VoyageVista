// Login.js

import { useState } from 'react';
import { auth } from '../firebaseConfig/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const [email, setEmail] = useState()
    const [password,setPassword] = useState()

    const HandleOnChange = (emailVal,passwordVal)=>{
        signInWithEmailAndPassword(auth,emailVal,passwordVal).then(()=>{
            console.log("Signed In successfully")
        }).catch((error)=>{
            const errorCode = error.code
            console.log(errorCode)
            const errorMessage = error.message
            console.log(errorMessage)
        })
    }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 text-dark flex flex-col gap-5">
        <div className='text-center'>
          <h1 className='text-black font-semibold text-5xl'>Login</h1>
        </div>
        <div className='flex flex-col'>
          <div className="">
            <label className="block text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={()=>HandleOnChange(email,password)}
            className="text-black border border-black font-bold py-2 px-6 rounded-xl focus:outline-none focus:shadow-outline"
            type="button"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
