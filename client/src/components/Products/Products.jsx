import { useState, useEffect, useContext } from "react";
import { GlobaleContext } from "../context";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useContext(GlobaleContext);

  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function addToCart(product) {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  }

  return (
    <div className="products">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} width={200} height={200} alt={product.title} />
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
}
