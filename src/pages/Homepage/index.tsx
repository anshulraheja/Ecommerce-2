import { Carousel } from 'antd';
import CategoryNavbar from '../../components/CategoryNavbar';
import './homepage.scss';

const item = [
	{
		key: 1
	},
	{ key: 2 },
	{ key: 3 },
	{ key: 4 }
];

const Homepage = () => {
	return (
		<div>
			<CategoryNavbar />
			<div className="homepage-container">
				<div className="carousel-container">
					<Carousel autoplay>
						{item?.map((ele, index) => (
							<div key={index}>
								<h3 className="carousel">{ele.key}</h3>
							</div>
						))}
					</Carousel>
				</div>
				<div className="home-img-container">
					<div className="home-img-box"></div>
					<div className="home-img-box"></div>
					<div className="home-img-box"></div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
