import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useTypedSelector } from 'store';

export type IPrivateRouteChildrenProps = {
	children: JSX.Element;
};

const PrivateRoute = ({ children }: IPrivateRouteChildrenProps) => {
	const reduxState = useTypedSelector((state) => state);
	console.log(reduxState);
	//it will not work as page refreshes when we directly chnage url
	const { signupData, loginData } = reduxState.AuthReducer;
	const loginToken = '';
	const signupToken = '';
	useEffect(() => {
		const { encodedToken: loginToken } = loginData;
		const { encodedToken: signupToken } = signupData;
	}, [signupData, loginData]);

	const location = useLocation();
	return loginToken || signupToken ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
