import type { PicsumImage } from '@/app/_types';
import { getProductsAction } from '@/api/products/products.actions';
import Image from 'next/image';



export async function ProductsGrid() {
    'use cache';

    const products =
        await getProductsAction(1);

    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map(
                (product: PicsumImage, index) => {
                    const price =
                        49 + ((index * 17) % 180);

                    return (
                        <article
                            key={product.id}
                            className="group"
                        >
                            <a
                                href={`/products/${product.id}`}
                                className="block"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-100">
                                    <Image
                                        src={`https://picsum.photos/id/${product.id}/600/750`}
                                        alt={`Product by ${product.author}`}
                                        fill
                                        className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                    />

                                    {index < 4 && (
                                        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-zinc-800 shadow-sm backdrop-blur">
                                            New
                                        </span>
                                    )}

                                    <button
                                        type="button"
                                        aria-label="Add to favorites"
                                        className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/90 text-lg shadow-sm backdrop-blur transition hover:scale-105"
                                    >
                                        ♡
                                    </button>
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="font-medium text-zinc-900 transition-colors group-hover:text-zinc-600">
                                                Essential Product{' '}
                                                {product.id}
                                            </h3>

                                            <p className="mt-1 text-sm text-zinc-500">
                                                By {product.author}
                                            </p>
                                        </div>

                                        <p className="font-semibold text-zinc-950">
                                            ${price}
                                        </p>
                                    </div>

                                    <div className="mt-3 flex items-center gap-1">
                                        <span className="text-sm text-amber-500">
                                            ★
                                        </span>

                                        <span className="text-sm font-medium text-zinc-700">
                                            {(4 + (index % 10) / 10).toFixed(
                                                1,
                                            )}
                                        </span>

                                        <span className="text-sm text-zinc-400">
                                            ({24 + index * 3})
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </article>
                    );
                },
            )}
        </div>
    );
}