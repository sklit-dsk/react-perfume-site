import {  React, useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
// import Card from './components/Card';
import CartDrawer from './components/CartDrawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';


function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [isReady, setIsReady] = useState(true);

    useEffect(() => {
        // fetch('https://675c879bfe09df667f6423cf.mockapi.io/items')
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((json) => {
        //         setItems(json);
        //     });

        async function fetchData() {
            const cartResponse = await axios.get(
                'https://675c879bfe09df667f6423cf.mockapi.io/cart',
            );
            const favoritesResponse = await axios.get(
                'https://675e00ca63b05ed0797952db.mockapi.io/favorites',
            );
            const itemsResponse = await axios.get(
                'https://675c879bfe09df667f6423cf.mockapi.io/items',
            );
            setIsReady(false);
            setCartItems(cartResponse.data);
            setFavorites(favoritesResponse.data);
            setItems(itemsResponse.data);
        }

        fetchData();
    }, []);

    const onAddToCart = (obj) => {
        try {
            if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
                axios.delete(`https://675c879bfe09df667f6423cf.mockapi.io/cart/${obj.id}`);
                setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
            } else {
                axios.post('https://675c879bfe09df667f6423cf.mockapi.io/cart', obj);
                setCartItems((prev) => [...prev, obj]);
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const onAddToFavorites = async (obj) => {
        try {
            if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
                axios.delete(`https://675e00ca63b05ed0797952db.mockapi.io/favorites/${obj.id}`);
                setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
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

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.id) === Number(id));
    }

    return (
        <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorites, setCartOpened, setCartItems }}>
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
                                cartItems={cartItems}
                                isReady={isReady}
                            />
                        }
                    />
                    <Route
                        path="/favorites"
                        element={
                            <Favorites />
                        }
                    />
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
