import './ProductCard.scss';

const CartProductCart = () => {
	return (
		<div className="c-product-card-container">
			<div className="flex">
				<a href="/" className="c-card-img-container">
					<div className="c-card-img-content">
						<img
							className="c-card-img"
							src="https://rukminim1.flixcart.com/image/224/224/xif0q/t-shirt/i/p/0/-original-imaghpncmhhtgjgg.jpeg?q=90"
							alt=""
						/>
					</div>
				</a>
				<div className="c-card-description-container">
					<div className="c-card-description-content">
						<a href="" className="c-card-description-title">
							Samsumg S1 Ultra
						</a>
					</div>
					<div className="c-card-description-subtitle">Samsung</div>
					<div className="c-card-price-info">
						<span className="c-card-actual-price">Rs 700000</span>
						<span className="c-card-original-price">600000</span>
						<span className="c-card-percent-off">60% off</span>
					</div>
				</div>
				<div className="c-card-delivery-info">
					<div className="c-card-delivery-content">Delivery in 2 days</div>
				</div>
			</div>
			<div className="c-card-cta-container">
				<div>
					<div className="c-card-modify-qty">
						<button className="btn-qty">-</button>
						<div>1</div>
						<button className="btn-qty">+</button>
					</div>
				</div>
				<div className="c-card-cta">
					<div className="btn-save-for-later">Save for later</div>
					<div className="btn-save-for-later">Remove</div>
				</div>
			</div>
		</div>
	);
};

export default CartProductCart;
