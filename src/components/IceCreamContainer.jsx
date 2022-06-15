import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyIceCream from "../Redux/IceCream/iceCreamActionCreator";
import { addIceCream } from "../Redux/IceCream/iceCreamActionCreator";

function IceCreamContainer() {
  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  const dispatch = useDispatch();
  return (
    <div>
      <div>IceCream Count - {numberOfIceCreams}</div>
      <button
        onClick={() => {
          dispatch(buyIceCream());
        }}
      >
        Buy Ice Cream
      </button>
      <button
        onClick={() => {
          dispatch(addIceCream());
        }}
      >
        Add Ice Cream
      </button>
    </div>
  );
}

export default IceCreamContainer;
