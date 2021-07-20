import React from 'react';
import { Switch, Route } from 'react-router-dom';

//pages
import ProductsPage from './pages/products.page';
import ProductDetailsPage from './pages/product-details.page';

export const Router = (props) => {
    return (
        <Switch>
            <Route exact path={'/'} component={ProductsPage} />
            <Route exact path={'/:id'} component={ProductDetailsPage} />
        </Switch>
    );
};
