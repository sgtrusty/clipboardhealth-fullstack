import React from 'react';

const HospitalJobDetail = ({ job }) => {
  return (<div className="py-4 text-gray-700 block lg:flex">
    <div className="w-full lg:w-3/4">
      <div className="block md:flex">
        <div className="w-full md:w-1/2 font-bold text-sm md:text-base">Department:</div>
        <div className="w-full md:w-2/5 text-sm md:text-base">{job.department.join(', ')}</div>
      </div>
      <div className="block md:flex mt-3">
        <div className="w-full md:w-1/2 font-bold text-sm md:text-base">Hours / shifts:</div>
        <div className="w-full md:w-2/5 text-sm md:text-base"> {job.hours[0]} hours / {job.work_schedule}</div>
      </div>
      <div className="block md:flex mt-3">
        <div className="w-full md:w-1/2 font-bold text-sm md:text-base">Summary</div>
        <div className="w-full md:w-2/5 text-sm md:text-base"> {job.description}</div>
      </div>
    </div>
    <div className="flex flex-row lg:flex-col items-center lg:items-end justify-left lg:justify-center w-full lg:w-1/4 space-y-0 lg:space-y-4 space-x-4 lg:space-x-0 mt-4 lg:mt-0">
      <button className="px-4 py-2 font-lg focus:outline-none bg-blue-400 rounded-lg text-white">Job details</button>
      <button className="px-4 py-2 font-lg focus:outline-none bg-white rounded-lg border-2 border-blue-400 text-blue-400">Save job</button>
    </div>
  </div>);
};

export default HospitalJobDetail;
