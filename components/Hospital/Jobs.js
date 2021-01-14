import React from 'react';

import HospitalJobCard from './JobCard';

const HospitalJobs = ({ jobs }) => {
  return (<div className="border-b-1 border-gray-400 mt-2">
    {jobs.map((job, index) => <HospitalJobCard job={job} key={index}/>)}
  </div>);
};

export default HospitalJobs;
