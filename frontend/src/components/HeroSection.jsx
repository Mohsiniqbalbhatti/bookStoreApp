import React from "react";

function HeroSection() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1 className="mt-5 pt-5 pb-4">
              Hello, Welcome here to learn something
              <span className="Pink-color"> new everyday!!!</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam ut quidem animi asperiores recusandae quis voluptates,
              in eum quo consequatur, eius impedit sequi possimus? Provident.
            </p>
            <div className="mailToLogin ">
              <div className="row">
                <div className="col-1">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="col-11">
                  <input
                    type="email"
                    placeholder="Enter your email to login"
                    className="w-100 "
                  />
                </div>
              </div>
            </div>
            <button className="btn btn-pink my-3">Login</button>
          </div>
          {/* hero pic */}
          <div className="col-12 col-md-6 heroImg">
            <img
              src="/assets/hero.png"
              alt="Books Image"
              className="mt-3 mt-lg-5 img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
