import { v4 as uuid } from 'uuid';
import { ICategories } from './types';
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories: ICategories[] = [
	{
		_id: uuid(),
		categoryName: 'Samsung'
	},
	{
		_id: uuid(),
		categoryName: 'Apple'
	},
	{
		_id: uuid(),
		categoryName: 'Oneplus'
	},
	{
		_id: uuid(),
		categoryName: 'Pixel'
	}
];
