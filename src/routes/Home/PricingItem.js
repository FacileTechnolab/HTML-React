import React from "react";

const PricingItem = props => (
  <div className="col-lg-4 pricing_col">
    <div className={`pricing_item ${props.className}`}>
      <div className="pricing_item_content">
        <div className="pricing_level">{props.level}</div>
        <div className="pricing_price">{props.price}</div>
        <ul className="pricing_list">
          {props.list.map(item => (
            <li>{item}</li>
          ))}
        </ul>
        <div className="pricing_info">
          <a href="#">i</a>
        </div>
        <div className="button pricing_button">
          <a href="#">Order plan</a>
        </div>
      </div>
    </div>
  </div>
);

export default PricingItem;
