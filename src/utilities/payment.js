import React from 'react';
import { useUserAuth } from './UserAuthContextProvider';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

export default function Checkout(props) {
    const { user } = useUserAuth();
   const config = {
    public_key: 'FLWPUBK_TEST-cf90a67861d8234df437dc52309854a1-X',
    tx_ref: Date.now(),
    amount: props.amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: user.email,
      phone_number: '***********',
    },
    customizations: {
      title: 'Apple store',
      description: 'Check out',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Check Out',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
        {
            <FlutterWaveButton {...fwConfig} />
        }
    </div>
  );
}