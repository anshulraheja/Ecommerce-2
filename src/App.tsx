import { useDispatch } from 'react-redux';
import { useTypedSelector } from './store';
import { ICategory, IProduct } from './store/ecommerce';
import {
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
			<div>
				{products?.map((ele: IProduct) => (
					<div key={ele._id}>
						{ele.title}
						<button onClick={() => dispatch(fetchSingleProductRequest(ele._id))}>{ele._id}</button>
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
