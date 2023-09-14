// components/ProgressBar.tsx
import {getPercentage} from '@/app/backjob/backend';
import React, { useEffect, useState } from 'react';

type ProgressBarProps = {
  label: string;
  value: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ label, value }) => {
  let color = '';

  if (value >= 0 && value < 15) {
    color = 'bg-red-800';
  } else if (value >= 16 && value < 20) {
    color = 'bg-red-500';
  } else if(value >= 20 && value < 35) {
    color = 'bg-purple-500';
  } else if (value >= 35 && value < 50) {
    color = 'bg-yellow-500';
  }else{
    color ='bg-green-400';
  }
  const [percentages, setPercentages] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    async function fetchPercentages() {
      try {
        const response = await getPercentage(); // Make the API call to fetch the percentages
        setPercentages(response); // Update the state with the fetched percentages
      console.log(response)
      } catch (error) {
        console.error('Error fetching percentages:', error);
      }
    }   
    
     fetchPercentages();
     console.log(percentages)
  }, [percentages]);

  return (   
      <div className="mb-4 "> 
      <div className="flex col-span-1 items-center justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{`${value}%`}</span>
      </div>
      <div className="h-4 bg-gray-200 rounded-full">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
     
  
  )
};

export default ProgressBar;
