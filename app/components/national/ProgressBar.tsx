import { nationalPercentage } from "@/app/backjob/backend";
import regionalpercentage from '@/app/backjob/regionalpercentage';
import React, { useEffect, useState, Suspense } from 'react';

type ProgressBarProps = {
  label: string;
  value: number;
  color: string;
};

const RegProgressBar: React.FC<ProgressBarProps> = ({ label, value, color}) => {
  // let color = '';
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
};

export default RegProgressBar;

nationalPercentage()