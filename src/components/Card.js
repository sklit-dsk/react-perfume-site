import React from "react";

function Card() {
	return (
		<div className="card">
			<div className="favorite">
				<img src="/img/heart-unliked.svg" alt="Heart unliked" />
			</div>
			<img
				width={133}
				height={112}
				src="/img/perfume/1.png"
				alt="Perfume"
			/>
			<h5>Women's perfume Chanel</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column ">
					<span>Price:</span>
					<b>99 eur</b>
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
