import { BrowserRouter, Routes, Route } from "react-router-dom" //Dynamically add pages 
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Signout from "./pages/Signout"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signout" element={<Signout/>}/>
        <Route path="/about" element={<About/>}/>
        <Route element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
