import { IProduct } from 'store/ecommerce';

// to find max value of attribute in array of object
export const maxPriceInProducts = (arrOfObj: IProduct[]) => {
	let maxValue = Number.MIN_VALUE;
	for (let i = 0; i < arrOfObj?.length; i++) {
		if (arrOfObj[i]?.price > maxValue) {
			maxValue = arrOfObj[i]?.price;
		}
	}
	return maxValue;
};

// to find min value of attribute in array of object
export const minPriceInProducts = (arrOfObj: IProduct[]) => {
	const minValue = Math?.min?.apply(
		null,
		arrOfObj.map((ele) => ele?.price)
	);
	return minValue;
};
