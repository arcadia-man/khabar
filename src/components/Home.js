import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg')",
          height: 550,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">TAJA KHABAR</h1>
              <h4 className="mb-3">Get your latest news</h4>
              <Link
                className="btn btn-outline-light btn-lg"
                to="/components/Login"
                role="button"
              >
                Sign in
              </Link>
              <Link
                className="btn btn-outline-light btn-lg mx-2"
                to="/components/Register"
                role="button"
              >
                sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
