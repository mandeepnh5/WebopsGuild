import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar1 from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex  rounded-lg overflow-hidden bg-black bg-clip-padding backdrop-filter backdrop-blur-lg bg-opac w-[100vw] h-[100vh]'>
  <Sidebar1 />
  
  <MessageContainer />
</div>

	);
};
export default Home;
