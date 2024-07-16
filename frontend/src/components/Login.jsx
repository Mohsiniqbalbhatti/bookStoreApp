import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login successFull!");
          localStorage.setItem("User", JSON.stringify(res.data.user));

          setInterval(() => {
            window.location.href = "/";
          }, 1500);
        }
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error : " + error.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="container">
        <div className="row -flex justify-content-center">
          <div className="col-10 col-md-6 my-5 border login-box pb-5 pt-3 rounded">
            <div className="h2">Login</div>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control login-input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  {...register("email", { required: true })}
                  required
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control login-input"
                  {...register("password", { required: true })}
                  id="exampleInputPassword1"
                  required
                />
              </div>

              <div className="d-flex">
                <button type="submit" className="btn btn-pink">
                  Login
                </button>
                <p className="my-auto mx-3">
                  Not Registered?{" "}
                  <Link
                    to="/signup"
                    className="text-decoration-underline Pink-color"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
