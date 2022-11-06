import { v4 as uuid } from 'uuid';
import { IProducts } from './types';
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products: IProducts[] = [
	{
		_id: uuid(),
		name: 'SAMSUNG Galaxy Z Fold4 5G',
		price: 164999,
		rating: 5,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667763814/ecommerce/-original-imagh7nz9hfnuc9w_uefqgr.jpg',
		categoryName: 'Samsung'
	},
	{
		_id: uuid(),
		name: 'SAMSUNG Galaxy S22 Ultra 5G',
		price: 108999,
		rating: 5,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667763894/ecommerce/-original-imaggj68pbbezxcr_wgaifp.jpg',
		categoryName: 'Samsung'
	},
	{
		_id: uuid(),
		name: 'SAMSUNG Galaxy Note 20 Ultra 5G',
		price: 98999,
		rating: 4,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667764055/ecommerce/samsung-note-20-canvas-sm-n986bzkgins-original-imafudkh5gxq9k2s_t5gpvx.jpg',
		categoryName: 'Samsung'
	},
	{
		_id: uuid(),
		name: 'SAMSUNG Galaxy S20 Ultra',
		price: 87999,
		rating: 3,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667764203/ecommerce/samsung-galaxy-s20-ultra-sm-g988bzapinu-original-imafpfkb6mkgyegk_upg7x8.jpg',
		categoryName: 'Samsung'
	},
	{
		_id: uuid(),
		name: 'SAMSUNG Galaxy S10',
		price: 71400,
		rating: 2,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667767077/ecommerce/samsung-galaxy-s10-sm-g973fzwgins-original-imafdys4hrndgfzm_ocyzyk.jpg',
		categoryName: 'Samsung'
	},
	{
		_id: uuid(),
		name: 'APPLE iPhone 14 Pro Max',
		price: 189900,
		rating: 4.9,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667767257/ecommerce/-original-imaghxengzjc2djt_frq9yf.jpg',
		categoryName: 'Apple'
	},
	{
		_id: uuid(),
		name: 'APPLE iPhone 13 Pro',
		price: 149900,
		rating: 3.8,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667767262/ecommerce/-original-imagca5hhzsgpycf_iav8m5.jpg',
		categoryName: 'Apple'
	},
	{
		_id: uuid(),
		name: 'APPLE iPhone 12 Pro',
		price: 106990,
		rating: 3.1,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667767382/ecommerce/apple-iphone-12-pro-dummyapplefsn-original-imafwgbrbzjgug4j_zkuzjx.jpg',
		categoryName: 'Apple'
	},
	{
		_id: uuid(),
		name: 'APPLE iPhone XS',
		price: 86900,
		rating: 2.9,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667767417/ecommerce/apple-iphone-xs-mt9l2hn-a-original-imaf97f65bqbdycy_sogbga.jpg',
		categoryName: 'Apple'
	},
	{
		_id: uuid(),
		name: 'APPLE iPhone 12',
		price: 69990,
		rating: 2.5,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667767800/ecommerce/apple-iphone-12-dummyapplefsn-original-imafwg8dbzv8vh7t_bf9eqf.jpg',
		categoryName: 'Apple'
	},
	{
		_id: uuid(),
		name: 'Google Pixel 7 Pro',
		price: 84999,
		rating: 4.8,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667767902/ecommerce/-original-imaggsuemmztbghp_r7c2jt.jpg',
		categoryName: 'Pixel'
	},
	{
		_id: uuid(),
		name: 'Google Pixel 6a',
		price: 34999,
		rating: 3.7,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667768008/ecommerce/-original-imaggbrbxkqr3v3u_pvxjvq.jpg',
		categoryName: 'Pixel'
	},
	{
		_id: uuid(),
		name: 'Google Pixel 4a',
		price: 31999,
		rating: 3.5,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667768051/ecommerce/google-pixel-4a-ga02099-in-original-imafwyzmnfxzmv5q_ven4mn.jpg',
		categoryName: 'Pixel'
	},
	{
		_id: uuid(),
		name: 'Google Pixel 3 XL',
		price: 92000,
		rating: 3,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667768171/ecommerce/google-pixel-3-xl-na-original-imaf9syguz3zyq7m_mvgu9k.jpg',
		categoryName: 'Pixel'
	},
	{
		_id: uuid(),
		name: 'Google Pixel 7',
		price: 59999,
		rating: 4.5,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667768241/ecommerce/-original-imaggsudg5fufyte_zpmbkg.jpg',
		categoryName: 'Pixel'
	},
	{
		_id: uuid(),
		name: 'OnePlus 10 Pro 5G',
		price: 66900,
		rating: 4.6,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667768974/ecommerce/-original-imaggcee7yprwrhx_qeyqze.jpg',
		categoryName: 'OnePlus'
	},
	{
		_id: uuid(),
		name: 'OnePlus 10T 5G',
		price: 53795,
		rating: 4,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667769059/ecommerce/10t-5g-a001b3-oneplus-original-imaghfmfhfqc9fxz_nx3hxy.jpg',
		categoryName: 'OnePlus'
	},
	{
		_id: uuid(),
		name: 'OnePlus 9RT 5G',
		price: 39900,
		rating: 3.5,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667769106/ecommerce/9rt-5g-mt2110-oneplus-original-imagdkxf7sg33nye_n9ps5e.jpg',
		categoryName: 'OnePlus'
	},
	{
		_id: uuid(),
		name: 'OnePlus Nord 2T 5G',
		price: 33999,
		rating: 3,
		image: 'https://res.cloudinary.com/dsoervmfd/image/upload/v1667769164/ecommerce/nord-2t-5g-5011102064-oneplus-original-imagfx6hzsqu438h_mdjzia.jpg',
		categoryName: 'OnePlus'
	},
	{
		_id: uuid(),
		name: 'OnePlus Nord CE 2 Lite',
		price: 21999,
		rating: 2.9,
		image: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/o/l/j/-original-imagg2a4rmk94gay.jpeg?q=70',
		categoryName: 'OnePlus'
	}
];
