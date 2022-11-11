import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'store';
import { IProduct } from 'store/ecommerce';
import { fetchProductsRequest } from 'store/ecommerce/actions';
import FilterBar from '../../components/FilterBar';
import { VerticalProductCard } from '../../components/ProductCard';
import './productpage.scss';

export type IProductPageInitialState = {
	currentProducts: IProduct[];
};
const productPageInitialState: IProductPageInitialState = {
	currentProducts: []
};
const items = [
	{ label: 'Popularity', key: '1' },
	{ label: 'Price--Low to high', key: '2' },
	{ label: 'Price--High to low', key: '3' }
];

const Product = () => {
	const [productPageState, setProductPageState] = useState(productPageInitialState);
	const dispatch = useDispatch();

	const reduxState = useTypedSelector((state) => state);
	const { products, filterData } = reduxState.EcommerceReducer;

	useEffect(() => {
		dispatch(fetchProductsRequest());
	}, []);

	useEffect(() => {
		setProductPageState({
			...productPageState,
			currentProducts: products
		});
	}, [products]);

	const handleTabChange = (key: string) => {
		console.log(key);
	};

	return (
		<div className="product-page-container">
			<FilterBar products={products} setProductPageState={setProductPageState} productPageState={productPageState} />
			<div className="product-page-content">
				<div className="product-page-info">
					<span className="product-page-product-name">Mobiles</span>
					<span className="product-page-display-info">{`Showing 1 – ${
						filterData.isFilter ? filterData?.filterProducts?.length : products?.length
					} products of ${filterData.isFilter ? filterData?.filterProducts?.length : products?.length} products`}</span>
				</div>
				<div className="sort-options">
					<span className="sort-header">Sort By</span>
					<Tabs defaultActiveKey="1" items={items} onChange={handleTabChange} className="sort-tabs" />
				</div>
				<div className="product-card-container">
					{filterData.isFilter
						? filterData?.filterProducts.map((ele) => <VerticalProductCard key={ele._id} product={ele} />)
						: products.map((ele) => <VerticalProductCard key={ele._id} product={ele} />)}
				</div>
			</div>
		</div>
	);
};

export default Product;
