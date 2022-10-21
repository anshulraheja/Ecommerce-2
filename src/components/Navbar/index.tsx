import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Badge, Col, Dropdown, Input, Menu, Row, Space } from 'antd';
import './navbar.scss';
const { Search } = Input;
const Navbar = () => {
	const onSearch = (value: string) => console.log(value);
	const onClick = (e: any) => {
		console.log(e.key);
	};
	const menu = (
		<Menu
			onClick={onClick}
			items={[
				{
					label: 'My Profile',
					key: '1'
				},
				{
					label: 'Orders',
					key: '2'
				},
				{
					label: 'Wishlist',
					key: '3'
				},
				{
					label: 'Logout',
					key: '4'
				}
			]}
		/>
	);
	return (
		<div className="navbar-container">
			<Row className="navbar-container-content">
				<Col md={1} className="nav-title">
					Flipkart
				</Col>
				<Col md={6} className="search-bar" style={{ padding: '0px' }}>
					<Search placeholder="Search for products, brands and more" onSearch={onSearch} enterButton />
				</Col>
				<Col md={1} offset={8}>
					<Dropdown overlay={menu}>
						<a onClick={(e) => e.preventDefault()}>
							<Space className="nav-cta" size={4}>
								Anshul
								<DownOutlined className="nav-down-icon" />
							</Space>
						</a>
					</Dropdown>
				</Col>
				<Col md={1}>
					<Space size={4}>
						<Badge count={5} color="#ff6161" size="small" title={'5 items in your cart'}>
							<Avatar
								icon={<ShoppingCartOutlined style={{ fontSize: '20px' }} />}
								alt="cart"
								size="default"
								className="nav-cart-icon"
							/>
						</Badge>
						<span className="nav-cta">Cart</span>
					</Space>
				</Col>
			</Row>
		</div>
	);
};

export default Navbar;
