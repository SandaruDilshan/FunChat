
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.jsx'
import Login from "./pages/signIn/SignIn.jsx"
import SignUp from './pages/signUp/signUp.jsx'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext.jsx'

function App() {

  const { authUser } = useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>

      <Routes>
        <Route path="/" element={ authUser ? <Home /> : <Navigate to='/signin' /> }/>
        {/* <Route path='/' element ={  <Home /> } /> */}
        <Route path="/signin" element={ authUser ? <Navigate to='/' /> : <Login /> } />
        <Route path="/signup" element={authUser ? <Navigate to='/' /> : <SignUp />} />
        {/* If authentication user then directed to the home page if it is not show sign up page */}
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
