import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
            cartItems.length ? (
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            )) 
            ) : (
                <span className='empty-message'>Your cart is empty.</span>
                )}
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
)

// this prevents cartDropdown from rerendering when other state changes occur
const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

// withRouter will pass match, history, and location to connected component
export default withRouter(connect(mapStateToProps)(CartDropdown));