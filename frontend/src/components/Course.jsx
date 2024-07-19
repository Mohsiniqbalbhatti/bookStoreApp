import React, { useEffect, useState } from "react";
// import list from "../../public/data/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get(
          "https://bookstoreapi-mohsiniqbalbhattis-projects.vercel.app/book"
        );
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getbook();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5 mb-3">
            <h1>
              We're deligted to have you{" "}
              <span className="Pink-color">here! :)</span>
            </h1>
          </div>
          <div className="col-12 text-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              beatae quasi dignissimos distinctio harum nobis commodi
              repudiandae provident cum quisquam qui quaerat aliquam dolor in
              non dolorem voluptas sint. Quis alias corrupti laboriosam cum
              veniam eaque, earum officia voluptates! Esse.
            </p>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center mb-5">
            <button className="btn-pink rounded-pill px-4  py-2">
              <Link to="/">Back</Link>
            </button>
          </div>
        </div>
        <div className="row">
          {book.map((book) => (
            <div className="col-12 col-md-6 col-lg-4">
              <Cards book={book} key={book.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Course;
