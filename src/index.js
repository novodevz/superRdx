import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import Crud from "./features/crud/Crud";
import Secret from "./components/Secret";
import Super from "./features/super/Super";
import Dep from "./features/super/Dep";
import Cat from "./features/super/Cat";
import Sale from "./features/super/Sale";
import ProdCrud from "./features/prodCrud/prodCrud";
import MyCart from "./features/cart/MyCart";
import Checkout from "./features/cart/Checkout";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Info from "./components/Info";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <PayPalScriptProvider
      options={{ clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Main />} />
              <Route path="/crud" element={<Crud />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/secret" element={<Secret />} />
              <Route path="/info" element={<Info />} />
              <Route path="/shop" element={<Super />} />
              <Route path="/shop/:dep" element={<Dep />} />
              <Route path="/shop/:dep/:cat" element={<Cat />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/crud-product" element={<ProdCrud />} />
              <Route path="/mycart" element={<MyCart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </PayPalScriptProvider>
  </React.StrictMode>
);
