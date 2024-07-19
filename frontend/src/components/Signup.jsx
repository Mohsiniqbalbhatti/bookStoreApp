import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post(
        "https://bookstoreapi-mohsiniqbalbhattis-projects.vercel.app/user/signup",
        userInfo
      )
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Sign-up successFull!");
          localStorage.setItem("User", JSON.stringify(res.data.user));
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          toast.error("Error : " + error.response.data.message);
          console.log(error.response.data.message);
        }
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row -flex justify-content-center">
          <div className="col-10 col-md-6 my-5 border login-box pb-5 pt-3 rounded">
            <div className="h2">sign-up</div>
            <hr />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="inputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control login-input mb-2"
                  id="inputName"
                  placeholder="Enter your name"
                  {...register("fullname", { required: true })}
                  required
                />
              </div>
              <div>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control login-input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  {...register("email", { required: true })}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control login-input"
                  id="exampleInputPassword1"
                  {...register("password", { required: true })}
                  required
                />
              </div>

              <div className="d-flex">
                <button type="submit" className="btn btn-pink">
                  Signup
                </button>
                <p className="my-auto mx-3">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-underline Pink-color"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
