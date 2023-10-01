"use client"
import { useAuth } from "@/app/backjob/authmiddleware";
import { Header } from "@/app/components/Header";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from 'next/image';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { DataSchema } from "@/app/backjob/schema";


type Votes = z.infer<typeof DataSchema>;
// const agent = session;


const Constituency = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const userid = user?._id;
  // console.log(user)
  const defaultFormValues: Votes = {
    agent: userid!,
    votes: [
      {
        name: "Mahamud Bawumia",
        count: 0,
      },
      {
        name: "Kennedy Agyepong",
        count: 0,
      },
      {
        name: "Afriyie Akoto",
        count: 0,
      },
      {
        name: "Francis Addai Nimo",
        count: 0,
      },
    ],
  };
  const { register, handleSubmit, control, reset } = useForm<Votes>({
    defaultValues: defaultFormValues,
  });

  if(loading){
    return (
      <div className='w-full h-screen'>
        <p>Loading...</p>
      </div>
    )
  }else if (!loading&& !user){
    router.replace('/')
  }

  const onSubmit = async (data:Votes) => {
    try {
      const response = await fetch('https://colbak.vercel.app/auth/add-votes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Reset the form on success
        reset();
        alert('Data submitted successfully');
      } else {
        alert('Data submission failed');
      }
      // console.log(data)
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('An error occurred while submitting data');
    }
  };

  return (
    <div className='bg-white py-5 min-h-screen w-full'>
      <Header />
      <div className="flex justify-end">
        <button
          className="border-2 m-4 px-3 rounded border-black hover:bg-gray-900 hover:text-zinc-100 focus:ring focus:ring-gray-300"
          onClick={() => {
            router.push('/dashboard/constituency/report');
          }}
        >
          Report
        </button>
      </div>
      <h3 className="uppercase subpixel-antialiased font-bold text-xl text-center m-4"> Collation Sheet </h3>
      <div className="m-5 bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          {defaultFormValues.votes.map((vote , index: any) => (
            <div key={index} className="flex p-5 justify-between">
              <Image src={`/${vote.name}.jpg`} alt="candidate" className="w-12 h-12 rounded-full" />
              
              <label className="p-2 m-2">{vote.name}</label>
              <Controller
                 name={`votes[${index}].count` as unknown as `votes.${number}.count`}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type='number'
                    className="border-b border-gray-500 focus:border-indigo-500 focus:outline-none p-3 m-2"
                  />
                )}
              />
            </div>
          ))}
          <div className="flex p-5 justify-between">
            <label>Upload Results Photo</label>
          <input type="file" 
                className="border-b border-gray-500 focus:border-indigo-500 focus:outline-none"/>
          </div>
          <div className="flex justify-end m-5 p-5">
            <button className="bg-blue-500 rounded py-3 px-5 text-zinc-200 hover:bg-sky-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Constituency;
