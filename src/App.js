import { BrowserRouter , Routes , Route } from 'react-router-dom'

import MainHome from './components/MainHome'
import Login from './components/auth/login/Login'
import Signup from './components/auth/signup/Signup'
import CreateEvent from './components/Events/CreateEvent'


import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
    <div>
        <Toaster
          position='top-right'
          toastOptions={{
            success : {
              theme : {
                primary : "#4aed88",
              }
            }
          }}
        >
        </Toaster>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/create-event" element={<CreateEvent/>} />


          {/* <Route path="/editor/:roomId" element={<EditorPage/>} /> */}
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
