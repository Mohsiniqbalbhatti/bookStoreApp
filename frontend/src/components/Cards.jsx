import React from "react";

function Cards({ book }) {
  return (
    <div>
      <div>
        <div className="card m-3">
          <img src={book.image} className="card-img-top" alt="Free Book" />
          <div className="card-body">
            <div className="d-flex  align-items-center ">
              <h5 className="card-title">{book.name}</h5>
              <span className="badge rounded-pill btn-pink ms-2 px-3 mb-1">
                {book.category}
              </span>
            </div>
            <p className="card-text">
              Some quick example text to build on the card title
            </p>
            <div className="d-flex justify-content-between align-items-center ">
              <span className="badge rounded-pill card-btn ms-2 px-3 ">
                $ {book.price}
              </span>
              <button
                type="button"
                className="badge rounded-pill btn-pink  px-2 py-1 "
              >
                Buy Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
