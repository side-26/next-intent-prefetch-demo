import type { PicsumImage } from '@/app/_types';

export class ProductsService {
    static readonly CACHE_KEY = 'products';

    static getCacheKey(page: number) {
        return `${this.CACHE_KEY}:page:${page}`;
    }

    async getProducts(
        page = 1,
        signal?: AbortSignal,
    ): Promise<PicsumImage[]> {
        const response = await fetch(
            `https://picsum.photos/v2/list?page=${page}&limit=40`,
            {
                signal,
                cache: 'force-cache',
                next: {
                    tags: [
                        ProductsService.getCacheKey(page),
                    ],
                },
            },
        );

        if (!response.ok) {
            throw new Error(
                `Failed to fetch products: ${response.status}`,
            );
        }

        const data: unknown = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
            throw new Error('No products found');
        }

        return data as PicsumImage[];
    }
}