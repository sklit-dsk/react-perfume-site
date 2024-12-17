import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useCart } from '../../hooks/useCart';

function Header(props) {
    const { totalPrice } = useCart();

    return (
        <header style={styles} className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <Link to="/">
                    <img width={40} height={40} src="/img/logo.svg" alt="Logo pic" />
                </Link>
                <div>
                    <h3 className="text-uppercase">Perfume market</h3>
                    <p className="opacity-5">The most delicious perfume</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-20 cu-p" onClick={props.onClickCart}>
                    <img width={18} height={18} src="/img/cart.svg" alt="Cart pic" />
                    <span>{totalPrice} eur</span>
                </li>
                <li className="mr-20 cu-p">
                    <Link to="/favorites">
                        <img width={20} height={20} src="/img/heart.svg" alt="Heart pic" />
                    </Link>
                </li>
                <li className="mr-5 cu-p">
                    <Link to="/orders">
                        <img width={22} height={22} src="/img/user.svg" alt="User pic" />
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
