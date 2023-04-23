import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cardReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCardAction] = useReducer(
    cardReducer,
    defaultCartState
  );

  const addItemToCardHandler = (item) => {
    dispatchCardAction({ type: "ADD", item: item });
  };

  const removeItemFromCardHandler = (id) => {
    dispatchCardAction({ type: "REMOVE", id: id });
  };

  const cardContext = {
    items: cartState.items,
    totalAmount: 0,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCardHandler,
  };
  return (
    <CartContext.Provider value={cardContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
