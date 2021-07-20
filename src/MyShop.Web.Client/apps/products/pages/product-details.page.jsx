import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

// actions
import { ProductActions } from '../store/products.store';

// components
import ProductDetailsComponent from '../components/product-details.component';

const ProductDetailsPage = ({ ...props }) => {
    const dispatch = useDispatch();
    const router = useLocation();
    const { productDetails } = useSelector((s) => s.Products);

    useEffect(() => {
        const id = router.pathname.replace('/', '');
        dispatch(ProductActions.GetProductDetails(id));
    }, []);

    return (
        <div id="product-details">
            <ProductDetailsComponent {...productDetails} />
        </div>
    );
};

export default ProductDetailsPage;
