import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import EmployeeService from '../Services/EmployeeService';

const UpdateEmployee = () => {
    const {id}= useParams();
    const navigate = useNavigate();
    const [Employee, setEmployee] = useState({
        id:id,
        firstName:"",
        lastName:"",
        emailId:""
    })
    const handleChange = (e) =>{
        const value = e.target.value;
        setEmployee({...Employee, [e.target.name]: value});
    };
    
    useEffect(() => {
        const fetchData = async()=>{
            try {
                const response = await EmployeeService.getEmployeebyid(id);
                setEmployee(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])
    
    
    const updateEmployee =(e)=>{
        e.preventDefault();
        console.log(Employee)
        EmployeeService.updateEmployee(Employee, id)
        .then((response) => {
          navigate("/employeeList");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Update Employee</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>First Name</label>
                <input type='text' name="firstName" value={Employee.firstName} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                <input type='text' name="lastName" value={Employee.lastName} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>Email</label>
                <input type='email' name="emailId" value={Employee.emailId} onChange={(e) => handleChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'></input>
            </div>
            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button onClick={updateEmployee} className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 px-2 py-2' >Update</button>
                <button onClick={()=> navigate('/employeeList') } className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 px-2 py-2'>Cancel</button>``
            </div>
                
        </div>
        <div className='px-8 py-8'></div>
    </div>
  )
}

export default UpdateEmployee