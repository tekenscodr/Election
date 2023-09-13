// "use client"
// import React, { useState } from 'react';
// import Modal from './Modal';

// interface RegistrationModalProps {
//   isOpen: boolean;
//   onRequestClose: () => void;
// }

// const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onRequestClose }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle registration logic here, e.g., make an API request
//     console.log('Registration data:', formData);
//     onRequestClose();
//   };

//   return (
//     <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
//       <h2 className="text-2xl font-bold mb-4">Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">
//             Username
//           </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
//             required
//           />
//         </div>
//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
//           >
//             Register
//           </button>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// export default RegistrationModal;
