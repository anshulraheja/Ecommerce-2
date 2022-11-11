import { DownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Badge, Dropdown, Input, Menu, Row, Space } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './navbar.scss';
const { Search } = Input;
const Navbar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const onSearch = (value: string) => console.log(value);
	const handleNavigation = (e: any) => {
		switch (e.type) {
			case 'wishlist':
				navigate('/wishlist');
				break;
			case 'logout':
				navigate('/');
				break;
			default:
				navigate('/');
		}
	};
	const menu = (
		<Menu
			onClick={handleNavigation}
			items={[
				// {
				// 	label: 'My Profile',
				// 	key: '1'
				// },
				// {
				// 	label: 'Orders',
				// 	key: '2'
				// },
				{
					label: 'Wishlist',
					key: 'wishlist'
				},
				{
					label: 'Logout',
					key: 'logout'
				}
			]}
		/>
	);
	return (
		<div className="navbar-container">
			<Row className="navbar-container-content">
				<div className="navbar-right">
					<div className="nav-title">
						<Link to="/">Flipkart</Link>
					</div>
					<div className="search-bar" style={{ padding: '0px' }}>
						<Search placeholder="Search for products, brands and more" onSearch={onSearch} enterButton />
					</div>
				</div>
				<div className="navbar-left">
					<div>
						<Dropdown overlay={menu}>
							<a onClick={(e) => e.preventDefault()}>
								<Space className="nav-cta" size={4}>
									Anshul
									<DownOutlined className="nav-down-icon" />
								</Space>
							</a>
						</Dropdown>
					</div>
					<div>
						<Dropdown overlay={menu} arrow>
							<Link className="btn-login" to="/login" state={location}>
								Login
							</Link>
						</Dropdown>
					</div>
					<div>
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
					</div>
				</div>
			</Row>
		</div>
	);
};

export default Navbar;
