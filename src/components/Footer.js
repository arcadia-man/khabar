import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.facebook.com/profile.php?id=100013431428382"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://twitter.com/kumar_mau2?t=pJFnAAYm1Yj-JtlIh3w8RA&s=09"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.instagram.com/pyare_prtm/"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/pritam-kumar-maurya-3b370820a"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/arcadia-man"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </a>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright: ii.com
        
      </div>
    </MDBFooter>
  );
}
