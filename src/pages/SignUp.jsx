import { useState } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebaseConfig/firebase';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    // const auth = getAuth()
    const HandleOnSubmit = (emailVal,passwordVal)=>{
        createUserWithEmailAndPassword(auth,emailVal,passwordVal).then((userCredendial)=>{
            const user = userCredendial.user
            console.log(user)
        }).catch((error)=>{
            const errorCode = error.code;
            console.log(errorCode)
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }   

  return (
    <div className="min-h-screen flex items-center justify-center font-main-font">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 text-dark flex flex-col gap-5">
        <div className='text-center'>
          <h1 className='text-black font-semibold text-5xl'>Signup</h1>
        </div>
        <div className='flex flex-col'>
          <div className="">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
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
        <div className='text-center'>
          <h1 className='text-black'>Already registered? <Link to='/login' className='underline'>Login</Link></h1>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={()=>HandleOnSubmit(email,password)}
            className="text-black border border-black font-bold py-2 px-6 rounded-xl focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
