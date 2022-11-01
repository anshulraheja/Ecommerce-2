import { DeleteFilled, StarFilled } from '@ant-design/icons';
import './ProductCard.scss';
const WishlistProductCart = () => {
	const removeFromWishlist = () => {
		console.log('removed');
	};
	return (
		<div style={{ borderBottom: '1px solid #e0e0e0' }}>
			<div className="wl-card-container">
				<div className="wl-card-img-box">
					<img
						src="https://rukminim1.flixcart.com/image/312/312/k1qr5ow0/watch/k/z/z/bq1125-fossil-original-imafh86zh8c8unss.jpeg?q=70"
						alt=""
					/>
				</div>
				<div className="flex sp-bw" style={{ flex: '1' }}>
					<div className="wl-card-description">
						<div className="wl-card-header">FOSSIL Flynn Flynn Analog Watch - For Men</div>
						<div className="wl-card-rating">
							4.4
							<StarFilled />
						</div>
						<div className="wl-card-price-info">
							<span className="wl-card-actual-price">Rs 700000</span>
							<span className="wl-card-original-price">600000</span>
							<span className="wl-card-percent-off">60% off</span>
						</div>
					</div>
					<DeleteFilled className="wl-delete-icon" onClick={removeFromWishlist} />
				</div>
			</div>
		</div>
	);
};

export default WishlistProductCart;
