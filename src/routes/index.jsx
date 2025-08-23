import { lazy } from 'react';
const HomePage = lazy(() => import('@/app/(home)/page'));

//pages
const Pricing1 = lazy(() => import('@/app/(demos)/pricing-1/page'));
const Pricing2 = lazy(() => import('@/app/(demos)/pricing-2/page'));
const Pricing3 = lazy(() => import('@/app/(demos)/pricing-3/page'));
const Pricing4 = lazy(() => import('@/app/(demos)/pricing-4/page'));
const Pricing5 = lazy(() => import('@/app/(demos)/pricing-5/page'));
const Pricing6 = lazy(() => import('@/app/(demos)/pricing-6/page'));
const demoPages = [{
  path: '/',
  name: 'root',
  element: <HomePage />
}, {
  path: '/pricing-1',
  name: 'Pricing 1',
  element: <Pricing1 />
}, {
  path: '/pricing-2',
  name: 'Pricing 2',
  element: <Pricing2 />
}, {
  path: '/pricing-3',
  name: 'Pricing 3',
  element: <Pricing3 />
}, {
  path: '/pricing-4',
  name: 'Pricing 4',
  element: <Pricing4 />
}, {
  path: '/pricing-5',
  name: 'Pricing 5',
  element: <Pricing5 />
}, {
  path: '/pricing-6',
  name: 'Pricing 5',
  element: <Pricing6 />
}];
export const appRoutes = [...demoPages];