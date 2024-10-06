import { useState } from 'react'
import './App.css'
// import SidebarTask from './Components/Sidebar/SidebarTask';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Task from './Components/TaskComponents/Task';
import Sidebar from './Components/Sidebar';


const App = () => {


  return (
  

      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex p-2 bg-gray-100">
            <Routes>
              <Route path="/demand-wise" element={<Task />} />
              {/* Add other routes here */}
            </Routes>
          </div>
        </div>
      </Router>

  )
}

export default App
