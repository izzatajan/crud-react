import { useState, useEffect } from "react";
import axios from 'axios';

function UserList() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1111/users');
        const data = response.data;
        setTableData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error gracefully (e.g., display an error message)
      }
    };
  
    fetchData();
  }, []);

  const DeleteData = async (id) => {
    try {
      const responseim = await axios.delete('http://localhost:1111/users/' + id);
      const dataim = responseim.data;
      console.log(dataim);
      window.location.pathname = "/"
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error gracefully (e.g., display an error message)
    }
  };
    

  return (
    <div className="ml-3 mt-3">
      <button onClick={()=> window.location.pathname = "/add"} className="text-white rounded-[7px] px-2 py-2 mb-1 bg-sky-500 font-medium transition-all hover:scale-105">Add new</button>
      <table className="table-auto border border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Full name</th>
            <th className="px-4 py-2">Country</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (
            tableData.map((row) => (
              <tr key={row.id} className="border-b">
                <td className="px-4 py-2">{row.id}</td>
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.age}</td>
                <td className="px-4 py-2">{row.fullname}</td>
                <td className="px-4 py-2">{row.country}</td>
                <td>
                  <button onClick={() => { window.location.href = 'http://localhost:5173/edit?id=' + row.id }} className="bg-green-400 mx-1 px-4 py-1 rounded cursor-pointer transition-all hover:scale-105">Edit</button>
                  <button onClick={(e) => DeleteData(row.id)} className="bg-rose-400 mx-1 px-4 py-1 rounded cursor-pointer transition-all hover:scale-105">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Nothing found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;