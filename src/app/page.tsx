import { IntentLink } from 'next-intent-prefetch';
import { ProductsIntentLink } from './_components/products-intent-link';

const strategies = [
  {
    name: 'Intent',
    value: 'intent',
    description:
      'Prefetches when the user shows strong navigation intent through hover, keyboard focus, or pointer interaction.',
    recommended: true,
  },
  {
    name: 'Hover',
    value: 'hover',
    description:
      'Prefetches when the pointer enters the link. Useful for desktop-oriented interfaces.',
  },
  {
    name: 'Focus',
    value: 'focus',
    description:
      'Prefetches when the link receives focus. Useful for keyboard-first navigation.',
  },
  {
    name: 'Visible',
    value: 'visible',
    description:
      'Prefetches when the link approaches or enters the viewport using IntersectionObserver.',
  },
  {
    name: 'Immediate',
    value: 'immediate',
    description:
      'Starts prefetching as soon as the link component mounts.',
  },
  {
    name: 'None',
    value: 'none',
    description:
      'Disables intent prefetching while preserving normal Next.js Link navigation.',
  },
] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      {/* Navigation */}

      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex size-9 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white">
              IP
            </div>

            <div>
              <p className="text-sm font-semibold">
                next-intent-prefetch
              </p>

              <p className="text-xs text-zinc-400">
                Interactive demo
              </p>
            </div>
          </a>

          <nav className="flex items-center gap-6 text-sm font-medium">
            <a
              href="#strategies"
              className="hidden text-zinc-500 transition hover:text-zinc-950 sm:block"
            >
              Strategies
            </a>

            <ProductsIntentLink
              href="/products"
              strategy="intent"
              className="rounded-lg bg-zinc-950 px-4 py-2 text-white transition hover:bg-zinc-800"
            >
              Products
            </ProductsIntentLink>
          </nav>
        </div>
      </header>

      {/* Hero */}

      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600">
              <span className="size-1.5 rounded-full bg-emerald-500" />

              Next.js App Router
            </div>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Prefetch when users
              <span className="block text-zinc-400">
                actually show intent.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-zinc-500">
              Extend Next.js navigation with
              intent-aware route and application data
              prefetching without mounting the
              destination page.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <IntentLink
                href="/products"
                strategy="intent"
                prefetchers={[]}
                className="rounded-xl bg-zinc-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
              >
                Try intent prefetch →
              </IntentLink>

              <a
                href="#strategies"
                className="rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold transition hover:bg-zinc-50"
              >
                Explore strategies
              </a>
            </div>

            <p className="mt-4 text-xs text-zinc-400">
              Hover, focus or press the first button
              before clicking it.
            </p>
          </div>
        </div>
      </section>

      {/* Concept */}

      <section className="border-b border-zinc-200">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-zinc-200 lg:grid-cols-3">
          <div className="bg-zinc-50 px-8 py-10">
            <div className="mb-5 flex size-10 items-center justify-center rounded-xl border border-zinc-200 bg-white">
              01
            </div>

            <h2 className="font-semibold">
              Detect intent
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Decide when navigation is likely using
              hover, focus, pointer interaction or
              viewport visibility.
            </p>
          </div>

          <div className="bg-zinc-50 px-8 py-10">
            <div className="mb-5 flex size-10 items-center justify-center rounded-xl border border-zinc-200 bg-white">
              02
            </div>

            <h2 className="font-semibold">
              Warm resources
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Prefetch the Next.js route and optionally
              execute your own application data
              prefetchers.
            </p>
          </div>

          <div className="bg-zinc-50 px-8 py-10">
            <div className="mb-5 flex size-10 items-center justify-center rounded-xl border border-zinc-200 bg-white">
              03
            </div>

            <h2 className="font-semibold">
              Navigate normally
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Navigation still belongs to Next.js Link.
              No destination component needs to be
              mounted during prefetching.
            </p>
          </div>
        </div>
      </section>

      {/* Strategies */}

      <section
        id="strategies"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"
      >
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold text-zinc-500">
            PREFETCH STRATEGIES
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Choose when warming starts.
          </h2>

          <p className="mt-4 leading-7 text-zinc-500">
            Every card below uses a real IntentLink.
            Open the Network tab in DevTools and
            interact with each link to see when the
            destination starts warming.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {strategies.map((strategy) => (
            <article
              key={strategy.value}
              className="relative flex min-h-72 flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-zinc-100 px-2.5 py-1 font-mono text-xs text-zinc-600">
                  strategy=&quot;{strategy.value}&quot;
                </span>

                {'recommended' in strategy &&
                  strategy.recommended && (
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                      Recommended
                    </span>
                  )}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {strategy.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                {strategy.description}
              </p>

              <div className="mt-auto pt-8">
                <IntentLink
                  href={`/products?strategy=${strategy.value}`}
                  strategy={strategy.value}
                  className="group flex w-full items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold transition hover:border-zinc-300 hover:bg-zinc-100"
                >
                  Test {strategy.name}

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </IntentLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Visible strategy demonstration */}

      <section className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="font-mono text-sm text-zinc-400">
                strategy=&quot;visible&quot;
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                You just triggered a prefetch.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-zinc-500">
                If this section has just entered your
                viewport, the link on the right can
                start warming automatically without a
                hover or click.
              </p>

              <p className="mt-4 text-sm text-zinc-400">
                Check the Network panel before scrolling
                into this section to observe the
                request.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="size-3 rounded-full bg-red-400" />
                <div className="size-3 rounded-full bg-amber-400" />
                <div className="size-3 rounded-full bg-emerald-400" />
              </div>

              <div className="rounded-xl bg-zinc-950 p-5 font-mono text-sm leading-7 text-zinc-300">
                <div>
                  <span className="text-purple-300">
                    &lt;IntentLink
                  </span>
                </div>

                <div className="pl-5">
                  href=
                  <span className="text-emerald-300">
                    &quot;/products&quot;
                  </span>
                </div>

                <div className="pl-5">
                  strategy=
                  <span className="text-emerald-300">
                    &quot;visible&quot;
                  </span>
                </div>

                <div>
                  <span className="text-purple-300">
                    &gt;
                  </span>
                </div>

                <div className="pl-5 text-white">
                  View products
                </div>

                <div>
                  <span className="text-purple-300">
                    &lt;/IntentLink&gt;
                  </span>
                </div>
              </div>

              <IntentLink
                href="/products?strategy=visible-demo"
                strategy="visible"
                rootMargin="200px"
                className="mt-6 flex items-center justify-center rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                View products →
              </IntentLink>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate vs Intent */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">
            Different situations, different strategies.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-zinc-500">
            Intent-aware prefetching is not about
            prefetching everything. It is about choosing
            the appropriate moment for each navigation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8">
            <span className="font-mono text-xs text-zinc-400">
              intent
            </span>

            <h3 className="mt-4 text-xl font-semibold">
              Product discovery
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              A user may browse dozens of products but
              open only one. Wait until they show intent
              before warming its destination.
            </p>

            <IntentLink
              href="/products"
              strategy="intent"
              className="mt-8 inline-flex rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white"
            >
              Browse products →
            </IntentLink>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-8">
            <span className="font-mono text-xs text-zinc-400">
              immediate
            </span>

            <h3 className="mt-4 text-xl font-semibold">
              Highly likely navigation
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
              When the next destination is highly likely
              to be visited, warming immediately can be
              appropriate.
            </p>

            <IntentLink
              href="/products?source=immediate"
              strategy="immediate"
              className="mt-8 inline-flex rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-semibold transition hover:bg-zinc-50"
            >
              Open destination →
            </IntentLink>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-10 sm:flex-row sm:items-center lg:px-8">
          <div>
            <p className="font-semibold">
              next-intent-prefetch
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              Intent-aware navigation for Next.js.
            </p>
          </div>

          <IntentLink
            href="/products"
            strategy="intent"
            className="text-sm font-semibold text-zinc-600 transition hover:text-zinc-950"
          >
            Open demo products →
          </IntentLink>
        </div>
      </footer>
    </main>
  );
}