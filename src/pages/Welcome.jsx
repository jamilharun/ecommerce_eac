import React, { createContext, useContext, useEffect, useState } from 'react'
import CryptoJS from 'crypto-js';

import eaclogo from '../assets/eaclogo.png'
import arrowright from '../assets/arrowright.png'
import arrowleft from '../assets/arrowleft.png'
import eacExprLogo from '../assets/eac_express_logo.png'
import { Navigate } from 'react-router-dom'

import { FaLock, FaUser } from "react-icons/fa";
import { client } from '../utils/sanity';
import { AuthProvider } from '../components/UserProvider';



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
  // const [fetchingData, getFetchingData] = useState(null)


  const {userData, setUserData} = useContext(AuthProvider);

  const onLogin = async (e) => {
    e.preventDefault()


    console.log('now saveed data: ' + userData);
    

    const acceptableDomain = '@eac.edu.ph';

    if (userName.includes(acceptableDomain)) {
      console.log('correct domain');
      
      const hash = CryptoJS.SHA256(userName).toString();
      setUid(hash)

      // console.log(uid);
      
      try {
        client.fetch(`*[_id == '${uid}']{
          _id,
          email,
          password
        }`)
        .then((data)=> {
          SetFetchUser(data)
          // console.log(fetchUser);
  
        }).catch(console.error)
      } catch (error) {
        console.log(error);
      }
        
      const fetched = fetchUser[0]
      
      // console.log('fetched'+ fetchUser[0]);
              
        if (Array.isArray(fetchUser) && fetchUser.length  === 0) {
          console.warn("login failed"); 
          handleSubmit();
        } else {
          console.log('may data');
          setUserData(fetched)
        }

    }else{
      console.log('wrong domain');
    }
  }

  // ito create acc function
  const handleSubmit = () => {
    
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
      console.log('creating account successful')
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
