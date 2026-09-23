
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Component/Register'
import Login from './Component/Login'
import UserDashboard from '../Pages/user/UserDashboard'
import AdminDashboard from '../Pages/admin/AdminDashboard'

import MyFlatPage from '../Pages/user/MyFlatPage'
import EnquiriesPage from '../Pages/user/EnquiriesPage'
import EnquiriesForMyFlat from '../Pages/user/EnquiriesForMyFlat'
import AdminDashPage from '../Pages/admin/AdminDashPage'
import PendingFlats from '../Pages/admin/PendingFlats'
import ApprovedFlats from '../Pages/admin/ApprovedFlats'
import SoldFlats from '../Pages/admin/SoldFlats'
import AllEnquiries from '../Pages/admin/AllEnquiries'
import AddFlatPage from '../Pages/user/AddFlatPage'
import FlatApprovedpage from '../Pages/user/FlatApprovedPage'


function App() {
  

  return (
    <>
    
       <Routes>
         <Route path='/' element={<Register/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/user-dash' element={<UserDashboard/>} >
           <Route index element={<FlatApprovedpage/>}/>
           <Route path='myflats' element={<MyFlatPage/>}/>
           <Route path='myflats/add' element={<AddFlatPage/>}/>
           <Route path='enquiries' element={<EnquiriesPage/>}/>
           <Route path='enquiries/received' element={<EnquiriesForMyFlat/>}/>
         </Route>
         <Route path='/admin-dash' element={<AdminDashboard/>} >
          <Route index element={<AdminDashPage/>}/>
           <Route path='pending' element={<PendingFlats/>}/>
           <Route path='approved' element={<ApprovedFlats/>}/>
           <Route path='sold' element={<SoldFlats/>}/>
           <Route path='enquiriesAll' element={<AllEnquiries/>}/>
         </Route>
       </Routes>

    
        </>
  )
}

export default App
