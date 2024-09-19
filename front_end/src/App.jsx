<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom'
=======
>>>>>>> 9fb66ff148f92d3b479c845674baccd30c15e466
import './App.css'
import Home from './pages/home/Home.jsx'
import Login from "./pages/signIn/SignIn.jsx"
import SignUp from './pages/signUp/signUp.jsx'
<<<<<<< HEAD
import { Toaster } from 'react-hot-toast'
=======
>>>>>>> 9fb66ff148f92d3b479c845674baccd30c15e466

function App() {

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
      <Toaster />
=======
      {/* <SignUp /> */}
      <Home />
>>>>>>> 9fb66ff148f92d3b479c845674baccd30c15e466
    </div>
  )
}

export default App
