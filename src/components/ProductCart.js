import { useCart } from '../context/CartContext';

const ProductCart = ({ item }) => {
    const { updateQty, removeItem } = useCart();

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.title} />
            <div style={{ flex: 1 }}>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
            </div>
            <input type="number" min="1" value={item.qty} onChange={e => updateQty(item.id, +e.target.value)} />
            <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
    );
};

export default ProductCart;