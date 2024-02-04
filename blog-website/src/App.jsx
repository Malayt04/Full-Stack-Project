import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth.js"
import {login, logout} from "./store/authSlice.js"
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    }).catch((error)=>console.log(error))
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO: {/* <Outlet />*/}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App