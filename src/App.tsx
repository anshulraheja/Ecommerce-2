import { useDispatch } from 'react-redux';
import { fetchProductsRequest } from './store/ecommerce/actions';

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      {' '}
      <button onClick={() => dispatch(fetchProductsRequest())}>Call</button>
    </div>
  );
}

export default App;
