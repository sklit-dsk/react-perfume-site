import React, { useState, useContext } from 'react';
import Info from './Info';
import AppContext from '../context';
import axios from 'axios';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function CartDrawer({ onClose, onRemove, items = [] }) {
    const { cartItems, setCartItems } = useContext(AppContext);
    const [isComplete, setIsComplete] = useState(null);
    const [orderId, setOrderId] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleClickComplete = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post(
                'https://675e00ca63b05ed0797952db.mockapi.io/orders',
                {
                    items: cartItems,
                },
            );
            // await axios.put('https://675c879bfe09df667f6423cf.mockapi.io/cart', []);
            setOrderId(data.id);
            setIsComplete(!isComplete);
            setCartItems([]);
            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`https://675c879bfe09df667f6423cf.mockapi.io/cart/${item.id}`);
                await delay(1000);
            }
        } catch (error) {
            alert(error.message);
        }
        setIsLoading(false);
    };

    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex mb-30 justify-between ">
                    Cart{' '}
                    <img
                        className="removeBtn cu-p"
                        src="/img/btn-remove.svg"
                        alt="Remove button"
                        onClick={onClose}
                    />
                </h2>
                {items.length > 0 ? (
                    <div className="d-flex flex-column flex">
                        <div className="items">
                            {items.map((obj) => (
                                <div key={obj.id} className="cartItem d-flex align-center mb-20">
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
                                        onClick={() => onRemove(obj.id)}
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
                            <button
                                disabled={isLoading}
                                onClick={handleClickComplete}
                                className="greenButton"
                            >
                                Place an order <img src="/img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <Info
                        title={isComplete ? 'Order completed' : 'Cart is empty'}
                        description={
                            isComplete
                                ? `Your order #${orderId} has been successfully placed.`
                                : 'Add at least one perfume to complete your order.'
                        }
                        img={isComplete ? '/img/complete-order.jpg' : '/img/empty-cart.jpg'}
                    />
                )}
            </div>
        </div>
    );
}

export default CartDrawer;
