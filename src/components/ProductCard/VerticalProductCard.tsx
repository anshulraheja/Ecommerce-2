import { HeartOutlined, StarFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { IProduct } from 'store/ecommerce';
import { addToWishlistRequest } from 'store/ecommerce/actions';
import './ProductCard.scss';

export type IVerticalProductCardProps = {
	product: IProduct;
};
const VerticalProductCard = (props: IVerticalProductCardProps) => {
	const dispatch = useDispatch();
	const { product } = props;
	const { name, image, categoryName, rating, price } = product;

	return (
		<div className="card-container">
			<div className="btn-wishlist-toggle" onClick={() => dispatch(addToWishlistRequest(product))}>
				<HeartOutlined />
			</div>
			<div style={{ width: '300px' }}>
				<img src={image} />
			</div>

			<div className="card-info">
				<div className="card-brand-name">{categoryName}</div>
				<a href="/" className="card-product-name">
					{name}
				</a>
				<div className="card-rating">
					{rating} <StarFilled />
				</div>
				<a href="/">
					<div className="card-price-info">
						<span className="card-actual-price">Rs {price.toLocaleString('en-IN')}</span>
						{/* <span className="card-original-price">600000</span> */}
						{/* <span className="card-percent-off">60% off</span> */}
					</div>
				</a>
			</div>
		</div>
	);
};

export default VerticalProductCard;
