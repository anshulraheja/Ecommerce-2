import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import { RouteComp } from './routes/Routes';
import { store } from './store';
import './styles/default.scss';
const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Router>
				<>
					<RouteComp />
					<ToastContainer
						position="bottom-center"
						autoClose={2000}
						hideProgressBar={true}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="dark"
					/>
				</>
			</Router>
		</Provider>
	);
};

export default App;
