import React, { useState } from 'react'
import axios from 'axios';

function Edit() {
    const id = new URLSearchParams(window.location.search).get("id");
    const [chage, setChage] = useState("")
    const [chname, setChname] = useState("")
    const [chfullname, setChfullname] = useState("")
    const [chcountry, setChcountry] = useState("")

      const EditUser = async () => {
        try {
          axios.put(`http://localhost:1111/users/${id}`, {
            id,
            age: chage,
            name: chname,
            fullname: chfullname,
            country: chcountry
          }).then((res)=> {
            window.location.pathname = '/'
          })
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };   

  return (
    <div className="m-2 flex flex-col gap-2 ">
      <h1 className='text-xl font-bold'>Edit the user</h1>
      <label htmlFor="name" className="text-gray-700 text-sm p-0 m-0 font-normal">ID</label>
      <input
        readOnly
        className="border-2 block p-1 rounded focus:outline-blue-500 focus:ring-opacity-50 max-w-96 myInputEdits border-gray-400 bg-gray-200"
        value={id}
        id="name"
        type="text"
        name="name"
      />
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
    <button onClick={()=> EditUser()} className="text-white rounded-[7px] px-4 py-2 mx-1 mb-1 bg-sky-500 font-medium transition-all max-w-20 hover:scale-105 items-center">Edit</button>
    <button onClick={()=> window.location.href = "/"} className="text-white mx-1 rounded-[7px] px-2 py-2 mb-1 bg-red-500 font-medium transition-all max-w-20 hover:scale-105 items-center">Cencel</button>
  </div>

</div>

  )
}
export default Edit;