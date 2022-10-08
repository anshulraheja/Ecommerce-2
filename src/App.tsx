import { useDispatch } from 'react-redux';
import { useTypedSelector } from './store';
import { IProduct } from './store/ecommerce';
import { fetchProductsRequest, fetchSingleProductRequest } from './store/ecommerce/actions';

function App() {
  const dispatch = useDispatch();
  const reduxState = useTypedSelector((state) => state.EcommerceReducer);
  const { products } = reduxState;
  return (
    <div>
      {' '}
      <button onClick={() => dispatch(fetchProductsRequest())}>Call</button>
      <div>
        {products?.map((ele: IProduct) => (
          <div key={ele._id}>
            {ele.title}
            <button onClick={() => dispatch(fetchSingleProductRequest(ele._id))}>{ele._id}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
