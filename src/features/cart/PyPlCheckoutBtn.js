// import React, { useEffect, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { slctLogin } from "../auth/authSlice";
import { slctCartProds, resetCartRdct } from "./cartSlice";
import axios from "axios";
const PyPlCheckoutBtn = () => {
  //   const [paid, setpaid] = useState(false);
  //   const [error, seterror] = useState(null);
  //   const [canceled, setcanceled] = useState(null);

  const dispatch = useDispatch();
  const login = useSelector(slctLogin);
  const cartProds = useSelector(slctCartProds);

  //   const paypalClientId = process.env.REACT_APP_PAYPAL_CLIENT_ID;
  //   console.log("PayPal Client ID:", paypalClientId);

  // Calculate subtotal for each item
  const calculateSubtotal = (item) => {
    return item.amount * item.price;
  };

  // Calculate total balance
  const totalBalance = cartProds.reduce((total, item) => {
    return total + calculateSubtotal(item);
  }, 0);

  const handelApprove = async (orderID) => {
    try {
      // Prepare order data
      const orderData = {
        paypal_order_id: orderID,
        total_price: parseFloat(totalBalance).toFixed(2), // Convert totalBalance to a floating point number and round to 2 decimal places
      };

      // Prepare order items data
      const orderItemsData = cartProds.map((prod) => ({
        product: prod.id,
        quantity: prod.amount,
        price: parseFloat(prod.price).toFixed(2), // Convert prod.price to a floating point number and round to 2 decimal places
      }));

      let access = sessionStorage.getItem("access");
      access = JSON.parse(access);

      const config = {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      };

      // Make POST request to create the order
      const response = await axios.post(
        "http://localhost:8000/create_order/",
        {
          order: orderData,
          order_items: orderItemsData,
        },
        config
      );

      // Check if the order was successfully created
      if (response.status === 201) {
        dispatch(resetCartRdct());
        alert("Order created successfully!");
        console.log("Order created successfully!");
        // Handle further actions if needed
      } else {
        console.error("Failed to create order:", response.data);
        alert("Failed to create order");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Failed to create order");
    }
  };

  return (
    <div>
      <h2>PyPlCheckoutBtn</h2>
      <h4>${parseFloat(totalBalance).toFixed(2)}</h4>
      {/* {cartProds &&
        cartProds.length !== 0 &&
        cartProds.map((prod) => <h4>{prod.name}</h4>)} */}
      <PayPalButtons
        createOrder={(_, actions) => {
          return actions.order.create({
            purchase_units: cartProds.map((prod, index) => {
              return {
                amount: {
                  value: (prod.price * prod.amount).toFixed(2), // Calculate total amount and round to 2 decimal places
                  currency_code: "USD", // Change currency code if necessary
                },
                description: prod.name,
                quantity: prod.amount, // You can adjust the quantity if needed
                reference_id: `unit_${index + 1}`, // Generate a unique reference ID for each purchase unit
              };
            }),
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log("order in onApprove:", order);
          handelApprove(data.orderID);
        }}
        onCancel={() => {
          console.log("checkout canceled");
        }}
        onError={(e) => {
          console.error("pypl error:", e);
        }}
        onClick={(_, actions) => {
          if (login) {
            return actions.resolve();
          }
          alert("login require");
          return actions.reject();
        }}
      />
    </div>
  );
};

export default PyPlCheckoutBtn;
