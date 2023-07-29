import React from "react";
import "./Warning.css";

const Warning = () => {
  return (
    <div className="warning-section">
      <h2 className="heading">Warning(s)</h2>
      <ul>
        <li>
          To trade this security in this account, a currency conversion will be
          made at the current rate.
        </li>
        <li>A similar order has already been submitted.</li>
        <li>Your transaction will be processed the following business day.</li>
        <li>It is not possible to calculate the buying power of this order.</li>
        <li>
          A cancellation will not be possible during business hours on market
          orders. You can call a representative for more information.
        </li>
        <li>
          For the above-mentioned reason(s), your order will be processed by one
          of our representatives.
        </li>
      </ul>
    </div>
  );
};

export default Warning;
