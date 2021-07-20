import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductComponent = ({ product: { name, id, price, category, picture }, ...props }) => {
    return (
        <div className="card">
            <img className="card-img-top" src={picture} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    Price {price} PLN
                    <br />
                    Category {category}
                </p>
                <NavLink className="btn btn-primary" to={`${id}`}>
                    Go to product
                </NavLink>
            </div>
        </div>
    );
};

export default ProductComponent;
