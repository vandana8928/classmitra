import React from "react";

const login = () => {
  return (
    <div className="contanier login">
      <div className="row">
        <div className="col-lg-6 ">
          <div className="form-data">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your User Name"
            />
          </div>
          <div className=" form-data">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Your password"
            />
          </div>
          <button type="submit" className="btn ">
            Submit
          </button>
        </div>
        <div className="col-lg-6">

        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/737/799/small_2x/online-registration-illustration-concept-free-vector.jpg"alt="about img"></img>
        </div>
      </div>
    </div>
  );
};

export default login;
