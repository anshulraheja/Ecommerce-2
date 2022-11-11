import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchCategoriesRequest } from 'store/ecommerce/actions';
import Navbar from '../components/Navbar';
import './appLayout.scss';
const AppLayout = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategoriesRequest());
	}, []);

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
