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
	id: string;
	mainCategory: MainCategory;
	size: number;
	price: number;
	title: string;
	description: string;
	brand: Brand;
}
