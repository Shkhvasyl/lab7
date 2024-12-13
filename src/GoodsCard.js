import React from 'react';
import './goodsCard.css';
const GoodsCard = ({ image, name, price }) => {
    return (
        <div className="goods-card">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{price} грн/кг</p>
        </div>
    );
};
export default GoodsCard;