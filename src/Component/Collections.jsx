import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products] = useState([
    { id: 1, src: 'nostra10.jpg', name: 'Men T-Shirts' },
    { id: 2, src: 'nostra11.jpg', name: 'Men Shirts' },
    { id: 3, src: 'nostra4.jpg', name: 'Casual t-Shirt' },
    { id: 4, src: 'nostra5.jpg', name: 'Men Coats' },
    { id: 5, src: 'nostra9.jpg', name: 'Men Tracks' },
    { id: 6, src: 'nostra7.jpg', name: 'Men Denim Jackets' },
    { id: 7, src: 'nostra12.jpg', name: 'Men Denim Pants' },
    { id: 8, src: 'nostra13.jpg', name: 'Black Coats' },
    { id: 9, src: 'nostra14.jpg', name: 'Long Coats' },
    { id: 10, src: 'nostra8.jpg', name: 'Black Shirt' },
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseSearchQuery)
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  return (
    <div>
      {/* Products Section */}
      <div className="product-section">
        <form className="product-search" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            id="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" aria-label="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        <div className="products" id="products">
          {filteredProducts.map((product) => (
            <div key={product.id} className="products-box">
              <Link to="/cart">
                <img src={product.src} alt={product.name} width="200" height="200" />
              </Link>
              <p>{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
