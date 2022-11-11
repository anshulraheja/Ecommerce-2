import { Col, Row } from 'antd';
import { toast } from 'react-toastify';
import { useTypedSelector } from '../../store';
import './categoryNavbar.scss';
const CategoryNavbar = () => {
	const reduxState = useTypedSelector((state) => state);
	const { categories } = reduxState.EcommerceReducer;

	return (
		<div className="category-navbar-container">
			<Row className="category-navbar-row">
				{categories?.map((ele, index) => (
					<Col md={2} key={index} onClick={() => toast('please fill')}>
						{ele.categoryName}
					</Col>
				))}
			</Row>
		</div>
	);
};

export default CategoryNavbar;
