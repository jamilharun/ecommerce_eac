import React, { useState } from 'react'
import CryptoJS from 'crypto-js';

import eaclogo from '../assets/eaclogo.png'
import arrowright from '../assets/arrowright.png'
import arrowleft from '../assets/arrowleft.png'
import eacExprLogo from '../assets/eac_express_logo.png'

import { FaLock, FaUser } from "react-icons/fa";
import { client } from '../utils/sanity';
import { useUser } from '../utils/user';
import { Navigate } from 'react-router-dom';



// by default ito ang first function na i rurun ng page natin pa inopen to
export default function Welcome() {

  // tawag dito mga react hooks
  // mas madalas namin to ginagamit to nag babago yung data ng variable
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [uid, setUid] = useState(null);

  const [fetched, setFetched] = useState()
  
  const [fetchUser, SetFetchUser] = useState(null)
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(false)

  // const {userData, loginAuth} = useContext(AuthProvider);
  
  const {userData, loginAuth, loggedIn} = useUser()

  const onLogin = async (e) => {
    e.preventDefault()
    
    

    const acceptableDomain = '@eac.edu.ph';
    
    const hashGenerate = async () => {
      
      if (!userName.includes(acceptableDomain)) {
        return setUid(null)
      }else{
        try {
          setLoading(true)
          const hash = await CryptoJS.SHA256(userName).toString();
          setUid(hash)
          
          setEvent('click again')
          
          setLoading(false)

        } catch (error) {
          console.error(error);
        }
        fetchingData()
      }
    }

    
    const fetchingData = async () => {
      try {
        setLoading(true)

        const data = await client.fetch(`*[_id == '${uid}']{
          _id,
          email,
          password
        }`);
        SetFetchUser(data)

        setLoading(false)

        fetchedData()
      } catch (error) {
        console.log(error);
        setEvent('fetch error. try again')
        setLoading(false)
      }
    }



    const fetchedData = () => {
        setLoading(true)

        setFetched(fetchUser[0]);
        loginAuth(fetched)

        setLoading(false)
      }
      
      console.log('fetch test');
      console.log(uid);
      console.log(userName);
      console.log(password);
      console.log(fetchUser);
    console.log('');

    // const uidCheck = async () => {!uid ? console.error('uid not allowed') : fetchingData();}
    // const fetchcheck = async () => {!fetchUser ? console.error('fetched user empty') : fetchedData()}

    hashGenerate()
    
    // uidCheck()
    // fetchcheck()
    
  }

  // ito create acc function
  const createAcc = () => {

    // this will check if yung Uid is mas laman or wala
    if (!uid) { 
      console.log("its empty");
    }

    const doc = {
      _id: uid,
      _type: 'user',
      email: userName,
      password: password,
    };

    // ito dito natin i reready mga data natin before ipasok sa database 
    try {
      client.createIfNotExists(doc)
      .then(()  =>  { 
      console.log('creating account successful')
      setUserCreated('new login Acc created, click login again to login')
      })
      .catch(console.error)
    } catch (error) {
      console.log(error);
      setEvent('creating acc error')
    }

    // kung ready na. papasok na natin sha sa DB
    
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
            {!loading ? (<button className='welcomebtn'><p className="welcomebtntxt">Login</p></button>) : (<div>loading</div>)}
            {userData ? <Navigate to='/home'/> : <div></div>}        
            <p>{ event }</p>
          </form>
      </div>
      <span className='bottom-0 absolute'><img src={arrowleft} alt="" /></span>
    </section>
  )
}
