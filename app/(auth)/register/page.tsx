'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Register() {
    const [email, setEmail] = useState('');
    const [first, setFirstname] = useState('');
    const [last, setLastname] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:2024/auth/register', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    first,
                    last,
                    phoneNumber,
                    password,
                }),
                headers: {
                    "Content-Type":"application/json",
                },
            
            });
            const data = await response.json();
            console.log(data.status);
            // Handle the response from the API
            if(data.status === 200){
                router.push('/login');
            }
            console.log(data)
        
    
        // // Clear the form
        // setPhonenumber('');
        // setPassword('');
        } catch (error) {
        console.error(error);
        }
    }
    return(
        <></>
    )
};

