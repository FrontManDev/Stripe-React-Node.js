import React from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Carts from "./components/Carts/Carts";
import { ContextState } from "./components/context";
export default function App() {
  return (
    <ContextState>
      <Header />
      <Products />
      <Carts />
    </ContextState>
  );
}