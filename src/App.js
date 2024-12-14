import { React, useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import CartDrawer from './components/CartDrawer';
import Header from './components/Header';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        // fetch('https://675c879bfe09df667f6423cf.mockapi.io/items')
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((json) => {
        //         setItems(json);
        //     });
		

		axios.get('https://675c879bfe09df667f6423cf.mockapi.io/items').then((res) => {
			setItems(res.data);
		})
    }, []);

    const onAddToCart = (obj) => {
		axios.post('https://675c879bfe09df667f6423cf.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const handleSort = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && <CartDrawer items={cartItems} onClose={() => setCartOpened(false)} />}
            <Header onClickCart={() => setCartOpened(true)} />
            <div className="content p-40">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>{searchValue ? `Search by "${searchValue}"` : 'All perfume'}</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search" />
                        {searchValue && (
                            <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Clear" />
                        )}
                        <input onChange={handleSort} value={searchValue} placeholder="Search..." />
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            img={item.img}
                            onFavorite={() => console.log('Added to Favorites')}
                            onPlus={(obj) => onAddToCart(obj)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
