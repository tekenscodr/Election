"use client"
import React, { useEffect, useState } from 'react';
import { constituencyvotes } from '@/app/backjob/backend';

interface Vote {
  _id: string;
  agent: string;
  votes: {
    name: string;
    count: number;
    _id: string;
  }[];
}

const Votes: React.FC = () => {
  const [constituencyVotes, setConstituencyVotes] = useState<Vote[]>([]);

  useEffect(() => {
    async function fetchConstituency() {
      try {
        const resp = await constituencyvotes();
        setConstituencyVotes(resp); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchConstituency();

    // Optionally, you can use a setTimeout to fetch data periodically
    const fetchInterval = setInterval(fetchConstituency, 1000); // 10 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(fetchInterval);
  }, []);

  // Assuming votesData contains the expected structure
  const candidateNames = Array.from(
    new Set(constituencyVotes.flatMap((vote) => vote.votes.map((v) => v.name)))
  );

  return (
    <>
      <div className='bg-white h-screen w-full'>
        <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className='px-6 py-3'>ID</th>
              <th className='px-6 py-3'>Constituency</th>
              {candidateNames.map((name) => (
                <th key={name} className='px-6 py-3'>
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {constituencyVotes.map((constituency) => (
              <tr key={constituency._id} className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
                <td className='px-6 py-4'>{constituency._id.slice(0, 4)}</td>
                <td className='px-6 py-4'>{constituency.agent}</td>
                {constituency.votes.map((v, vIndex) => (
                  <td key={vIndex}>{v.count}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Votes;
