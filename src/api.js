export const API_BASE = 'https://fakestoreapi.com';

export const login = async (username, password) => {
    const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    return res.json();
};

export const fetchProducts = () => fetch(`${API_BASE}/products`).then(res => res.json());
export const fetchCategories = () => fetch(`${API_BASE}/products/categories`).then(res => res.json());
export const fetchByCategory = (cat) => fetch(`${API_BASE}/products/category/${cat}`).then(res => res.json());
export const fetchProduct = (id) => fetch(`${API_BASE}/products/${id}`).then(res => res.json());
