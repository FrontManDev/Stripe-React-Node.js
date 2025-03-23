import { useContext } from "react";
import { GlobaleContext } from "../context";
import "./Carts.css";

export default function Carts() {
  const { cart, setCart, showCart, toggleCart } = useContext(GlobaleContext);

  function remove(index) {
    setCart(cart.filter((_, i) => i !== index));
  }

  async function Checkout() {
    try {
      const response = await fetch("http://localhost:5000/checkout",{
        method:'post',
        headers : {
          "Content-Type": "application/json",
        },
        body : JSON.stringify({cart}),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.log("Error: No URL returned from server");
      }
    } catch (error) {
      console.log("Checkout Error:", error);
    }
  }

  return (
    <div className={`cart ${showCart ? "show" : ""}`}>
      <h2>Shopping Cart</h2>
      <h3 onClick={toggleCart}>X</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((product, index) => (
            <div className="cart-item" key={product.id}>
              <img src={product.image} width={100} height={100} alt={product.title} />
              <p>{product.title}</p>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => remove(index)}>Remove</button>
            </div>
          ))}
          <button onClick={Checkout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}
