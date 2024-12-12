import React from "react";

function Header() {
	return (
		<header className="d-flex justify-between align-center p-40">
			<div className="d-flex align-center">
				<img
					width={40}
					height={40}
					src="/img/logo.svg"
					alt="Logo pic"
				/>
				<div>
					<h3 className="text-uppercase">Perfume market</h3>
					<p className="opacity-5">The most delicious perfume</p>
				</div>
			</div>
			<ul className="d-flex">
				<li className="mr-30">
					<img
						width={18}
						height={18}
						src="/img/cart.svg"
						alt="Cart pic"
					/>
					<span>50 eur</span>
				</li>
				<li>
					<img
						width={20}
						height={20}
						src="/img/user.svg"
						alt="User pic"
					/>
				</li>
			</ul>
		</header>
	);
}

export default Header;
