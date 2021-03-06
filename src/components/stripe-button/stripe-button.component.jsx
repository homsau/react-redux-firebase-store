import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// Stripe wants the price in cents
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;

    const publishableKey = 'pk_test_W4PqvTzyMWGsLNN3KTM2d3x6005RjF9ZMm';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    // token is the onSuccess callback when this submits
    return (
        <StripeCheckout 
            label='Pay Now' 
            name='Caution Clothing' 
            billingAddress 
            shippingAddress 
            image='https://svgshare.com/i/CUz.svg' 
            description={`Your total is $${price}`} 
            amount={priceForStripe} 
            panelLabel="Pay Now" 
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;