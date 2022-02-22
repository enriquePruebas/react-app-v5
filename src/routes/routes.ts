// import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";

import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../lazyload/pages/NoLazy";


type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: Route[];
};

// const LazyPage1 = lazy(/*webpackChunkName:"LazyPage1"*/() => import('../lazyload/pages/LazyPage1'));
// const LazyPage2 = lazy(/*webpackChunkName:"LazyPage2"*/() => import('../lazyload/pages/LazyPage2'));
// const LazyPage3 = lazy(/*webpackChunkName:"LazyPage3"*/() => import('../lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        path: '/lazyload',
        Component: lazy(()=>import(/*webpackChunkName:"LazyLayout"*/'../lazyload/layout/LazyLayout')),
        name: 'LazyLoad Nested'
    },
    {
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy loading'
    },
];