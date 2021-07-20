import React from 'react';

const ProductDetailsComponent = ({ name, price, id, picture, category }) => {
    return (
        <div id="product-details-component">
            <div className="row">
                <div className="col-md-6">
                    <img src={picture} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>{name}</h2>
                    <p>{price} PLN</p>
                    <p>{category}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsComponent;
