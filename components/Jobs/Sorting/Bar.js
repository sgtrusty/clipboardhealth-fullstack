import React, { useEffect, useState } from 'react';
import SortButton from './Button';

const SortBar = ({ setSortLast }) => {
	const [currentSortKeys, setCurrentSortKeys] = useState({}); // TODO: fix redundancy with `screen/Jobs.js` (optionally)
	
  const onChange = (newState, key) => {
	setSortLast({key:key, state:newState});
	let prevState = currentSortKeys;
	prevState[key] = newState;
	setCurrentSortKeys(prevState);
  };
  
  const sort_by = [
    {name: 'Location', value:'city'},
    {name: 'Role', value:'job_title'},
    {name: 'Department', value:'department'},
    {name: 'Education', value:'required_skills'},
    {name: 'Experience', value:'experience'},
  ]
	useEffect(() => {
		let activeSortKeyList = sort_by.reduce( (list, current) => {
			list[current.value] = null;
			return list;
		}, {});
		setCurrentSortKeys(activeSortKeyList)
	}, []);
  return (
    <div className="hidden lg:block space-x-6 flex justify-between">
      <span className="text-gray-400">Sort by</span>
	  {
		sort_by.map( (item, idx) => (
			<SortButton label={item['name']} state={currentSortKeys[item['value']]} setState={newState => onChange(newState, item['value'])}  key={idx}/>
		))
	  }
    </div>)
};

export default SortBar;