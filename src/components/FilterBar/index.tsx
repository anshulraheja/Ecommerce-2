import { Checkbox, Radio, RadioChangeEvent, Slider } from 'antd';
import type { SliderMarks } from 'antd/es/slider';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import './FilterBar.scss';

const FilterBar = () => {
	const marks: SliderMarks = {
		5000: '.',
		10000: '.',
		15000: '.',
		30000: '.'
	};
	const checkboxOnChange = (checkedValues: CheckboxValueType[]) => {
		console.log('checked = ', checkedValues);
	};
	const radioOnChange = (e: RadioChangeEvent) => {
		console.log('radio checked', e.target.value);
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
					<Slider range defaultValue={[5000, 30000]} marks={marks} max={30000} min={5000} />
				</section>
				<section className="filter-section">
					<div className="filter-header">
						<span className="filter-subheader-text">Brand</span>
						<span className="filter-btn-clear-all">Clear</span>
					</div>
					<Checkbox.Group style={{ width: '100%' }} onChange={checkboxOnChange} className="checkbox-group">
						<Checkbox value="A">Samsung</Checkbox>
						<Checkbox value="B">Apple</Checkbox>
						<Checkbox value="C">Mi</Checkbox>
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
