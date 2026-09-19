import {  } from 'next-intent-prefetch';

import { ProductsGrid } from './_components/products-grid';

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-zinc-50 text-zinc-950">
            {/* Header */}
            <header className="border-b border-zinc-200 bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
                    <div>
                        <span className="text-xl font-bold tracking-tight">
                            Intent Store
                        </span>
                    </div>

                    <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
                        <a
                            href="/"
                            className="transition-colors hover:text-zinc-950"
                        >
                            Home
                        </a>

                        <a
                            href="/products"
                            className="text-zinc-950"
                        >
                            Products
                        </a>

                        <a
                            href="#about"
                            className="transition-colors hover:text-zinc-950"
                        >
                            About
                        </a>
                    </nav>

                    <button
                        type="button"
                        className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium transition hover:bg-zinc-100"
                    >
                        Cart (0)
                    </button>
                </div>
            </header>

            {/* Hero */}
            <section className="border-b border-zinc-200 bg-white">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
                    <div className="max-w-3xl">
                        <div className="mb-5 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
                            New collection
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Explore our products
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                            Browse our latest collection of carefully
                            selected products. Discover something new and
                            find the perfect item for you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
                {/* Breadcrumb */}
                <div className="mb-8 flex items-center gap-2 text-sm text-zinc-500">
                    <a
                        href="/"
                        className="transition-colors hover:text-zinc-950"
                    >
                        Home
                    </a>

                    <span>/</span>

                    <span className="font-medium text-zinc-950">
                        Products
                    </span>
                </div>

                {/* Toolbar */}
                <div className="mb-8 flex flex-col justify-between gap-5 border-b border-zinc-200 pb-6 sm:flex-row sm:items-end">
                    <div>
                        <h2 className="text-2xl font-semibold tracking-tight">
                            All products
                        </h2>

                        <p className="mt-1 text-sm text-zinc-500">
                            Explore all available products in our
                            collection.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <label
                            htmlFor="sort"
                            className="text-sm font-medium text-zinc-600"
                        >
                            Sort by
                        </label>

                        <select
                            id="sort"
                            defaultValue="featured"
                            className="h-10 rounded-lg border border-zinc-200 bg-white px-3 text-sm outline-none transition focus:border-zinc-400"
                        >
                            <option value="featured">
                                Featured
                            </option>
                            <option value="newest">
                                Newest
                            </option>
                            <option value="price-low">
                                Price: Low to high
                            </option>
                            <option value="price-high">
                                Price: High to low
                            </option>
                        </select>
                    </div>
                </div>

                <ProductsGrid />

                {/* Pagination */}
                <div className="mt-14 flex items-center justify-between border-t border-zinc-200 pt-6">
                    <p className="hidden text-sm text-zinc-500 sm:block">
                        Showing 1–12 of 40 products
                    </p>

                    <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-start">
                        <button
                            type="button"
                            disabled
                            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-400 disabled:cursor-not-allowed"
                        >
                            Previous
                        </button>

                        <div className="hidden items-center gap-1 sm:flex">
                            <button
                                type="button"
                                className="size-10 rounded-lg bg-zinc-950 text-sm font-medium text-white"
                            >
                                1
                            </button>

                            <button
                                type="button"
                                className="size-10 rounded-lg text-sm font-medium text-zinc-600 transition hover:bg-zinc-100"
                            >
                                2
                            </button>

                            <button
                                type="button"
                                className="size-10 rounded-lg text-sm font-medium text-zinc-600 transition hover:bg-zinc-100"
                            >
                                3
                            </button>

                            <span className="px-2 text-zinc-400">
                                ...
                            </span>
                        </div>

                        <button
                            type="button"
                            className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium transition hover:bg-zinc-100"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="border-t border-zinc-200 bg-white">
                <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-8">
                    <div className="max-w-xl">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Stay in the loop
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-zinc-500">
                            Get updates about new products, collections
                            and upcoming releases.
                        </p>
                    </div>

                    <form className="flex w-full max-w-md gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="min-w-0 flex-1 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm outline-none placeholder:text-zinc-400 focus:border-zinc-400"
                        />

                        <button
                            type="submit"
                            className="rounded-lg bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-zinc-200 bg-white">
                <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row lg:px-8">
                    <p>
                        © 2026 Intent Store. Demo application.
                    </p>

                    <p>
                        Powered by next-intent-prefetch
                    </p>
                </div>
            </footer>
        </main>
    );
}