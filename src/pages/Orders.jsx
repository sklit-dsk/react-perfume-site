import { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios';
// import AppContext from '../context';

export function Orders() {
    // const { } = useContext(AppContext);
    const [orders, setOrders] = useState([]);
    const [isReady, setIsReady] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    'https://675e00ca63b05ed0797952db.mockapi.io/orders',
                );
                console.log(data);
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsReady(false);
            } catch (error) {
                alert('Error while creating orders');
                console.log(error);
            }
        })();
    }, []);

    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>My Orders</h1>
            </div>
            <div className="d-flex flex-wrap">
                {(isReady ? [...Array(6)] : orders).map((item, index) => (
                    <Card
                        key={index}
                        loading={isReady}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
}
