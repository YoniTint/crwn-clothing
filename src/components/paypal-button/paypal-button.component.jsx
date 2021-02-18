import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

const PayPalCheckoutButton = ({ price }) => {
    
    return(
        <PayPalButton 
            amount={price}
            onSuccess={(details, data) => {
                alert("Transaction completed by " + details.payer.name.given_name);
            }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            currency_code: "USD",
                            value: price
                        }
                    }]
                })
            }}
        />
    );
}    

export default PayPalCheckoutButton;