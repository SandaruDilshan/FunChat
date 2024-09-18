import './App.css'
import Home from './pages/home/Home.jsx'
import Login from "./pages/signIn/SignIn.jsx"
import SignUp from './pages/signUp/signUp.jsx'

function App() {

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <SignUp /> */}
      <Home />
    </div>
  )
}

export default App
