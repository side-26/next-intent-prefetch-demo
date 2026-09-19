'use client';

import type { ComponentProps } from 'react';

import { IntentLink } from 'next-intent-prefetch';

import { getProductsAction } from '@/api/products/products.actions';

type Props = Omit<
    ComponentProps<typeof IntentLink>,
    'prefetchers'
>;

export function ProductsIntentLink(props: Props) {
    return (
        <IntentLink
            {...props}
            prefetchers={[
                () => getProductsAction(1),
            ]}
        />
    );
}