import React, { Suspense, useEffect, useState } from 'react'
import RegProgressBar from './ProgressBar'
import regionalpercentage from '@/app/backjob/regionalpercentage';

const RegionalCards = () => {


  const [percentages, setPercentages] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    async function fetchPercentages() {
      try {
        const response = await regionalpercentage(); // Make the API call to fetch the percentages
        setPercentages(response); // Update the state with the fetched percentages
        // console.log(response);
      } catch (error) {
        console.error('Error fetching percentages:', error);
      }
    }

    fetchPercentages();
    // console.log(percentages);
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
          <RegProgressBar key={label} label={label} value={value} color={color} />
        );
      })}
          </Suspense>
          </>
  )
}

export default RegionalCards

