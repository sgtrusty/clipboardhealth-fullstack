import React from 'react';

import JobCard from './Card';
import HospitalJobCard from 'components/Hospital/JobCard';

const JobsList = ({ jobs, raw_list = false }) => {
	if(raw_list) {
		return (<div className="w-full px-4 pt-6 md:pt-8 cursor-pointer mt-2">
			{jobs.length > 0 && jobs.map((job, index) => <HospitalJobCard job={job} key={index}/>)}
		</div>);
	}
	return (<div className="w-full px-4 pt-6 md:pt-8 cursor-pointer">
		{jobs.map((job, index) => <JobCard job={job} key={index}/>)}
	</div>);
};

export default JobsList;
