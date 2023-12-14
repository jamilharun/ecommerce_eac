import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { client, urlFor } from '../utils/sanity';
import { useUser } from '../utils/user';
import { fetchingPurchaseHistory } from '../utils/DataQuery';

const PurchaseHistory = () => {
  const [purchaseHistoryData, setPurchaseHistoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, getUserId] = useState(null);

  const { userData } = useUser();

  let query = fetchingPurchaseHistory(`${userData?._id}`);

  console.log(query);

  useEffect(() => {
    console.log(userData._id);
    console.log('======================================');
    getUserId(userData._id);

    console.log('Current User ID:', userId); // Log the user ID
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await client.fetch(fetchingPurchaseHistory(userId)); // Correct function name
        console.log('Purchase history raw data:', data);
        setPurchaseHistoryData(data || []);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error('Error fetching purchase history:', err);
      }
    };

    fetchData();
  }, [userId, window.location.pathname]);

  useEffect(() => {
    // gettingData()
    console.log(userData);
  }, [userData?._id]);

  return (
    <div className='bg-articDaisy w-screen h-full py-20 px-80'>
      <div className='flex justify-between items-center mt-5 text-5xl font-semibold'>
        <div className="flex items-center">
          <Link to="main/Cart" className="text-AlluraRed flex items-center">
            <BsArrowLeft className="text-AlluraRed mr-2" />
            <span>Back to Cart</span>
          </Link>
          <span className="ml-5">Purchase History</span>
        </div>
      </div>
      <div className='border-EacColor-BlackPearl border-2 mt-8'>
        <div className='flex items-center text-center list-none text-2xl font-semibold p-2'>
          <li className='w-full'>Purchase ID</li>
          <li className='w-full'>Item Names</li>
          <li className='w-full'>Quantity</li>
          <li className='w-full'>Total Amount</li>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          purchaseHistoryData.map((purchase) => (
            <div key={purchase._id} className='flex justify-between items-center text-2xl font-semibold border-EacColor-BlackPearl border-t-2 p-2'>
              <li className='w-full'>{purchase._id}</li>
              <div className='w-full'>
                {purchase.checkout.map((item) => (
                  <li key={item._id} className='w-full'>{item.productSaved.name}</li>
                ))}
              </div>
              <div className='w-full'>
                {purchase.checkout.map((item) => (
                  <li key={item._id} className='w-full'>{item.quantity}</li>
                ))}
              </div>
              <li className='w-full'>₱{purchase.totalPrice}</li>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PurchaseHistory;
