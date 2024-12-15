import React, { useState } from 'react';
import styles from './Card.module.scss';

function Card({ id, img, title, price, onFavorite, onPlus, favorited = false }) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorited);
    const handleClickOnPlus = () => {
        onPlus({ img, title, price });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({ id, img, title, price });
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img
                    src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
                    alt="Heart"
                    onClick={onClickFavorite}
                />
            </div>
            <img width={133} height={112} src={img} alt="Perfume" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Price:</span>
                    <b>{price} eur</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={handleClickOnPlus}
                    src={isAdded ? '/img/btn-checked.svg' : '/img/btn-add.svg'}
                    alt="Add"
                />
            </div>
        </div>
    );
}

export default Card;
