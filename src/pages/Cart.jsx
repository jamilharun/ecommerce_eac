import React, { useEffect, useState } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useUser } from '../utils/user'
import { client, urlFor } from '../utils/sanity'
import { createOrderDoc, fetchingUserCart } from '../utils/DataQuery'
import { BsCartCheckFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';
import { CiCircleCheck } from 'react-icons/ci'
import { Link } from 'react-router-dom'

export default function Cart() {
  const [uuid, getuUid] = useState(uuidv4())
  // const [keyid, getKeyId] = useState(uuidv4)



  
  const [userId, getUserId] = useState(null)
  const [numArray, getNumArray] = useState(null)
  const [totalAmount, getTotalAmount] = useState(null)

  const [fetchedData, getFetchedData] = useState(null)
  const [loading, setLoading] = useState(null)
  // const [selectedCart, getSelectedCart] = useState({})
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectTotal, setSelectTotal] = useState([]);
  const [checked, setChecked] = useState(null);
  
  const [orderSuccess, setOrderSuccess] = useState(null)

  const {userData} = useUser({})
  
  // working on checkout button. dahil di pa nagawan ng code. 
  // at aayusin ulit database para tugma sa magiging system 
  const CheckoutBtn = () => {
    try {
      // console.log(createOrderDoc(uuid, userId, selectedItems, selectTotal, selectTotal))
      client
        .create(createOrderDoc(uuid, userId, selectedItems, selectTotal, selectTotal))
        .then((ok)=>{
          console.log('creating order is successful: ' + ok)
          setOrderSuccess(true)
        })
        .catch((er)=>{
          console.log('creating order failed: ' + er);
        })
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    selectedItems.map((item) => {
      total = total + item.value
    });
    
    console.log(selectedItems);
    // console.log(total);

    if (selectedItems === null || selectedItems === undefined || (Array.isArray(selectedItems) && selectedItems.length === 0)) {
      setChecked(false)
    }

    setSelectTotal(total)
  },[selectedItems])  

  const handleCheckboxClick = (itemId, itemValue) => {
    const isItemSelected = selectedItems.some(item => item.id === itemId);
  
    if (isItemSelected) {
      setSelectedItems(prevSelectedItems =>
        prevSelectedItems.filter(item => item.id !== itemId)
      );
    } else {
      const newItem = {
        id: itemId,
        value: itemValue,
        key: uuidv4() // Generating a unique key using UUID
      };
  
      setSelectedItems(prevSelectedItems => [
        ...prevSelectedItems,
        newItem
      ]);
    }
  };
  //---------------------------------

  var total = 0;
  const gettingTotal = (data) => {

    data.forEach((number) => {
      total += number.total;
    });
    // console.log(total);
    getTotalAmount(total)
  }

  

  useEffect(() => {
    const fetchingCart = async () => {
      setLoading(true);
      try {
        const data = await client.fetch(fetchingUserCart(userId));
        getFetchedData(data);
        gettingTotal(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
      console.log('cartfetching finished');
    };
  
    fetchingCart();
  }, [userId, window.location.pathname]);

  useEffect(()=>{
    // console.log(fetchedData);
    const arraylength = () => {
      if (fetchedData === null || fetchedData === undefined || (Array.isArray(fetchedData) && fetchedData.length === 0)) {
      console.log('no data');
      } else {
        console.log('it works');
        var arrlength = fetchedData.length
        getNumArray(arrlength)
      }
    }
    arraylength()

    console.log(fetchedData);
  },[fetchedData])

  useEffect(()=>{
    getUserId(userData?._id)
  },[userData])

  // const handleDeleteClick = (itemId) => {
  //   // Implement logic for item deletion
  //   client
  //     .patch(itemId)
  //     .set({ 'isDeleted': true }) // Assuming you have a field 'isDeleted' in your schema
  //     .commit()
  //     .then((ok) => {
  //       console.log("Delete successful");
  //       // Assuming you want to remove the deleted item from the state
  //       const updatedData = fetchedData.filter(dataItem => dataItem._id !== itemId);
  //       setFetchedData(updatedData);
  //     })
  //     .catch((er) => {
  //       console.log(er + " Error deleting item");
  //     });
  // };

  const [forDeletion, setForDeletion] = useState(null);

  useEffect(() => {
    if (forDeletion) {
      console.log("Deleting item with ID:", forDeletion);
      client
        .delete(forDeletion)
        .then((ok) => {
          console.log("Delete successful");
        })
        .catch((er) => {
          console.log("Error deleting:", er);
        });
    }
  }, [forDeletion]);
  

  

  
  return (
    <div>
      {orderSuccess && (
        <Link to={`/main/Purchase?id=${uuid}`} className='notifBlock absolute w-screen h-screen z-50'>
          <div className='h-screen w-screen flex justify-center items-center'>
            <div className='bg-white border-EacColor-BlackPearl border-2 w-96 h-52 rounded-2xl flex flex-col justify-center items-center'>
              <CiCircleCheck className='text-DarkLemonLime text-8xl' />
              <p className='font-medium text-xl'>Order Successfully </p>
            </div>
          </div>
        </Link>
      )}

      <div className='bg-articDaisy w-screen h-full py-20 px-80'>
        <div className='flex justify-between items-center mt-5 text-5xl font-semibold'>
          <div className='flex items-center'>
            <IoCartOutline />
            <span className='ml-2'>Cart {numArray && `(${numArray} items)`}</span>
          </div>

          
          <Link to="/main/PurchaseHistory" className='bg-AlluraRed border-white border-2 rounded-full flex justify-center items-center w-50 mx-2'>
            <p className='text-white text-center w-full font-semibold text-2xl'>View Purchase History</p>
            <BsThreeDotsVertical className='text-AlluraRed bg-white rounded-full m-2 text-3xl w-8 h-8' />
          </Link>
        </div>

        <div className='border-EacColor-BlackPearl border-2 '>
          <div className='flex items-center text-center list-none text-2xl font-semibold p-2'>
            <li className='w-full'></li>
            <li className='w-full'>item</li>
            <li className='w-full'>Price</li>
            <li className='w-full'>Quantity</li>
            <li className='w-full'>Total</li>
            <li className='w-full'></li>
          </div>
          {fetchedData?.map((item) => (
        <div key={item._id} className='flex justify-between items-center text-2xl font-semibold border-EacColor-BlackPearl border-t-2 p-2'>
              <input
                type='checkbox'
                onChange={() => {
                  setChecked(true);
                  handleCheckboxClick(item?._id, item?.total);
                }}
                checked={selectedItems.includes(item?._id)}
                className='w-full text-center'
              />

              <div className='w-full h-full'>
                <img src={urlFor(item.productSaved.image).url()} alt='' className='object-cover ' />
              </div>
              <p className='w-full text-center'>₱{item.productSaved.price}</p>
              <p className='w-full text-center'>{item.quantity}</p>
              <p className='w-full text-center'>₱{item.total}</p>

              <button onClick={() => setForDeletion(item._id)}>Delete</button>
        </div>
          ))}
        </div>
        <div className='mt-3 flex justify-end'>
          {checked ? (
            <button onClick={() => CheckoutBtn()} className='bg-AlluraRed  border-white border-2 rounded-full flex justify-center items-center w-64'>
              <p className='text-white text-center w-full font-semibold text-2xl'>Checkout</p>
              <BsCartCheckFill className='text-AlluraRed bg-white rounded-full m-2 text-4xl w-10 h-10' />
            </button>
          ) : (
            <div className=' bg-EacColor-BlackPearl border-white border-2 rounded-full flex justify-center items-center w-64'>
              <p className='text-white text-center w-full font-semibold text-2xl'>Checkout</p>
              <BsCartCheckFill className='text-EacColor-BlackPearl bg-white rounded-full m-2 text-4xl w-10 h-10' />
            </div>
          )}

          {numArray && (
            <div className='bg-AlluraRed border-white border-2 rounded-full flex justify-center items-center w-64'>
              <p className='text-white text-center w-full font-semibold text-2xl'>total: ₱{totalAmount}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}