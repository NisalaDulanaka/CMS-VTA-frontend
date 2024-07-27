import { Outlet } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />

          <div className="col">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
