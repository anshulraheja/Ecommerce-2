import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
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
				</>
			</Router>
		</Provider>
	);
};

export default App;
