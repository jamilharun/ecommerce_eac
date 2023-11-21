import React, { createContext, useContext, useEffect, useState } from 'react'
import CryptoJS from 'crypto-js';

import eaclogo from '../assets/eaclogo.png'
import arrowright from '../assets/arrowright.png'
import arrowleft from '../assets/arrowleft.png'
import eacExprLogo from '../assets/eac_express_logo.png'
import { Navigate } from 'react-router-dom'
import { userAuth } from '../components/Profile'
import LoginButton from '../components/Login'
import { PiUserCircleFill } from "react-icons/pi";
import { FaLock, FaUser } from "react-icons/fa";
import { client } from '../utils/sanity';
import { data } from 'autoprefixer';


export const AuthProvider = createContext({})

export default function Welcome() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [uid, setUid] = useState('');

  // const [error, setError] = useState('')

  const [fetchUser, SetFetchUser] = useState(null)
  const [userCreated, setUserCreated] = useState(null)

  const onLogin = (e) => {
    e.preventDefault()

    if (userName.endsWith('@eac.edu.ph')) {
      // console.log('correct' + userName);

      const hash = CryptoJS.SHA256(userName).toString();
      setUid(hash)

      // console.log(uid);
    }
  
    client.fetch(`*[_id == '${uid}']{
      _id,
      email,
      password
    }`)
    .then((data)=> {
      SetFetchUser(data)

      // console.log(fetchUser);
      // const { _id, email, password} = fetchUser
      
      // const userInfoArray = fetchUser.map

      const fetched = fetchUser[0]

      // console.log('the id: ' + fetched._id);
      // console.log('email: ' + fetched.email);
      // console.log('password: ' + fetched.password);
      
      if (fetched._id == uid) {
        console.log('uid match');
        
        if (fetched.password == password) {
          console.log('password match');
          
          return (
            <AuthProvider.Provider value={fetched}></AuthProvider.Provider>
          )
        }
      } else {
        console.log("login failed");
        // <Navigate to='home'/>
        handleSubmit()
      }
      }).catch(console.error)
    console.log(fetchUser);

  }

  const handleSubmit = async () => {
    
    if (userName.endsWith('@eac.edu.ph')) {
      console.log('correct' + userName);
    }

    const hash = CryptoJS.SHA256(userName).toString();
    setUid(hash)
    console.log(hash);
    
    if (!uid) { 
      console.log("its empty");
    }

    const doc = {
      _id: uid,
      _type: 'user',
      email: userName,
      password: password,
    };
    client.createIfNotExists(doc)
    .then(()  =>  { 
      console.log('successful')
      onLogin()})
    .catch(console.error)


  }
  

  
  return (
    <section className='w-screen h-screen  bg-red-LightApricot flex justify-center items-center'>
      <span className='top-0 absolute'><img src={arrowright} alt="" /></span>
        <div className='w-full h-full welcomePage grid grid-cols-3 gap-16 '>
          <div className='grid place-items-center'>
            <img src={eaclogo} alt="" className=''/>
          </div>
          <div className='grid place-items-center'>
            <img src={eacExprLogo} alt=""/>
          </div>
          
          <form 
            className='flex flex-col items-center justify-center'
            onSubmit={onLogin}>
            
            <div className='welcomeAuth'>
              <div className='bg-white rounded-full w-5 h-5 flex justify-center items-center mx-5'>
                <FaUser className='welcomeAuthIcon'/> 
              </div>
              <input 
                className='welcomeAuthInp' 
                type="email" 
                placeholder='User name' 
                required
                pattern="^[a-zA-Z0-9._%+-]+@eac\.edu\.ph$"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}/>
            </div>
            
            <div className='welcomeAuth'>
              <div className='bg-white rounded-full w-5 h-5 flex justify-center items-center mx-5'>
                <FaLock className='welcomeAuthIcon'/>
              </div>
              <input 
                className='welcomeAuthInp' 
                type="password"  
                placeholder='Password'
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            
            <button className='welcomebtn'><p className="welcomebtntxt">Login</p></button>            
            
          </form>
      </div>
      <span className='bottom-0 absolute'><img src={arrowleft} alt="" /></span>
    </section>
  )
}
