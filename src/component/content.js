import React from "react";

const content = () => {
  return (
    <div className="container content ">
      <div className="row">
        <div className="col-lg-6">
          <img
            src="https://img.freepik.com/free-psd/full-screen-smartphone-mockup-design_53876-65968.jpg?w=740&t=st=1706600959~exp=1706601559~hmac=6981b24d8a91915d02ea89585992b0a5c6f8d151214a143433bc4a264e129772"
            alt=""
          ></img>
        </div>
        <div className="col-lg-6">
          <h2>get the laerning app</h2>
          <p>
            Download lessons and learn anytime, anywhere with the Unacademy app
          </p>
          <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
          </ul>
          <button className="btn">get started</button>
        </div>
      </div>
    </div>
  );
};

export default content;
