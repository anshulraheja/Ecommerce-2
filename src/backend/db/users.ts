import { v4 as uuid } from 'uuid';
import { formatDate } from '../utils/authUtils';
import { IUser } from './types';
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users: IUser[] = [
	{
		_id: uuid(),
		firstName: 'Anshul',
		lastName: 'Raheja',
		email: 'email@gmail.com',
		password: 'password',
		createdAt: formatDate(),
		updatedAt: formatDate()
	}
];
