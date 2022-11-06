import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './appLayout.scss';
const AppLayout = () => {
	return (
		<div className="app-layout">
			<Navbar />
			<div>
				<Outlet />
			</div>
		</div>
	);
};

export default AppLayout;
