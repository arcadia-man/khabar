import React, { useState, useEffect } from "react";
import { MDBContainer, MDBInput, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { googleLoginInitiate, loginInitiate } from "../redux/action";

export default function App() {
  const [state, setstate] = useState({ loginid: "", password: "" });
  const { email, password } = state;
  const { currentUser } = useSelector((state) => state.user);
  const handlechange = (e) => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Handlesubmit = (e) => {
    e.preventDefault();
    if (!password || !email) {
      return;
    }
    dispatch(loginInitiate(email, password));
    setstate({ email: "", password: "" });
  };
  const handleGooglesignin = (e) => {
    e.preventDefault();
    setstate({loginid:"", password:""})
    dispatch(googleLoginInitiate());
  };
  useEffect(() => {
    if (currentUser) {
      navigate("../pages/HomeUser");
    }
  }, [currentUser, navigate]);
  return (
    <div style={{ backgroundColor: "#eeeeee" }}>
      <MDBContainer className="d-flex justify-content-center">
        <form
          style={{ width: "23rem", minHeight: "85vh" }}
          onSubmit={Handlesubmit}
        >
          <h2 className="text-center my-5">Login In</h2>
          <MDBBtn
            style={{ width: "100%", marginBottom: "20px" }}
            active
            type="submit"
          >
            <MDBIcon
              fab
              size="2x"
              color="red"
              className="red-text pr-3"
              icon="google"
              onClick = {handleGooglesignin}
            ></MDBIcon>
          </MDBBtn>

          <MDBInput
            label="Username"
            id="formControlLg"
            type="text"
            size="lg"
            name="loginid"
            value={state.loginid}
            onChange={handlechange}
            className="bg-white"
          />
          <br />
          <MDBInput
            label="Password"
            id="formControlLg1"
            type="password"
            size="lg"
            name="password"
            value={state.password}
            onChange={handlechange}
            className="bg-white"
          />
          <br />
          <p>
            <Link to="/">Forgot password</Link>
          </p>

          <MDBBtn active type="submit" onSubmit={Handlesubmit}>
            Sign In
          </MDBBtn>
          <p className="text-center my-5">
            Don't have account? <Link to="/">Sign up</Link>{" "}
          </p>
        </form>
      </MDBContainer>
    </div>
  );
}
