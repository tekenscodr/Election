import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/app/backjob/schema';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onFormSubmit: () => void;
  children: React.ReactNode;
}

type Inputs = z.infer<typeof RegisterSchema>

const Modal: React.FC<ModalProps> = ({ open, onClose, onFormSubmit, children }) => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    setError
  } = useForm<Inputs>({
    resolver: zodResolver(RegisterSchema)
  });
  const [error, setErrors] = useState('')
  const modalBackdropClasses = open
    ? 'fixed inset-0 flex justify-center items-center visible bg-black bg-opacity-25 backdrop-blur-sm z-[1000]'
    : 'invisible';

  const modalContentClasses = 'bg-white p-4';

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onSubmit = async(data: Inputs) => {
    // TODO: post to server
     console.log(data)
    // await new Promise((resolve) => setTimeout(resolve, 2000))
    const res = await fetch ('http://localhost:2024/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await res.json();
    if (!res.ok) {
      alert('Submit Failed!')
      }else{
        alert("Success")
        reset();
        onClose();
        onFormSubmit();
      }
      
      
  };

  const regionsInGhana = [
    'Greater Accra',
    'Ashanti',
    'Eastern',
    'Central',
    'Western',
    'Western North',
    'Volta',
    'Oti',
    'Northern',
    'Upper East',
    'Upper West',
    'Bono East',
    'Ahafo',
    'Bono',
    'Savannah',
    'North East',
  ];

  return (
    <div className={modalBackdropClasses} onClick={onClose}>
      <div className={modalContentClasses} onClick={stopPropagation}>
        <h2 className="text-lg font-semibold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.password &&(
            <p className= 'text-red-500'>{`${errors.password.message}`}</p>
          )}
          {errors.email &&(
            <p className= 'text-red-500'>{`${errors.email.message}`}</p>
          )}
          <div className="inner-div">
          <div className='flex'>
            <div className="mb-4 w-1/2 ">
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
              {...register("firstname", {
                required: "First Name is required",
              })}
                type="text"
                id="firstname"
                name="firstname"
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"

              />
            </div>
            <div className="mb-4 w-1/2 pl-4">
              <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
                Surname
              </label>
              <input
              {...register("surname", {
                required: "Surname is required",
              })}
                type="text"
                id="surname"
                name="surname"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"

              />
            </div>
            </div>
            <div className="mb-4">
              <label htmlFor="level" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
              {...register("level", {
                required: "Role is required",
              })}
                id="level"
                name="level"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="National">National</option>
                <option value="Regional">Regional</option>
                <option value="Constituency">Constituency</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
                type="phoneNumber"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"

              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
              {...register("email", {
                required: "Email is required",
              })}
                type="email"
                id="email"
                name="email"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex">
              <div className="mb-4 mr-2">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  Region
                </label>
                <select
              {...register("region", {
                required: "Region is required",
              })}
                  id="region"
                  name="region"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                >
                  <option value="">Select a region</option>
                  {regionsInGhana.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="constituency" className="block text-sm font-medium text-gray-700">
                  Constituency
                </label>
                <input
              {...register("constituency", {
                required: "Constituency is required",
              })}
                  type="constituency"
                  id="constituency"
                  name="constituency"
                  className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
              {...register('password', {
                required:'Password is Required',
                minLength: {
                  value: 6,
                  message:"Password must be at least of length 6 characters."
                }
                })}
                type="password"
                id="password"
                name="password"
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="text-right">
              <button
                disabled ={isSubmitting}
                type="submit"
                className="submit-button bg-blue-600 hover:bg-blue-800 
                text-white font-bold py-2 px-4 rounded
                disabled:bg-gray-500">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
