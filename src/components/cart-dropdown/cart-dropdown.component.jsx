import React from "react";

import "./cart-dropdown.styles.scss";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from '../../redux/cart/cart.actions';
//
import { withRouter } from "react-router-dom";
//
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((el, idx) => <CartItem key={idx} item={el} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};


const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
