import { useCart } from '../context/CartContext';
import ProductCart from '../components/ProductCart';
import { useState } from 'react';

const Cart = () => {
    const { cart, clearCart } = useCart();
    const [showMsg, setShowMsg] = useState(false);
    const total = cart.reduce((sum, i) => sum + i.qty * i.price, 0);

    const handleCheckout = () => {
        clearCart();
        setShowMsg(true);
        setTimeout(() => setShowMsg(false), 4000);
    };

    return (
        <div style={{ padding: '1rem 2rem' }}>
            {cart.map(item => (
                <ProductCart key={item.id} item={item} />
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={handleCheckout}>Checkout</button>
            {showMsg && <div style={{ background: 'green', color: 'white', padding: '10px' }}>Order placed successfully!</div>}
        </div>
    );
};
export default Cart;
