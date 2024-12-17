import React, { useState, useContext } from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';
import AppContext from '../../context';

function Card({
    id,
    img,
    title,
    price,
    onFavorite,
    onPlus,
    favorited = false,
    loading = false,
}) {
    const {isItemAdded} = useContext(AppContext)
    const [isFavorite, setIsFavorite] = useState(favorited);
    const itemObject = { id, parentId: id, img, title, price }
    const handleClickOnPlus = () => {
        onPlus(itemObject);
    };

    const onClickFavorite = () => {
        onFavorite(itemObject);
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
                        {onFavorite && <img
                            src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
                            alt="Heart"
                            onClick={onClickFavorite}
                        />}
                    </div>
                    <img className={styles.imgPerfume} width='100%' height={135} src={img} alt="Perfume" />
                    <h5>{title}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column ">
                            <span>Price:</span>
                            <b>{price} eur</b>
                        </div>
                        {onPlus && <img
                            className={styles.plus}
                            onClick={handleClickOnPlus}
                            src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-add.svg'}
                            alt="Add"
                        />}
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;
