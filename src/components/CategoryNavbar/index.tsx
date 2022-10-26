import { Col, Row } from 'antd';
import './categoryNavbar.scss';
const CategoryNavbar = () => {
	const categories = [
		{
			categoryName: 'Mi'
		},
		{
			categoryName: 'Apple'
		},
		{
			categoryName: 'Samsung'
		},
		{
			categoryName: 'Motorola'
		},
		{
			categoryName: 'Nokia'
		},
		{
			categoryName: 'RealMe'
		}
	];

	return (
		<div className="category-navbar-container">
			<Row className="category-navbar-row">
				{categories?.map((ele, index) => (
					<Col md={2} key={index}>
						{ele.categoryName}
					</Col>
				))}
			</Row>
		</div>
	);
};

export default CategoryNavbar;
