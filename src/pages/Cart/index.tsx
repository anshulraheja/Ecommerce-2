import './cart.scss';
const Cart = () => {
	return (
		<div className="cart-page-container">
			<div className="cart-page-content">
				{/* <>
					<div className="cart-bar">
						<div className="address-row">
							<div className="flex flex-ac flex-j-fs">
								<div className="deliver-details">
									<div className="flex">
										<div className="deliver-to">Deliver to:</div>
										<div className="deliver-to-name">Anshul Raheja</div>
									</div>
									<div className="deliver-to-address">
										D-81 (3rd Floor ) Amar Colony,, Lajpat Nagar -4, New Delhi
									</div>
								</div>
								<div className="change-btn-container">
									<button className="btn-change-delivery-details">Change</button>
								</div>
							</div>
						</div>
						<div>
							<CartProductCart />
							<CartProductCart />
							<CartProductCart />
						</div>
						<div className="btn-place-order-container">
							<div className="btn-place-order-content">
								<button className="btn-place-order">Place order</button>
							</div>
						</div>
					</div>
					<div style={{ flex: '1 1 15%' }}>
						<div className="price-bar">
							<span className="price-bar-title">Price Details</span>
							<div className="price-bar-content">
								<div className="price-bar-row">
									<span>Price (4 items)</span>
									<span>98745</span>
								</div>
								<div className="price-bar-row">
									<span>Discount</span>
									<span className="discount-price">-15000</span>
								</div>
								<div className="price-bar-row">
									<span>Delivery Charges</span>
									<span className="discount-price">FREE</span>
								</div>
								<div>
									<div className="price-bar-row total-amount">
										<span>Total Amount</span>
										<span>357378</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</> */}
				<>
					<div className="cart-empty">
						<img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/mywishlist-empty_39f7a5.png" />
						<span className="cart-empty-title">Your cart is empty</span>
						<span className="cart-empty-description">Add items to it now</span>
						<button className="btn-shop-now">Shop now</button>
					</div>
				</>
			</div>
		</div>
	);
};

export default Cart;
