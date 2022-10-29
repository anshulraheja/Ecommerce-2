import { Navigate, useLocation } from 'react-router-dom';

export type IPrivateRouteChildrenProps = {
	children: JSX.Element;
};

const PrivateRoute = ({ children }: IPrivateRouteChildrenProps) => {
	//   const {token} = useSelector((state) => state.auth);
	const token = true;
	const location = useLocation();
	return token ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
