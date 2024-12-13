import React, { useEffect, useState } from "react";
import styles from "./Card.module.scss";

function Card({ img, title, price, onFavorite, onPlus}) {
	const [isAdded, setIsAdded] = useState(false);
	const handleClickOnPlus = () => {
		onPlus({img, title, price});
		setIsAdded(!isAdded);
	}

	return (
		<div className={styles.card}>
			<div className={styles.favorite}>
				<img
					src="/img/heart-unliked.svg"
					alt="Heart unliked"
					onClick={onFavorite}
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
					src={isAdded ?"/img/btn-checked.svg" : "/img/btn-add.svg"}
					alt="Add"
				/>
			</div>
		</div>
	);
}

export default Card;
