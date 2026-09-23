import React, { useEffect, useState } from 'react'
import { getmyFlats } from '../../api/user.js';
import Myflatlist from '../../src/Component/MyFlatList.jsx';


const MyFlatPage = () => {
  const [flats, setFlats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const loadAllUserFlats = async()=>{
     setErr(null);
     setLoading(true);
     try {
      const {data} = await getmyFlats();
      setFlats(data.flats)
     } catch (err) {
      setErr("Failed to fetch your flats",err);
     }finally{
      setLoading(false)
     }
  }

  useEffect(()=>{
    loadAllUserFlats()
  },[])

  if(loading) return <p>Loading your flats...</p>
  if (err) return <p className='text-red-600'>{err}</p> 


  return (
    <>

    <h2 className='text-xl font-bold mb-3'>My Flats</h2>
     <Myflatlist flats={flats}/>
    </>
  )
}

export default MyFlatPage