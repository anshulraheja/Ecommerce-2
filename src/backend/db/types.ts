export type ICategories = {
	_id: string;
	categoryName: string;
};
export type IProducts = {
	_id: string;
	name: string;
	price: number;
	rating: number;
	image: string;
	categoryName: string;
};
export type IUser = {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	createdAt: string;
	updatedAt: string;
};
