import { Route, Routes } from 'react-router-dom';
import AppLayout from '../pages';
import Auth from '../pages/Auth';
import Cart from '../pages/Cart';
import Homepage from '../pages/Homepage';
import Product from '../pages/Product';
import Wishlist from '../pages/Wishlist';
import PrivateRoute from './PrivateRoute';

// interface IProps {
// 	routes: IRoute[];
// }

export const RouteComp = () => {
	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route index element={<Homepage />} />
				<Route path="products" element={<Product />} />
				<Route path="product/:productId" element={<Product />} />
				<Route
					path="wishlist"
					element={
						<PrivateRoute>
							<Wishlist />
						</PrivateRoute>
					}
				/>
				<Route
					path="cart"
					element={
						<PrivateRoute>
							<Cart />
						</PrivateRoute>
					}
				/>
			</Route>
			<Route path="/login" element={<Auth />} />
			<Route path="/signup" element={<Auth />} />
			<Route path="*" element={<div>Error Page</div>} />
		</Routes>
	);
};

// export const RouteComp: React.FC<IProps> = ({ routes }) => {
// 	return <Routes>{routes && routes.map((route: IRoute) => <RouteWithSubRoutes key={route.path} {...route} />)}</Routes>;
// };

//export default Router;
