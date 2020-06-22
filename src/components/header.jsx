import React, { useState } from "react";
import circle from "./images/favicon-32x32.png";

export default function Header(props) {
  function handleclick(){
    props.click();
  }
  const alig = ["flex-start", "flex-end"];
  const [dir, setdir] = useState(true);
  return (
    <header className="header">
      <h1 className="header_title">Our Princings</h1>
      <div className="header_container">
        <label htmlFor="1">Annually</label>
        <button
          className="swich"
          id="1"
          style={{ justifyContent: dir ? alig[0] : alig[1] }}
          onClick={() => {
            setdir(!dir)
            handleclick();
          }}
        >
          <img src={circle} alt="" />
        </button>
        <label htmlFor="1">Monthly</label>
      </div>
    </header>
  );
}
