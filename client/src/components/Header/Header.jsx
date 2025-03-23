import "./Header.css";
import { useContext } from "react";
import { GlobaleContext } from "../context";
export default function Header() {
  const { toggleCart } = useContext(GlobaleContext);
  return (
    <header>
      <h1>E-Shop</h1>
      <button onClick={toggleCart}>Cart</button>
    </header>
  );
}