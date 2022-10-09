import { useDispatch } from 'react-redux';
import { useTypedSelector } from './store';
import { ICategory, IProduct } from './store/ecommerce';
import {
	addToCartRequest,
	fetchCartRequest,
	fetchCategoriesRequest,
	fetchProductsRequest,
	fetchSingleCategoryRequest,
	fetchSingleProductRequest
} from './store/ecommerce/actions';

function App() {
	const dispatch = useDispatch();
	const reduxState = useTypedSelector((state) => state.EcommerceReducer);
	const { products, categories } = reduxState;
	return (
		<div>
			{' '}
			<button onClick={() => dispatch(fetchProductsRequest())}>Call</button>
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
		</div>
	);
}

export default App;
