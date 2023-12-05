import React, { useEffect, useState } from 'react'
import CryptoJS from 'crypto-js';

import eaclogo from '../assets/eaclogo.png'
import arrowright from '../assets/arrowright.png'
import arrowleft from '../assets/arrowleft.png'
import eacExprLogo from '../assets/eac_express_logo.png'

import { FaLock, FaUser } from "react-icons/fa";
import { client } from '../utils/sanity';
import { useUser } from '../utils/user';
import { Navigate } from 'react-router-dom';
import { fetchUserbyUid } from '../utils/DataQuery';



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

  const acceptableDomain = '@eac.edu.ph';

  const stateTesting = () => {
    console.log('fetch test');
    console.log('uid: ' + uid);
    console.log('userName: ' + userName);
    console.log('password: ' +password);
    console.log('fetchUser: ' +fetchUser);
    console.log('-----------');
  }

  useEffect(()=>{
    const fetchCondition = () => {

      stateTesting()
      setLoading(true)
      if (fetchUser === null || fetchUser === undefined || (Array.isArray(fetchUser) && fetchUser.length === 0)) {
        console.log('Creating acc');
        
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
            setEvent('new login Acc created, click login again to login')
            setLoading(false)
          })
          .catch((ok)=>{
            console.log(ok)
            setLoading(false)
          })
        } catch (error) {
          console.log(error);
          setEvent('creating acc error')
          setLoading(false)
        }

      } else {
        console.log('Logging in');
        // fetchedData()
        loginAuth(fetchUser)

        setLoading(false)
      }
    }
    fetchCondition()
  },[fetchUser])

  useEffect(()=>{
    const fetchingData = async () => {
      setLoading(true)
      try {
        const data = await client.fetch(fetchUserbyUid(uid));
        SetFetchUser(data[0])
        setLoading(false)
      } catch (error) {
        console.log(error);
        setEvent('fetch error. try again')
        setLoading(false)
      }
    }
    fetchingData()
  },[uid])

  
  const hashGenerate = async (e) => {  
    e.preventDefault()
    setLoading(true)
    if (!userName.includes(acceptableDomain)) {
      return setUid(null)
    }else{
      try {
        const hash = await CryptoJS.SHA256(userName).toString();
        setUid(hash)
        setLoading(false)
      } catch (err) {console.error(err)}
    }
  }


  
  return (
    <section className='w-screen h-screen bg-articDaisy flex justify-center items-center'>
      <span className='top-0 absolute'><img src={arrowright} alt="" /></span>
        <div className='w-full h-full welcomePage grid grid-cols-3 gap-16 '>
          
          <div className='grid place-items-center col-span-2'>
            <img src={eacExprLogo} alt="" className='h-full w-full'/>
          </div>
          
          <form 
            className='flex flex-col items-center justify-center'
            onSubmit={hashGenerate}>
            
            <div className='welcomeAuth'>
              <div className='bg-white rounded-full w-12 h-12 flex justify-center items-center ml-5'>
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
              <div className=' rounded-full w-12 h-12 flex justify-center items-center ml-5'></div>
            </div>
            <div className='welcomeAuth'>
              <div className='bg-white rounded-full w-12 h-12 flex justify-center items-center ml-5'>
                <FaLock className='welcomeAuthIcon'/>
              </div>
              <input 
                className='welcomeAuthInp' 
                type="password"  
                placeholder='Password'
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}/>
                <div className=' rounded-full w-12 h-12 flex justify-center items-center ml-5'></div>
            </div>
            {!loading ? (<button className='welcomebtn'><p className="welcomebtntxt">Login</p></button>) : (<div>loading</div>)}
            {userData ? <Navigate to='/main'/> : <div></div>}        
            <p>{ event }</p>
          </form>
      </div>
      <span className='bottom-0 absolute'><img src={arrowleft} alt="" /></span>
    </section>
  )
}
