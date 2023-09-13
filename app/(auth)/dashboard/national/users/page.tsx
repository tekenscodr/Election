'use client'
import { getUsers } from '@/app/backjob/percentage';
import Modal from '@/app/components/national/Modal';
import React, { Fragment, useEffect, useState } from 'react'

function Users() {

  interface User {
    _id: string;
    email: string;
    phoneNumber: string;
    firstname: string;
    surname: string;
    constituency: string;
    region: string;
    level: string;
    position: string;
  }
  const [users, setUsers] = useState<User[]>([]);
  const [open, setOpen] = useState(false);

  async function fetchUsers() {
    try {
      const response = await getUsers();
      setUsers(response.users); // Update the 'users' state with the fetched user data
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  const handleFormSubmit = async () => {
    // Close the modal
    setOpen(false);
    // Fetch updated user data after form submission
    fetchUsers();
  };

  useEffect(() => {
 
    fetchUsers();
  }, []);

 


  return (
    <>
    <div className=' bg-white h-screen w-full'>
      <div className="flex justify-end m-3">
          <button onClick={() => setOpen(true)} className="mt-3 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
            New User
          </button>
      </div>
    <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th className='px-6 py-3'>ID</th>
          <th className='px-6 py-3'>Name</th>
          <th className='px-6 py-3'>Region</th>
          <th className='px-6 py-3'>Constituency</th>
          <th className='px-6 py-3'>Role</th>
          <th className='px-6 py-3'>More</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id} className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
            <td className='px-6 py-4'>{user._id.slice(0, 4)}</td>
            <td className='px-6 py-4'>{user.firstname + " " + user.surname}</td>
            <td className='px-6 py-4'>{user.region}</td>
            <td className='px-6 py-4'>{user.constituency}</td>
            <td className='px-6 py-4'>{user.level}</td>
            <td className='px-6 py-4'>{/* More details or actions */}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    <Modal open={open} onClose={() => setOpen(false)} onFormSubmit={handleFormSubmit}>
      
    </Modal>
  </>
  );
}

export default Users