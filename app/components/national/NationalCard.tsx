import React, { Suspense, useEffect, useState } from 'react'
import RegProgressBar from './ProgressBar'
import { nationalPercentage, getPercentage} from "@/app/backjob/percentage";

const NationalCard = () => {

  type PercentagesState = { [key: string]: number };
  const [percentages, setPercentages] = useState<PercentagesState>({});

  useEffect(() => {
    async function fetchPercentages() {
      try {
        const resp = await nationalPercentage();
        setPercentages(resp); // Update the state with the fetched percentages
      } catch (error) {
        console.error('Error fetching percentages:', error);
      }
    }

    fetchPercentages();

    // Optionally, you can use a setTimeout to fetch data periodically
    const fetchInterval = setInterval(fetchPercentages, 1000); // 10 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(fetchInterval);
    // console.log(fetchInterval)
  }, []);


  
  return (
    <>
    <Suspense fallback={<div>Loading percentages...</div>}>
      {Object.entries(percentages).map(([label, value]) => {
        let color = '';

        if (value >= 0 && value < 15) {
          color = 'bg-red-500';
        } else if (value >= 16 && value < 20) {
          color = 'bg-red-200';
        } else if (value >= 20 && value < 50) {
          color = 'bg-yellow-400';
        } else {
          color = 'bg-green-400';
        }

        return (
          <div key={label} className="mb-4 ">
          <div className="flex col-span-1 items-center justify-between mb-1">
            <span className="text-sm font-medium">{label}</span>
            <span className="text-sm font-medium">{`${value}%`}</span>
          </div>
          <div className="h-4 bg-gray-200 rounded-full">
            <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }}></div>
          </div>
        </div>
        );
      })}
          </Suspense>
          </>
  )
}

export default NationalCard

