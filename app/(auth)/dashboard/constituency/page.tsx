'use client'
import { useAuth } from "@/app/backjob/authmiddleware";
import { Header } from "@/app/components/Header";
import { useRouter } from "next/navigation";
import { report } from "process";
import { useEffect } from "react";


const Constituency = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  
  useEffect(() => {
    if (!loading && !user?.token) {
      router.push('/');
    }
  }, [loading, user, router]);

  if (loading) {
    return <p>Loading......</p>;
  }


  return (
    <>
       <div className='bg-white py-5 min-h-screen w-full'>
      <Header/>
      <div className="flex justify-end">
        <button className=" border-2 m-4 px-3 rounded border-black 
        hover:bg-gray-900 hover:text-zinc-100 focus:ring
         focus:ring-gray-300"
         onClick={()=>{router.push('/dashboard/constituency/report')}}
         >Report</button>
      </div>
      <h3 className="uppercase subpixel-antialiased font-bold text-xl text-center m-4"> Collation Sheet </h3>
      <div className="m-5 ">
        <form action="">
          <div className="flex p-5 justify-between">
            <img src="" alt="candidate" className="w-12 h-12 rounded-full"/>
            <label>Candidate Fullname</label>
            <input type='number' className="border-b border-gray-500 focus:border-indigo-500 focus:outline-none"></input>
          </div>
          <div className="flex p-5 justify-between">
            <img src="" alt="candidate" className="w-12 h-12 rounded-full"/>
            <label>Candidate Fullname</label>
            <input type='number' className="border-b border-gray-500 focus:border-indigo-500 focus:outline-none"></input>
          </div>
          <div className="flex p-5 justify-between">
            <img src="" alt="candidate" className="w-12 h-12 rounded-full"/>
            <label>Candidate Fullname</label>
            <input type='number' className="border-b border-gray-500 focus:border-indigo-500 focus:outline-none"></input>
          </div>
          <div className="flex p-5 justify-between">
            <img src="" alt="candidate" className="w-12 h-12 rounded-full"/>
            <label>Candidate Fullname</label>
            <input type='number' className="border-b border-gray-500 focus:border-indigo-500 focus:outline-none"></input>
          </div>  
          <div className="flex justify-end m-5 p-5">
          <button className="bg-blue-500 rounded py-3 px-5 text-zinc-200 hover:bg-sky-700 ">
            Submit</button>
          </div>
        </form>
      </div>
    </div>
    {/* )} */}
    
    </>
  )
}

export default Constituency;

