import Card from "./components/Card";
import CartDrawer from "./components/CartDrawer";
import Header from "./components/Header";

const dataPerfume = [
	{
		title: "Limited-Edition Eau de Parfum Spray",
		img: "/img/perfume/1.png",
		price: 200,
	},
	{
		title: "Eau de Toilette Purse Spray",
		img: "/img/perfume/2.png",
		price: 150,
	},
	{
		title: "1.7 fl. oz. Eau de Parfum Body Oil Set",
		img: "/img/perfume/3.png",
		price: 300,
	},
];

function App() {
	return (
		<div className="wrapper clear">
			<CartDrawer />
			<Header />
			<div className="content p-40">
				<div className="d-flex align-center mb-40 justify-between">
					<h1>All perfume</h1>
					<div className="search-block d-flex">
						<img src="/img/search.svg" alt="Search" />
						<input type="text" placeholder="Search..." />
					</div>
				</div>
				<div className="d-flex">
					{dataPerfume.map((obj) => (
						<Card
							title={obj.title}
							price={obj.price}
							img={obj.img}
							onFavorite={() => console.log("Added to Favorites")}
							onPlus={() => console.log("Added to Cart")}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
