import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (

      <div className="container">
        <h1>Home</h1>
        <div className="card m-2">
          <div className="card-body">
            <h1 className="card-title">Why do we need Test?</h1>
            <h6 className="card-subtitle">React testing</h6>
            <p className="card-text">To guarantee our code quality.And to show the people that we also care about it and wish to give something that already proven, at least by ourself</p>
            <button onClick={() => navigate("/CommentPage")} type="button" className="btn btn-primary"> 
              Go To Data Comments
            </button>
          </div>
        </div>
      </div>

  );
};

export default HomePage;
