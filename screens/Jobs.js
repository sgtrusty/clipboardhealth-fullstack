//import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react';

import Layout from 'components/Layout';
import JobsSearchBar from 'components/Jobs/SearchBar';
import JobsSideBar from 'components/Jobs/SideBar';
import JobsList from 'components/Jobs/List';
import SortBar from 'components/Jobs/Sorting/Bar';
import Spinner from 'components/UI/Spinner';
import DepartmentsDialog from 'components/UI/DepartmentsDialog';
import Notification from 'components/UI/Notification';

import { JobService } from 'services/jobs.service';
import { FilterService} from 'services/filter.service';
import useDebounce from 'hooks/debounce';

const defaultFilters = {
  job_type: [],
  work_schedule: [],
  experience: [],
  department: [],
};

const defaultNotification = {
  show: false,
  type: 'error',
  message: '',
};

const contextProvisional = { // TODO: refactor me into a context class/lib
  total_jobs: 0,
  jobs_reduced: []
}

// TODO: move all this conglomerated code (business logic) to computational/renderer component
export default function Jobs() {
	const [keyword, setKeyword] = useState('');
	const debouncedKeyword = useDebounce(keyword, 500); // online-first only
		
	const [notification, setNotification] = useState(defaultNotification);
	const [context, setContext] = useState(contextProvisional);

	const [isDepartmentDialogOpen, setDepartmentDialogOpen] = useState(false);

	const [isFiltersLoading, setFiltersLoading] = useState(false);
	const [filters, setFilters] = useState(defaultFilters);
	const loadFilters = async () => {
		setFiltersLoading(true);
		try {
		  const res = await FilterService.filters();
		  setFilters(res);
		} catch (e) {
		  showNotification('error', 'Failed to fetch data from the server.');
		} finally {
		  setFiltersLoading(false);
		}
	};

	const [isJobsLoading, setJobsLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [totalJobCount, setTotalJobCount] = useState(0);
	const loadJobs = async () => {
		setJobsLoading(true);
		try {
		  const res = await JobService.query(keyword); // TODO: sortKey and sortKeyOrder
		  setJobs(res);
		  let total_jobs = res.reduce((sum, job) => sum + job.total_jobs_in_hospital, 0),
				jobs_reduced = res.reduce( (prev, item) => [...prev, ...item['items']], []);
		  setContext({total_jobs: total_jobs, jobs_reduced: jobs_reduced});
		  setTotalJobCount(total_jobs);
		} catch (e) {
		  showNotification('error', 'Failed to fetch data from the server.');
		} finally {
		  setJobsLoading(false);
		}
	};
	
	const loadJobsOnce = async () => {
		if(jobs.length === 0) {
			await loadJobs();
		}
		applyFilterSearch()
		if(filterApplied)
			applyFilterSort() // TODO: add online-first support w/ debouncedKeyword
	}
	
	const [searchApplied, setSearchApplied] = useState(false);
	const setSearchParam = (param) => {
		setKeyword(param);
		setListUpdate(true);
		if(param !== '') {
			setSearchApplied(true);
		} else {
			setSearchApplied(false);
		}
	}
	
	const [searchedJobs, setSearchedJobs] = useState([]);
	const applyFilterSearch = () => {
		if(!searchApplied) {
			  if(totalJobCount != context.total_jobs)
				setTotalJobCount(context.total_jobs);
			  return;
		}
		
		// filter job items by job_title, hospital name and city name
		let jobs_searched = context.jobs_reduced;
		
		let keyword_lower = keyword.toLowerCase();
		jobs_searched = jobs_searched.filter(jobItem => {
			if (jobItem.name.toLowerCase().indexOf(keyword_lower) !== -1) { return true; }
			if (jobItem.job_title.toLowerCase().indexOf(keyword_lower) !== -1) { return true; }
			if (jobItem.city.toLowerCase().indexOf(keyword_lower) !== -1) { return true; }
			if (jobItem.type.toLowerCase().indexOf(keyword_lower) !== -1) { return true; }
			return false;
		});
		setSearchedJobs(jobs_searched);
		setTotalJobCount(jobs_searched.length);
	};
	
	const [sortKeysOrder, setSortKeysOrder] = useState([]);
	const [filterApplied, setFilterApplied] = useState(false);
	
	const [sortKeys, setSortKeys] = useState({});
	const [sortedJobs, setSortedJobs] = useState([])
    const applyFilterSort = () => {
		let jobs_sorted = searchApplied ? searchedJobs : context.jobs_reduced;
	
		let sortKeyOrdersSize = sortKeysOrder.length;
		jobs_sorted.sort( (a, b) => {
			let ret = 0;
			// TODO: optimize me with `entry_key`'s table
			sortKeysOrder.forEach((entry_key, entry_it) => {
				let entry_value = sortKeys[entry_key];
				let multiplier = sortKeyOrdersSize-entry_it;
				if(entry_value == "asc") {
					if(a[entry_key] < b[entry_key]) { ret += -1*multiplier }
					if(a[entry_key] > b[entry_key]) { ret += 1*multiplier }
				} else if(entry_value == "desc") {
					if(a[entry_key] < b[entry_key]) { ret += 1*multiplier }
					if(a[entry_key] > b[entry_key]) { ret += -1*multiplier }
				}
				//if(ret !== 0) return;
			});
			return ret;
		})

		setSortedJobs(jobs_sorted);
	};

	useEffect(() => {
		loadFilters();
	}, []);

	// // server first solution
	// useEffect(() => {
	// loadJobs();
	// }, [debouncedKeyword]);
	
	const [listUpdate, setListUpdate] = useState(true);
	// cache first
	useEffect(() => {
		if(listUpdate) {
			setListUpdate(false);
			loadJobsOnce();
		}
	}, [listUpdate]);
	
	const [sortLast, setSortLast] = useState({key:null, state:null});
	useEffect(() => {
		if(sortLast.key == null) return;
		
		let prevState = sortKeys;
		prevState[sortLast.key] = sortLast.state;
		setSortKeys(prevState);
		let sortKeyIndex = sortKeysOrder.indexOf(sortLast.key);
		if(sortLast.state !== null) {
			if(sortKeyIndex === -1) {
				let _sortKeysOrder = sortKeysOrder;
				_sortKeysOrder.push(sortLast.key);
				setSortKeysOrder(_sortKeysOrder);
			}
		} else {
			let _sortKeysOrder = sortKeysOrder;
			_sortKeysOrder.splice(sortKeyIndex, 1);
			setSortKeysOrder(_sortKeysOrder);
		}
		if(sortKeysOrder.length == 0)
			setFilterApplied(false);
		else if(!filterApplied)
			setFilterApplied(true);
			
		setListUpdate(true);
	}, [sortLast]);

	const showNotification = (type, message) => {
	setNotification({ show: true, type, message });
	};

	return (
	<Layout>
	  <div className="w-full md:pt-20 divide md:divide-0">
		<section className="lg:mt-2 lg:mx-4 md:border">
		  <JobsSearchBar keyword={keyword} onKeywordChange={setSearchParam}/>
		</section>
		<section className="lg:mt-4 lg:mx-4 flex">
		  <div className="w-1/5 hidden lg:block">
			<JobsSideBar jobTypes={filters.job_type}
						 departments={filters.department}
						 workSchedules={filters.work_schedule}
						 experiences={filters.experience}
						 onShowMoreDepartments={() => setDepartmentDialogOpen(true)}
						 isLoading={isFiltersLoading}/>
		  </div>
		  <div className="ml-0 lg:ml-4 mb-8 lg:mb-4 w-full bg-white border">
			<div className="mt-4 md:mt-8 ml-4 mr-8 flex justify-between text-sm">
			  <div>
				<span className="font-bold">{isJobsLoading ? "Loading" : totalJobCount.toLocaleString()} </span><span>job postings</span>
			  </div>
			  <SortBar setSortLast={setSortLast} />
			</div>
			{ isJobsLoading ? <div className="flex justify-center items-center h-48"><Spinner size={10}/></div> : <JobsList jobs={searchApplied ? searchedJobs : filterApplied ? sortedJobs : jobs} raw_list={filterApplied || searchApplied}/> }
		  </div>
		</section>
	  </div>
	  { isDepartmentDialogOpen && <DepartmentsDialog departments={filters.department} onClose={() => setDepartmentDialogOpen(false)}/> }
	  { notification.show && <Notification {...notification} onClose={() => setNotification({ show: false })}/> }
	</Layout>
	);
}
