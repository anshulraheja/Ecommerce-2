import { HeartOutlined, StarFilled } from '@ant-design/icons';
import './ProductCard.scss';
const VerticalProductCard = () => {
	return (
		<div className="card-container">
			<div className="btn-wishlist-toggle">
				<HeartOutlined />
			</div>
			<div style={{ width: '300px' }}>
				{/* <a href="/"> */}
				<img src="https://rukminim1.flixcart.com/image/416/416/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70" />
				{/* </a> */}
			</div>

			<div className="card-info">
				<div className="card-brand-name">Samsung</div>
				<a href="/" className="card-product-name">
					Samsung Flip 4
				</a>
				<div className="card-rating">
					4.4
					<StarFilled />
				</div>
				<a href="/">
					<div className="card-price-info">
						<span className="card-actual-price">Rs 700000</span>
						<span className="card-original-price">600000</span>
						<span className="card-percent-off">60% off</span>
					</div>
				</a>
			</div>
		</div>
	);
};

export default VerticalProductCard;
