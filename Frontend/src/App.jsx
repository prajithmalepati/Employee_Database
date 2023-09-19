import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css'
import NavBar from './components/NavBar'
import CreateEmployee from './components/CreateEmployee'
import UpdateEmployee from './components/UpdateEmployee'
import DeleteEmployee from './components/DeleteEmployee'
import EmployeeList from './components/EmployeeList'
import EmployeeDetails from './components/EmployeeDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <h1>Employee Database</h1>
        <NavBar />

        <Routes>
          <Route path="/create" element={<CreateEmployee />} />

          <Route path="/update" element={<UpdateEmployee />} />

          <Route path="/delete" element={<DeleteEmployee />} />

          <Route path="/" element={<EmployeeList />}  />

          <Route path = "/employees" element ={<EmployeeList />} />

          <Route path = "/employees/:idOrName" element = {<EmployeeDetails />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App
