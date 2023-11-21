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

// this will be our user info provider
// meaning. ito gagamitin natin para ipasa ang user info sa mga pages
export const AuthProvider = createContext({})

// by default ito ang first function na i rurun ng page natin pa inopen to
export default function Welcome() {

  // tawag dito mga react hooks
  // mas madalas namin to ginagamit to nag babago yung data ng variable
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [uid, setUid] = useState('');

  // const [error, setError] = useState('')
  
  const [fetchUser, SetFetchUser] = useState(null)
  const [userCreated, setUserCreated] = useState(null)


  const onLogin = (e) => {
    // ang purpose neto is para di mag reload ang page pag nag susubmit
    // a;so used for debugging
    e.preventDefault()

    // ang ginagawa neto is. validation para ead email domain lang tatangapin
    if (userName.endsWith('@eac.edu.ph')) {
      console.log('correct' + userName);

      // cryptoJs. para ito sa pag hahash ng inputed email
      // why? dahil this will serve as unique ID sa pag pasa ng data sa Sanity.io
      const hash = CryptoJS.SHA256(userName).toString();

      // this will just give value to "Uid" sa taas 
      setUid(hash)

      // console.log(uid);
    }
  
    // ang ginagawa neto is para mag fetch ng data galing sanity
    // ni fetch satin dito ang Uid na nag eexist sa database
    client.fetch(`*[_id == '${uid}']{
      _id,
      email,
      password
    }`)
    .then((data)=> {
      SetFetchUser(data)

      // pag na fetch na. isasave sa fetched para maging array
      const fetched = fetchUser[0]

      // console.log('the id: ' + fetched._id);
      // console.log('email: ' + fetched.email);
      // console.log('password: ' + fetched.password);
      
      // after gawing array
      // i cocompare naman natin ang existing Uid sa current Uid
      if (fetched._id == uid) {
        console.log('uid match');
        
        // dito. comparing password to password naman 
        if (fetched.password == password) {
          console.log('password match');

          // ang dinagawa neto is i redirect tayo sa home
          <Navigate to='home'/>
          return (
            // dito mag paparse lang tayo ng data into Authprovider
            <AuthProvider.Provider value={fetched}></AuthProvider.Provider>
          )
        }
      } else {
        // else failed
        console.log("login failed");

        // then this rull run create account function
        // nakalimutan ko palitan name 
        handleSubmit()
      }
      }).catch(console.error)
    console.log(fetchUser);

  }

  // ito create acc function
  const handleSubmit = async () => {
    
    // checheck nya naamn ulit kung naka eac email
    if (userName.endsWith('@eac.edu.ph')) {
      console.log('correct' + userName);
    }

    // dito i hahash nga naman yung Uid
    const hash = CryptoJS.SHA256(userName).toString();
    setUid(hash)
    console.log(hash);
    
    // this will check if yung Uid is mas laman or wala
    if (!uid) { 
      console.log("its empty");
    }

    // ito dito natin i reready mga data natin before ipasok sa database 
    const doc = {
      _id: uid,
      _type: 'user',
      email: userName,
      password: password,
    };

    // kung ready na. papasok na natin sha sa DB
    client.createIfNotExists(doc)
    .then(()  =>  { 
      console.log('successful')
      onLogin()})           // this will once again i rurun yung login function para maka lagin
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
