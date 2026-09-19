'use server';

import { ProductsService } from './products.service';

const productsService = new ProductsService();

export async function getProductsAction(page = 1) {
    return productsService.getProducts(page);
}