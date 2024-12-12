import React from "react";

function Card(props) {
	return (
		<div className="card">
			<div className="favorite">
				<img src="/img/heart-unliked.svg" alt="Heart unliked" />
			</div>
			<img
				width={133}
				height={112}
				src={props.img}
				alt="Perfume"
			/>
			<h5>{props.title}</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column ">
					<span>Price:</span>
					<b>{props.price} eur</b>
				</div>
				<button className="button">
					<img
						width={11}
						height={11}
						src="/img/btn-add.svg"
						alt="Add"
					/>
				</button>
			</div>
		</div>
	);
}

export default Card;
