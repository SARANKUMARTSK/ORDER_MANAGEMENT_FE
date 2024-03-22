import React from 'react'
import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import LandingPage from './components/Landing_Page/LandingPage'
import Login from './components/authendication/Login'
import Forgot from './components/authendication/Forgot'
import Reset from './components/authendication/Reset'
import Dashboard from './components/appPage/Home/Dashboard'
import Home from './components/appPage/Home/Home'
import PurchaseOrder from './components/appPage/PO/PurchaseOrder'
import SalesOrder from './components/appPage/SO/SalesOrder'
import ActionsPo from './components/appPage/PO/ActionsPo'
import ActionsSo from './components/appPage/SO/ActionsSo'
import Users from './components/appPage/Others/Users'
import EditUser from './components/appPage/Others/EditUser'
import Support from './components/appPage/Others/Support'
import AddSo from './components/appPage/SO/AddSo'
import AddPo from './components/appPage/PO/AddPo'
import AddUser from './components/appPage/Others/AddUser'
import EditSo from './components/appPage/SO/EditSo'
import EditPo from './components/appPage/PO/EditPo'
import ViewPo from './components/appPage/PO/ViewPo'
import ViewSo from './components/appPage/SO/ViewSo'
import AdminGuard from './utils/AdminGaurd'
import UserGuard from './utils/UserGaurd'

export const API_URL = "https://order-management-be-fr5y.onrender.com"


function App() {
  return <>
  <BrowserRouter>
  <Routes>
     
     <Route path='/landing-page' element={<LandingPage/>}/>
     
     <Route path='/login' element={<Login/>}/>
     <Route path='/forgot-password' element={<Forgot/>}/>                                 
     <Route path='/reset-password' element={<Reset/>}/>
      
    
     <Route path='/dashboard' element={<UserGuard><Dashboard/></UserGuard>}>
           <Route path='home' element={<UserGuard><Home/></UserGuard>}/>
           <Route path='purchase-order' element={<UserGuard><PurchaseOrder/></UserGuard> }/>
           <Route path='sales-order' element={<UserGuard><SalesOrder/></UserGuard> }/>
           <Route path='actions-sales-order' element={<AdminGuard><ActionsSo/></AdminGuard>}/>
           <Route path='actions-purchase-order' element={<AdminGuard><ActionsPo/></AdminGuard>}/>
           <Route path='edit-sales-order/:id' element={ <AdminGuard><EditSo/></AdminGuard>}/>
           <Route path='edit-purchase-order/:id' element={<AdminGuard><EditPo/></AdminGuard>}/>
           <Route path='view-sales-order/:id' element={<UserGuard><ViewSo/></UserGuard>}/>
           <Route path='view-purchase-order/:id' element={<UserGuard><ViewPo/></UserGuard>}/>
           <Route path='add-sales-order' element={<AdminGuard><AddSo/></AdminGuard>}/>
           <Route path='add-purchase-order' element={<AdminGuard><AddPo/></AdminGuard>}/>
           
      
           <Route path='users' element={<AdminGuard><Users/></AdminGuard>}/>
           <Route path='add-user' element={<AdminGuard><AddUser/></AdminGuard>}/>
           <Route path='edit-user/:id' element={<AdminGuard><EditUser/></AdminGuard>}/>
           <Route path='support' element={<UserGuard><Support/></UserGuard>}/>

           <Route path='*' element={<Navigate to='home'/>}/>
           <Route path='' element={<Navigate to='home'/>}/>
     </Route>
     <Route path='*' element={<Navigate to='/landing-page'/>}/>
  </Routes>
  </BrowserRouter>

  </>
}

export default App