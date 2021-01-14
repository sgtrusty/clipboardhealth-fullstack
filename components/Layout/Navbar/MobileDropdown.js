import Link from 'next/link'

function MobileNavbar({ options = [] }) {
	return (
	<div role="menu" aria-orientation="vertical" aria-labelledby="main-menu" className="z-10 absolute left-0 top-16 bg-white border-2 w-60 rounded-xl lg:hidden">
	  <div className="px-2 pt-2 pb-3 space-y-1 divide-y" role="none">
			{options.map((option, i) => {
			  return (
				<div className="bg-white shadow-xs" key={i}>
				  <div className="py-1">
					<Link href={option.to} passHref>
					  {typeof option.name === 'function' ? option.name() : <a href="#" className="block px-3 py-2 text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">{option.name}</a>}
					</Link>
				  </div>
				</div>
			  );
			})}
	  </div>
	</div>
	)
}

 export default MobileNavbar;