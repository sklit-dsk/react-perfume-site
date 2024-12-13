function CartDrawer({onClose, items = []}) {
	return (
		<div className="overlay">
			<div className="drawer">
				<h2 className="d-flex mb-30 justify-between ">
					Cart{" "}
					<img
						className="removeBtn cu-p"
						src="/img/btn-remove.svg"
						alt="Remove button"
						onClick={onClose}
					/>
				</h2>
				<div className="items">
					{items.map((obj) => (
						<div className="cartItem d-flex align-center mb-20">
							<div
								style={{
									backgroundImage: `url(${obj.img})`,
								}}
								className="cartItemImg"
							></div>
							<div className="mr-20 flex">
								<p className="mb-5">{obj.title}</p>
								<b>{obj.price} eur</b>
							</div>
							<img
								className="removeBtn"
								src="/img/btn-remove.svg"
								alt="Remove button"
							/>
						</div>
					))}
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
