import { StarFilled } from '@ant-design/icons';

const VerticalProductCard = () => {
	return (
		<div className="card-container">
			<div>
				<a href="/" className="card-hover">
					<img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
				</a>
			</div>
			<div className="card-info">
				<div className="card-brand-name">Samsung</div>
				<a href="/" className="card-product-name card-hover">
					Samsung Flip 4
				</a>
				<div className="card-rating">
					4.4
					<StarFilled />
				</div>
				<a href="/" className="card-hover">
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
