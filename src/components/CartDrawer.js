function CartDrawer({ onClose, onRemove, items = [] }) {
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
                <div>
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
                        <button className="greenButton">
                            Place an order <img src="/img/arrow.svg" alt="Arrow" />
                        </button>
                    </div>
                </div>
                ) : (
                <div class="cartEmpty d-flex align-center justify-center flex-column flex">
                    <img class="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="Empty" />
                    <h2>Cart is empty</h2>
                    <p class="opacity-6">Add at least one perfume to complete your order.</p>
                    <button onClick={onClose} class="greenButton">
                        <img src="/img/arrow.svg" alt="Arrow" />
                        Go back
                    </button>
                </div>)} 
            </div>
        </div>
    );
}

export default CartDrawer;
