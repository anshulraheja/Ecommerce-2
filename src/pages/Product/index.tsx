import { Tabs } from 'antd';
import { VerticalProductCard } from '../../components/ProductCard';
import './productpage.scss';
const Product = () => {
	const items = [
		{ label: 'Tab 1', key: '1' },
		{ label: 'Tab 2', key: '2' },
		{ label: 'Tab 3', key: '3' }
	];
	const handleTabChange = (key: string) => {
		console.log(key);
	};
	return (
		<div className="productpage-container">
			<div>Filter component</div>
			<div>
				<div>
					<span>Mobiles</span>
					<span>(Showing 1 – 24 products of 440 products)</span>
				</div>
				<div>
					<Tabs defaultActiveKey="1" items={items} onChange={handleTabChange} />
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
