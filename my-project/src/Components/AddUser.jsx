import React, { useEffect, useState } from 'react'
import axios from 'axios';


function AddUser() {
    const [chage, setChage] = useState("")
    const [chname, setChname] = useState("")
    const [chfullname, setChfullname] = useState("")
    const [chcountry, setChcountry] = useState("")

    const CreateUser = async () => {
        try {
          const response = await axios.post(`http://localhost:1111/users`, {
            age: chage,
            name: chname,
            fullname: chfullname,
            country: chcountry
          });
          window.location.pathname = "/"
          if (response.status === 201) {
            console.log("User created successfully!", response.data);
            
          } else {
            console.error("Error creating user:", response.status, response.data);
          }
        } catch (error) {
          console.error("Error:", error);
        }
    };
      
   

  return (
    <div className="m-2 flex flex-col gap-2 ">
    <h1 className='text-xl font-bold'>Add a new user</h1>

  <label htmlFor="age" className="text-gray-700 p-0 m-0 text-sm font-normal">Age</label>
  <input
    className="border-2 block p-1 rounded focus:outline-blue-500 focus:ring-opacity-50 max-w-96 border-gray-400 bg-gray-200"
    placeholder="age"
    type="number"
    name="age"
    id="age"
    onChange={(e)=> setChage(e.target.value)}
  />
  <label htmlFor="name" className="text-gray-700 p-0 m-0 text-sm font-normal">Name</label>
  <input
    className="border-2 block p-1 rounded focus:outline-blue-500 focus:ring-opacity-50 max-w-96 border-gray-400 bg-gray-200"
    placeholder="name"
    type="text"
    name="age"
    id="age"
    onChange={(e)=> setChname(e.target.value)}
  />
  <label htmlFor="fullName" className="text-gray-700 p-0 m-0 text-sm font-normal">Full Name</label>
  <input
    className="border-2 block p-1 rounded focus:outline-blue-500 focus:ring-opacity-50 max-w-96 border-gray-400 bg-gray-200"
    placeholder="full name"
    type="text"
    name="fullName"
    id="fullName"
    onChange={(e)=> setChfullname(e.target.value)}
  />
  <label htmlFor="country" className="text-gray-700 p-0 m-0 text-sm font-normal">Country</label>
  <input
    className="border-2 block p-1 rounded focus:outline-blue-500 focus:ring-opacity-50 max-w-96 border-gray-400 bg-gray-200"
    placeholder="country"
    type="text"
    name="country"
    id="country"
    onChange={(e)=> setChcountry(e.target.value)}
  />
  <div className='flex'>
    <button onClick={()=> CreateUser()} className="text-white rounded-[7px] px-4 py-2 mb-1 bg-sky-500 font-medium transition-all max-w-20 hover:scale-105 items-center">Add</button>
    <button onClick={()=> window.location.href = "/"} className="text-white mx-1 rounded-[7px] px-2 py-2 mb-1 bg-red-500 font-medium transition-all max-w-20 hover:scale-105 items-center">Cencel</button>
  </div>

</div>

  )
}
export default AddUser;