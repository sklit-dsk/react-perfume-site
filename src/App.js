import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
// import Card from './components/Card';
import CartDrawer from './components/CartDrawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './context';
import { Orders } from './pages/Orders';

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
            try {
                const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
                    axios.get('https://675c879bfe09df667f6423cf.mockapi.io/cart'),
                    axios.get('https://675e00ca63b05ed0797952db.mockapi.io/favorites'),
                    axios.get('https://675c879bfe09df667f6423cf.mockapi.io/items'),
                ])
                // const cartResponse = await axios.get(
                //     'https://675c879bfe09df667f6423cf.mockapi.io/cart',
                // );
                // const favoritesResponse = await axios.get(
                //     'https://675e00ca63b05ed0797952db.mockapi.io/favorites',
                // );
                // const itemsResponse = await axios.get(
                //     'https://675c879bfe09df667f6423cf.mockapi.io/items',
                // );


                setIsReady(false);
                setCartItems(cartResponse.data);
                setFavorites(favoritesResponse.data);
                setItems(itemsResponse.data);
            } catch (error) {
                alert('Error while fetching data');
                console.log(error);
            }
        }

        fetchData();
    }, []);

    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
            if (findItem) {
                setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
                await axios.delete(`https://675c879bfe09df667f6423cf.mockapi.io/cart/${findItem.id}`);
            } else {
                const { data } = await axios.post('https://675c879bfe09df667f6423cf.mockapi.io/cart', obj);
                setCartItems((prev) => [...prev, data]);
            }
        } catch (error) {
            alert("Error while adding to cart");
            console.log(error);
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
            alert('Error while adding to favorites');
            console.log(error);
        }
    };

    const onRemoveItem = (id) => {
        try {
            axios.delete(`https://675c879bfe09df667f6423cf.mockapi.io/cart/${id}`);
            setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(id)));
        } catch (error) {
            alert("Error while removing from cart");
            console.log(error);
        }
    };

    const handleSort = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id));
    };

    return (
        <AppContext.Provider
            value={{
                items,
                cartItems,
                favorites,
                onAddToCart,
                isItemAdded,
                onAddToFavorites,
                setCartOpened,
                setCartItems,
            }}
        >
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
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </div>
        </AppContext.Provider>
    );
}

export default App;
