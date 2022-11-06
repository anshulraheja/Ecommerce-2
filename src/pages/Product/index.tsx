import { Tabs } from 'antd';
import FilterBar from '../../components/FilterBar';
import { VerticalProductCard } from '../../components/ProductCard';
import './productpage.scss';
const Product = () => {
	const items = [
		{ label: 'Popularity', key: '1' },
		{ label: 'Price--Low to high', key: '2' },
		{ label: 'Price--High to low', key: '3' }
	];
	const handleTabChange = (key: string) => {
		console.log(key);
	};
	return (
		<div className="product-page-container">
			<FilterBar />
			<div className="product-page-content">
				<div className="product-page-info">
					<span className="product-page-product-name">Mobiles</span>
					<span className="product-page-display-info">(Showing 1 – 24 products of 440 products)</span>
				</div>
				<div className="sort-options">
					<span className="sort-header">Sort By</span>
					<Tabs defaultActiveKey="1" items={items} onChange={handleTabChange} className="sort-tabs" />
				</div>
				<div className="product-card-container">
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
					<VerticalProductCard />
				</div>
			</div>
		</div>
	);
};

export default Product;
