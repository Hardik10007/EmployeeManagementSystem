import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './Components/AddEmployee';
import Navbar from './Components/Navbar';
import EmployeeList from './Components/EmployeeList';
import UpdateEmployee from './Components/UpdateEmployee';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<EmployeeList/>}/>
        <Route index element={<EmployeeList/>}/>
        <Route path='/employeeList' element={<EmployeeList/>}/>
        <Route path='/addemployee' element={<AddEmployee/>}/>
        <Route path='/editemployee/:id' element={<UpdateEmployee/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
