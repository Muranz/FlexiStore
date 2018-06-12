export interface MainCategory {
	id: number;
	name: string;
	description: string;
}

export interface Brand {
	id: number;
	name: string;
}

export interface IProduct {
	id: number;
	mainCategory: MainCategory;
	size: string;
	price: number;
	title: string;
	description: string;
	brand: Brand;
}
