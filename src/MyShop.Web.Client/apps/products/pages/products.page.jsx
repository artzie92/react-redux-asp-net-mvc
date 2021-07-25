import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { ProductActions } from '../store/products.store';

// components
import ProductComponent from '../components/product.component';

const ProductsPage = ({ ...props }) => {
    const dispatch = useDispatch();
    const { items } = useSelector((s) => s.Products);
    const { name, login } = useSelector((s) => s.User);

    useEffect(() => {
        dispatch(ProductActions.GetProducts());
    }, []);

    return (
        <div id="products-page">
            <p>
                Hello {name}. We will notify you about order status via e-mail {login}.
            </p>
            <div className="card-deck">
                {items.map((item) => (
                    <ProductComponent key={item.id} product={item} />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
