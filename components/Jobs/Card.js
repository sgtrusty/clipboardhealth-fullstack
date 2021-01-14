import React, { useState } from 'react';

import { getCapsFromFullName } from 'utils/string.util';
import HospitalJobs from 'components/Hospital/Jobs';

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="ml-2 mb-4">
      <div className="flex font-sm items-center justify-left" onClick={() => setExpanded(!expanded)}>
        <div
          className="rounded-lg bg-gray-400 font-semibold text-white py-0.5 w-9 text-center mr-3 text-lg">{getCapsFromFullName(job.name)}</div>
        <div className="w-4/5 md:w-full">{job.total_jobs_in_hospital} jobs for {job.name}</div>
      </div>
      {expanded && <HospitalJobs jobs={job.items}/>}
    </div>
  );
};

export default JobCard;
