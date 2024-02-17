import React , { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {


  const form = useRef();
  const showAlert = () => {
    window.alert("Form submitted Successfully");
    window.location.reload();
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rumdq9m",
        "template_5z5f56p",
        form.current,
        "QTbnzUJJAt5-1HP74"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (


    <div className="container contact">
      <div className="row">
        <div className="col-lg-6">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_52683-76159.jpg?w=826&t=st=1706549013~exp=1706549613~hmac=ab1c0cc5c45b65e04f09b29c00d922f5e56cf31a99ac3e25923e4a43f352447b"
            alt=""
          ></img>
        </div>
        <div className="col-lg-6">
          <h1>contact us</h1>
          <form   ref={form}
                onSubmit={sendEmail}>
            <div className="form-row d-flex">
              <div className="form-group col-lg-5 m-auto">
                <label htmlFor="inputEmail4">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="user_name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group col-lg-5 m-auto">
                <label htmlFor="inputPassword4">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="sirname"
                  placeholder="Enter City"
                  name="city"
                />
              </div>
            </div>
            <div className="form-row d-flex">
              <div className="form-group col-lg-5 m-auto">
                <label htmlFor="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  name="user_email"
                />
              </div>
              <div className="form-group col-lg-5 m-auto">
                <label htmlFor="inputPassword4">mobile</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  name="phone"
                  placeholder="Mobile Number"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-lg-11 m-auto">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Enter your address"
                />
              </div>
            </div>
            <div className="btn1">
            <button type="submit"  onClick={showAlert}  className="btn m-auto">
              send message
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
