import React, { useState } from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';

function Card({
    id,
    img,
    title,
    price,
    onFavorite,
    onPlus,
    favorited = false,
    added = false,
    loading = false,
}) {
    const [isAdded, setIsAdded] = useState(added);
    const [isFavorite, setIsFavorite] = useState(favorited);
    const handleClickOnPlus = () => {
        onPlus({ id, img, title, price });
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({ id, img, title, price });
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={170}
                    height={265}
                    viewBox="0 0 170 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="170" height="155" />
                    <rect x="0" y="164" rx="5" ry="5" width="170" height="15" />
                    <rect x="0" y="188" rx="5" ry="5" width="100" height="15" />
                    <rect x="0" y="236" rx="5" ry="5" width="80" height="25" />
                    <rect x="135" y="232" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
            ) : (
                <>
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
                </>
            )}
        </div>
    );
}

export default Card;
