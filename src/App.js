import { React, useEffect, useState } from "react";
import Card from "./components/Card";
import CartDrawer from "./components/CartDrawer";
import Header from "./components/Header";

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() =>{
		fetch("https://675c879bfe09df667f6423cf.mockapi.io/items")
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setItems(json);
			});
	}, []);

	const onAddToCart = (obj) => {
		setCartItems(prev => [...prev, obj]);
	};

	return (
		<div className="wrapper clear">
			{cartOpened && <CartDrawer items={cartItems} onClose={() => setCartOpened(false)} />}
			<Header onClickCart={() => setCartOpened(true)} />
			<div className="content p-40">
				<div className="d-flex align-center mb-40 justify-between">
					<h1>All perfume</h1>
					<div className="search-block d-flex">
						<img src="/img/search.svg" alt="Search" />
						<input type="text" placeholder="Search..." />
					</div>
				</div>
				<div className="d-flex flex-wrap">
					{items.map((item) => (
						<Card
							title={item.title}
							price={item.price}
							img={item.img}
							onFavorite={() => console.log("Added to Favorites")}
							onPlus={obj => onAddToCart(obj)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
