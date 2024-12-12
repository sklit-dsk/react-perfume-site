function CartDrawer() {
	return (
		<div style={{ display: "none" }} className="overlay">
			<div className="drawer">
				<h2 className="d-flex mb-30 justify-between ">
					Cart{" "}
					<img
						className="removeBtn cu-p"
						src="/img/btn-remove.svg"
						alt="Remove button"
					/>
				</h2>
				<div className="items">
					<div className="cartItem d-flex align-center mb-20">
						<div
							style={{
								backgroundImage: "url(/img/perfume/1.png)",
							}}
							className="cartItemImg"
						></div>
						<div className="mr-20 flex">
							<p className="mb-5">Women's perfume Chanel</p>
							<b>50 eur</b>
						</div>
						<img
							className="removeBtn"
							src="/img/btn-remove.svg"
							alt="Remove button"
						/>
					</div>
					<div className="cartItem d-flex align-center mb-20">
						<div
							style={{
								backgroundImage: "url(/img/perfume/1.png)",
							}}
							className="cartItemImg"
						></div>
						<div className="mr-20 flex">
							<p className="mb-5">Women's perfume Chanel</p>
							<b>50 eur</b>
						</div>
						<img
							className="removeBtn"
							src="/img/btn-remove.svg"
							alt="Remove button"
						/>
					</div>
					<div className="cartItem d-flex align-center mb-20">
						<div
							style={{
								backgroundImage: "url(/img/perfume/1.png)",
							}}
							className="cartItemImg"
						></div>
						<div className="mr-20 flex">
							<p className="mb-5">Women's perfume Chanel</p>
							<b>50 eur</b>
						</div>
						<img
							className="removeBtn"
							src="/img/btn-remove.svg"
							alt="Remove button"
						/>
					</div>
				</div>
				<div className="cartTotalBlock">
					<ul>
						<li>
							<span>Total:</span>
							<div></div>
							<b>150 eur</b>
						</li>
						<li>
							<span>Fee 5%:</span>
							<div></div>
							<b>142,5 eur</b>
						</li>
					</ul>
					<button className="greenButton">
						Place an order <img src="/img/arrow.svg" alt="Arrow" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default CartDrawer;
