import React from "react";
import { Link } from "react-router-dom";

const PricingItem = props => (
  <div className="col-lg-4 pricing_col">
    <div className={`pricing_item ${props.className}`}>
      <div className="pricing_item_content">
        <div className="pricing_level">{props.level}</div>
        <div className="pricing_price">{props.price}</div>
        <ul className="pricing_list">
          {props.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="pricing_info">i</div>
        <div className="button pricing_button">
          <Link to={`${process.env.PUBLIC_URL}/orderPlan?plan=${props.id}`}>Order plan</Link>
        </div>
      </div>
    </div>
  </div>
);

export default PricingItem;
