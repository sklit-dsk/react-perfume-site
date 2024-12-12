import Card from "./components/Card";
import CartDrawer from "./components/CartDrawer";
import Header from "./components/Header";

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
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}

export default App;
