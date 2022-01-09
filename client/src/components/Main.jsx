import React, { useState, useEffect } from "react";
import Search from "./Search";
import "./Main.css";
import Products from "./Products";
import axios from "axios";

const Main = () => {
  //creating more states
  const [search, setSearch] = useState("");
  const [prodArray, setprodArray] = useState([]);

  //api call

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (!search) {
          const resp = await axios.get(`/api/products`);
          const products = resp.data.data.products;
          console.log(products);
          setprodArray(products);
        } else {
          const resp = await axios.get(`/api/products?name=${search}`);
          const products = resp.data.data.products;
          console.log(products);
          setprodArray(products);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [search]);

  return (
    <main>
      <div className="containerHome">
        <h2>Welcome to Shop Api</h2>
      </div>
      <Search setSearch={setSearch} />
      <div className="row justify-content-center">
        <Products />
      </div>
    </main>
  );
};

export default Main;
