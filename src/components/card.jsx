import React from 'react';

export default function Card(props){
  return(
    <div className="card">
      <h1 className ="card_type">{props.title}</h1>
      <h1 className ="card_money"><p>$</p>{props.money}</h1>
      <ul className ="card_list">
        <li><p>{props.plan1}</p></li>
        <li><p>{props.plan2}</p></li>
        <li><p>{props.plan3}</p></li>
      </ul>
      <button className = "card_button">Learn More</button>
    </div>
  );
}