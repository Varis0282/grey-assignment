import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
    const { cart } = useCart();
    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <header style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '10px' }}>
            <nav style={{ display: 'flex', gap: '20px', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Link to="/">Home</Link>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Link to="/cart" style={{ display: "flex", alignItems: "center" }}>Cart ({cart.reduce((sum, i) => sum + i.qty, 0)})</Link>
                    <button onClick={logout}>Logout</button>
                </div>
            </nav>
        </header>
    );
};
export default Header;