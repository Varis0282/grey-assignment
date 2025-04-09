import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProduct } from '../api';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        fetchProduct(id).then(setProduct);
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div style={{ padding: '20px' }}>
            <img src={product.image} alt={product.title} width="200" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};
export default ProductDetail;
