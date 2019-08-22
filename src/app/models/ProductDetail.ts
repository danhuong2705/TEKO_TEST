import { Image } from './Image';

export class ProductDetail {
  name: string;
  price: Price;
  attributeGroups: any[];
  images: Image[];
  status: Status;
  sku: string;
}
export class Price {
  sellPrice: number;
  supplierSalePrice: number;
}
export class Status {
publish: boolean;
sale: string;
stocks: any[];
tags: any[];
totalAvailable: number;
}
