import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const Sidebar1 = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col max-md:w-[40%]'>
			
			<SearchInput />
		
			<Conversations />	
<LogoutButton /> 

			
			
			
		</div>
	);
};

export default Sidebar1;



