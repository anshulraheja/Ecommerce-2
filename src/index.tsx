import 'antd/dist/antd.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { makeServer } from './server';

makeServer();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	// with strict mode the component will render twice
	// <React.StrictMode>
	<App />
	//  </React.StrictMode>
);
