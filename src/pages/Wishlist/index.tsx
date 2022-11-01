import { WishlistProductCard } from '../../components/ProductCard';
import './wishlist.scss';
const Wishlist = () => {
	return (
		<div className="wishlist-page-container">
			<div className="wishlist-page-content">
				<div style={{ flex: '1 1 25%' }}>
					<div>
						<div className="name-card">
							<div className="name-card-content">
								<img
									src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
									alt="profile"
									className="name-card-img"
								/>
								<div className="name-card-profile-name">
									<div style={{ fontSize: '12px' }}>Hello,</div>
									<div className="profile-name">Anshul Raheja</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="wishlist-bar">
					<div style={{ minHeight: '300px' }}>
						<div style={{ background: '#fff' }}>
							<div className="wishlist-header">
								<span>Wishlist (6)</span>
							</div>
							<WishlistProductCard />
							<WishlistProductCard />
							<WishlistProductCard />
							<WishlistProductCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Wishlist;
