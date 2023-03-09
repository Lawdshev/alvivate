import React, { useState } from "react";
import { useUserAuth } from "./UserAuthContextProvider";
import { PaystackButton } from "react-paystack";

const PaystackPay = (props) => {
     const { user } = useUserAuth();

  const componentProps = {
    email: user.email,
    amount: props.amount,
    publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
    text: "Check Out",
    onSuccess: ({ reference }) => {
      let transactions = localStorage.getItem("transactions");
      transactions.push({
        reference: reference,
        orders: props.orders,
        date: Date.now(),
      });
    },
    onClose: () => console.log("SUCCESSFUL!"),
  };

  return <PaystackButton className='paystack-button' {...componentProps} />;
};

export default PaystackPay;
