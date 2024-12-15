import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
// import Card from './components/Card';
import CartDrawer from './components/CartDrawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
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
        });
        axios.get('https://675c879bfe09df667f6423cf.mockapi.io/cart').then((res) => {
            setCartItems(res.data);
        });
        axios.get('https://675e00ca63b05ed0797952db.mockapi.io/favorites').then((res) => {
            setFavorites(res.data);
        });
    }, []);

    const onAddToCart = (obj) => {
        axios.post('https://675c879bfe09df667f6423cf.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onAddToFavorites = async (obj) => {
        try {
            if (favorites.find((favObj) => favObj.id === obj.id)) {
                axios.delete(`https://675e00ca63b05ed0797952db.mockapi.io/favorites/${obj.id}`);
                // setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
            } else {
                const { data } = await axios.post(
                    `https://675e00ca63b05ed0797952db.mockapi.io/favorites`,
                    obj,
                );
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://675c879bfe09df667f6423cf.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleSort = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && (
                <CartDrawer
                    items={cartItems}
                    onClose={() => setCartOpened(false)}
                    onRemove={onRemoveItem}
                />
            )}
            <Header onClickCart={() => setCartOpened(true)} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            items={items}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            handleSort={handleSort}
                            onAddToCart={onAddToCart}
                            onAddToFavorites={onAddToFavorites}
                            favorites={favorites}
                        />
                    }
                />
                <Route
                    path="/favorites"
                    element={<Favorites items={favorites} onAddToFavorites={onAddToFavorites} />}
                />
            </Routes>
        </div>
    );
}

export default App;
