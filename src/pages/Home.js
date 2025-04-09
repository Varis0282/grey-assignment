import { useEffect, useState } from 'react';
import { fetchProducts, fetchCategories, fetchByCategory } from '../api';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCat, setActiveCat] = useState(null);
    const [addedProductIds, setAddedProductIds] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        fetchProducts().then(setProducts);
        fetchCategories().then(setCategories);
    }, []);

    const filterByCat = (cat) => {
        setActiveCat(cat);
        fetchByCategory(cat).then(setProducts);
    };

    const resetFilter = () => {
        setActiveCat(null);
        fetchProducts().then(setProducts);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedProductIds((prev) => [...prev, product.id]);
        setTimeout(() => {
            setAddedProductIds((prev) => prev.filter(id => id !== product.id));
        }, 2000);
    };

    return (
        <div>
            <div style={{ padding: '0 2rem 1rem' }} className='btn-panel'>
                <button onClick={resetFilter} className={`button ${activeCat === null ? 'active' : ''}`}>All</button>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => filterByCat(cat)}
                        className={`button ${activeCat === cat ? 'active' : ''}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="product-grid">
                {products.map(p => (
                    <div className="product-card" key={p.id}>
                        <Link to={`/product/${p.id}`}><img src={p.image} alt={p.title} /></Link>
                        <h4 title={p.title}>{p.title.slice(0, 20) + "..."}</h4>
                        <p>${p.price}</p>
                        <button onClick={() => handleAddToCart(p)}>
                            {addedProductIds.includes(p.id) ? 'Added!' : 'Add to Cart'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Home;