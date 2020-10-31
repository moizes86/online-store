import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
// import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, totalValue }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-blocks">
        <span>Product</span>
      </div>
      <div className="header-blocks">
        <span>Description</span>
      </div>
      <div className="header-blocks">
        <span>Quantity</span>
      </div>
      <div className="header-blocks">
        <span>Price</span>
      </div>
      <div className="header-blocks">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${totalValue}</span>
    </div>
    {/* <StripeCheckoutButton className='button' price={totalValue} /> */}
    <div className='test-warning'>
    *Please use the following test credit card for payments*
    <br/>
    4242 4242 4242 4242
    <br/>
    Date: any 
    <br/>
    CVV: any
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalValue: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
