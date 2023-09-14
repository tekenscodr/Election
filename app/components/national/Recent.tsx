import { constituencyvotes } from '@/app/backjob/backend';
import React, { Suspense, useEffect, useState } from 'react'
import { RxSpeakerModerate } from 'react-icons/rx'

const Recent = () => {
    interface VoteState {
        _id: string;
        agent: string;
        votes: {
            name: string,
            count: number,
            _id: string
        };
    }
    const [constituencyVotes, setConstituencyVotes] = useState<VoteState[]>([]);
  
    useEffect(() => {
        async function fetchConstituency() {
          try {
            const resp = await constituencyvotes();
            setConstituencyVotes(resp); // Update the state with the fetched percentages
          } catch (error) {
            console.error('Error fetching percentages:', error);
          }
        }
        fetchConstituency();
        // Optionally, you can use a setTimeout to fetch data periodically
        const fetchInterval = setInterval(fetchConstituency, 10000); // 100 seconds
        // Cleanup the interval when the component unmounts
        return () => clearInterval(fetchInterval);
        // console.log(fetchInterval)
      }, []);
  return (
   <>
    <Suspense fallback={<div>Loading percentages...</div>}>  
     <h1 className='p-2 text-black text-lg text-justify font-bold'>Recent Uploads</h1> 
     {!constituencyVotes &&<p className='mt4'>No Votes Yet</p>}
    <ul>
    {constituencyVotes.map((constituency) =>(
      <li key={constituency._id} className='bg-grey-50 hover:bg-grey-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'>
        <div className='bg-blue-200'> 
        <RxSpeakerModerate className='text-blue-800 '/> </div>
        <div className='pl-4'>
          <p className='text-black font-bold'>{constituency.agent}</p>
          <p className='text-gray-700'>just now</p>
        </div>
      </li>
    ))}
    </ul>
    
    </Suspense>
   </>
  )
}

export default Recent