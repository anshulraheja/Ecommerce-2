import { Button } from 'antd/lib/radio';
import './RemoveFromWishlistConfirmation.scss';

const RemoveFromWishlistConfirmation = () => {
	return (
		<div className="wl-modal-container">
			<div className="wl-modal-content">
				<div style={{ maxHeight: '340px' }}>
					<span>Are you sure you want to remove this product?</span>
					<div className="wl-modal-btn-container">
						<Button className="wl-modal-btn-cancel">CANCEL</Button>
						<Button className="wl-modal-btn-remove">YES, REMOVE</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RemoveFromWishlistConfirmation;
