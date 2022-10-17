import { useDispatch } from 'react-redux';
import './App.scss';
import { useTypedSelector } from './store';
import { loginRequest, signupRequest } from './store/auth/actions';
import { ICategory, IProduct } from './store/ecommerce';
import {
	addToCartRequest,
	fetchCartRequest,
	fetchCategoriesRequest,
	fetchProductsRequest,
	fetchSingleCategoryRequest,
	fetchSingleProductRequest
} from './store/ecommerce/actions';
import './styles/default.scss';

function App() {
	const dispatch = useDispatch();
	const reduxState = useTypedSelector((state) => state.EcommerceReducer);
	const { products, categories } = reduxState;
	return (
		<div className="container">
			{' '}
			<button className="btn" onClick={() => dispatch(fetchProductsRequest())}>
				Call
			</button>
			<button onClick={() => dispatch(fetchCategoriesRequest())}>Categories</button>
			<button onClick={() => dispatch(fetchCartRequest())}>Fetch Cart</button>
			<div>
				{products?.map((ele: IProduct) => (
					<div key={ele._id}>
						{ele.title}
						<button onClick={() => dispatch(fetchSingleProductRequest(ele._id))}>{ele._id}</button>{' '}
						<button onClick={() => dispatch(addToCartRequest(ele))}>Add to cart</button>
					</div>
				))}
			</div>
			<div>
				{categories?.map((ele: ICategory) => (
					<div>
						<button onClick={() => dispatch(fetchSingleCategoryRequest(ele._id))}>{ele.categoryName}</button>
					</div>
				))}
			</div>
			<div>
				<button onClick={() => dispatch(signupRequest({ name: 'anshul', email: 'xyz@gmail.com', password: 'abc' }))}>
					Signup
				</button>
			</div>
			<div>
				<button onClick={() => dispatch(loginRequest({ email: 'adarshbalika@gmail.com', password: 'adarshbalik' }))}>
					Login
				</button>
			</div>
		</div>
	);
}

export default App;
