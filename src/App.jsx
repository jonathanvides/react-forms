import { useState } from 'react'
import './App.css'
import { SignUpForm } from './components/signup-form'
import { Authenticate } from './components/authenticate'

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  )
}

export default App
