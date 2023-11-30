import React, { useEffect, useState } from 'react'
import imageicon from '../assets/imageicon.png'
import { useUser } from '../utils/user'
import { client } from '../utils/sanity'
import { userDatabyId } from '../utils/DataQuery'
import { CiCircleCheck } from 'react-icons/ci'

export const UserProfile = () => {
    const [uid, getUid] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [courseSection, setCourseSection] = useState('')

    // const [formEdit, setFormEdit ] = useState(false)
    const [formSuccess, setFormSuccess ] = useState(false)
    const [loading, setLoading ] = useState(false)


    const [userInfo, setUserInfo] = useState(null)
    // const [readUserData, setReadUserData] = useState(null)
    // const [userId, getUserId] = useState(null)

    const {userData} = useUser()

    // let id = userData._id
    let query = userDatabyId(`${userData._id}`)




    // if (!userInfo) {
    const gettingData = () => {
        async function fetchData() {
            try {
                const proInf = await client.fetch(`${query}`)
                // console.log(proInf[0]);

                var data = proInf[0] 
                
                passData(data)
            } catch (error) {
                console.log(error);
            }
            // console.log(userInfo);
            // console.log(query);
        }
        fetchData()
    }

    // if (userInfo) {
    const passData = (data) => {
        console.log(data);
        getUid(data?._id)
        setFirstName(data?.fname)
        setLastName(data?.lname)
        setEmailAddress(data.email)
        setPhoneNumber(data?.phoneNumber)
        setCourseSection(data?.courseSection)
    }
    

    // }
    //----------------------------------------

    const editProfile = (e) => {
        e.preventDefault()
        setLoading(true)

        client
            .patch(uid)
            .setIfMissing({
                fname: firstName,
                lname: lastName,
                phoneNumber: phoneNumber,
                courseSection: courseSection
            })
            .commit()
            .then(()=>{
                gettingData()
                setLoading(false)
                setFormSuccess(true)
            })

    }
    
    useEffect(()=>{
        gettingData()
    },[userData._id])

    // console.log(userInfo);
    // if (userData) { return fetchingUserData() }

    return (
        <div>
            {formSuccess && (
                <div 
                onClick={()=>{setFormSuccess(false)}}
                className='notifBlock absolute w-screen h-screen z-50'>
                    <div className='h-screen w-screen flex justify-center items-center'>
                        <div className='bg-white border-EacColor-BlackPearl border-2 w-96 h-52 rounded-2xl flex flex-col
                            justify-center items-center'>
                            <CiCircleCheck className='text-DarkLemonLime text-8xl'/>
                            <p className='font-medium text-xl'>Saved Successfully </p>
                        </div>
                    </div>
                </div>
            )}

        <div className='bg-articDaisy w-screen h-screen px-40 py-40'>
        {/* {!userData && (console.log(userId))} */}

        
        <div className='flex justify-center items-center'>
          <div>
            <img src={imageicon} alt="" className='profileimg'/>
          </div>
            <form onSubmit={editProfile}>
              <p className='text-4xl font-medium font-poppins py-5 mx-10'>Personal Information</p>
              <div className='flex'>
                <div>
                  <p className='profiletext'>First Name</p>
                  <input 
                    type="text" 
                    value={firstName} 
                    onChange={(e)=>setFirstName(e.target.value)}
                    className='profileinp '/>
                </div>
                <div>
                  <p className='profiletext'>Last Name</p>
                  <input 
                    type="text" 
                    value={lastName} 
                    onChange={(e)=> setLastName(e.target.value)}
                    className='profileinp'/>
                </div>
              </div>
              <div>
                <div>
                  <p className='profiletext'>Email Address</p>
                  <input 
                    type="text" 
                    value={emailAddress} 
                    onChange={(e)=>setEmailAddress(e.target.value)}
                    className='profileinp'/>
                </div>
              </div>
              <div className='flex'>
                <div>
                  <p className='profiletext'>Phone Number</p>
                  <input 
                    type="number" 
                    value={phoneNumber} 
                    onChange={(e)=>setPhoneNumber(e.target.value)}
                    className='profileinp'/>
                </div>
                <div>
                  <p className='profiletext'>Course/Section</p>
                    <select 
                        value={courseSection} 
                        onChange={(e)=> setCourseSection(e.target.value)}
                        className='profileinp'>
                        <option value="ComSci/Ucos">ComSci/Ucos</option>
                    </select>
                    <p>Course Section: {courseSection}</p>
                    
                </div>
              </div>
              {/* {!formEdit ? (<button className='bg-AlluraRed'>Save</button>) : (<div>Save</div>)} */}
              <div className='flex justify-center items-center'>
                {loading ? (
                    <div className=' my-5 mx-10 bg-white text-center border-white border-2 rounded-full w-28 h-10'>
                        <div className='text-EacColor-BlackPearl text-lg font-semibold '>Loading</div>
                    </div>
                ) : (

                    <div className=' my-5 mx-10 bg-AlluraRed text-center border-white border-2 rounded-full w-28 h-10'>
                        <button className='text-white text-lg font-semibold '>Save</button>
                    </div>
                )}
              </div>
            </form>
        </div>
      </div>
    </div>
    )
}
