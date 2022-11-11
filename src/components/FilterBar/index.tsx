import { Checkbox, Radio, RadioChangeEvent, Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { IProductPageInitialState } from 'pages/Product';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'store';
import { IProduct } from 'store/ecommerce';
import { updateFilterProducts } from 'store/ecommerce/actions';
import { maxPriceInProducts, minPriceInProducts } from 'utils/common';
import './FilterBar.scss';

const SLIDER_MARK: number = 5;
export type IFilterBarProps = {
	products: IProduct[];
	setProductPageState: any;
	productPageState: IProductPageInitialState;
};
export type IFilterInitialState = {
	maxSliderPrice: number;
	minSliderPrice: number;
	sliderMarks: SliderMarks;
};
const filterInitialState: IFilterInitialState = {
	maxSliderPrice: 0,
	minSliderPrice: 0,
	sliderMarks: {}
};
const FilterBar = (props: IFilterBarProps) => {
	const dispatch = useDispatch();
	const { products, setProductPageState, productPageState } = props;
	const [filterState, setFilterState] = useState(filterInitialState);
	const reduxState = useTypedSelector((state) => state);
	const { categories } = reduxState.EcommerceReducer;

	useEffect(() => {
		const maxPrice: number = maxPriceInProducts(products);
		const minPrice: number = minPriceInProducts(products);
		const marker: number = (maxPrice - minPrice) / SLIDER_MARK;
		const sliderMarkerObj: SliderMarks = {};
		for (let i = 0; i <= SLIDER_MARK; i++) {
			const s = `${parseInt(`${minPrice + marker * i}`)}`;
			sliderMarkerObj[s] = '.';
		}
		setFilterState({
			...filterState,
			maxSliderPrice: maxPrice,
			minSliderPrice: minPrice,
			sliderMarks: sliderMarkerObj
		});
	}, [products]);

	const radioOnChange = (e: RadioChangeEvent) => {
		console.log('radio checked', e.target.value);
	};

	const priceSliderHandler = (value: [number, number]) => {
		dispatch(updateFilterProducts({ price: value }));
	};

	const categoryChangeHandler = (checkedValues: CheckboxValueType[]) => {
		dispatch(updateFilterProducts({ selectedCategory: checkedValues }));
	};

	return (
		<div className="filter-container">
			<div className="filter-content">
				<section className="filter-section">
					<div className="filter-header">
						<span className="filter-header-text">Filters</span>
						<span className="filter-btn-clear-all">Clear All</span>
					</div>
				</section>
				<section className="filter-section">
					<div className="filter-header">
						<span className="filter-subheader-text">Price</span>
						<span className="filter-btn-clear-all">Clear</span>
					</div>
					{filterState.minSliderPrice != 0 && (
						<Slider
							range
							defaultValue={[filterState.minSliderPrice, filterState.maxSliderPrice]}
							marks={filterState.sliderMarks}
							max={filterState.maxSliderPrice}
							min={filterState.minSliderPrice}
							onAfterChange={priceSliderHandler}
						/>
					)}
				</section>
				<section className="filter-section">
					<div className="filter-header">
						<span className="filter-subheader-text">Brand</span>
						<span className="filter-btn-clear-all">Clear</span>
					</div>
					<Checkbox.Group style={{ width: '100%' }} onChange={categoryChangeHandler} className="checkbox-group">
						{categories?.map((ele, index) => (
							<Checkbox key={index} value={ele.categoryName}>
								{ele.categoryName}
							</Checkbox>
						))}
					</Checkbox.Group>
				</section>
				<section className="filter-section">
					<div className="filter-header">
						<span className="filter-subheader-text">Customer Rating</span>
						<span className="filter-btn-clear-all">Clear</span>
					</div>
					<Radio.Group onChange={radioOnChange} value={1} className="checkbox-group">
						<Radio value={1}>4* & above</Radio>
						<Radio value={2}>3* & above</Radio>
					</Radio.Group>
				</section>
			</div>
		</div>
	);
};

export default FilterBar;
