import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { MDBTypography } from "mdb-react-ui-kit";
import { useLocation } from "react-router-dom";

export default function Registered() {
  const location = useLocation();
  if (location.state.referalLink === null) {
    return <></>;
  }
  return (
    <MDBContainer style={{ marginTop: "160px" }} fluid>
      <MDBCard
        className="text-black m-5 lg:p-5"
        style={{ borderRadius: "25px" }}
      >
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center justify-content-center"
            >
              <MDBTypography tag="h1">Grow Habit</MDBTypography>
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                You have already taken the challenge. 
              </p>
              <p>
                <i class="fas fa-retweet fa-lg" style={{ color: "green" }}></i>{" "}
                Help your friends by challenging them to take the "5-Day Deep Work Challenge."
              </p>
              <p>
                <i class=""></i>
                Use this personalised link to share :: 
              </p>
              <p
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {location.state.referalLink}
              </p>
              <div>
                <i
                  class="fas fa-people-arrows fa-lg"
                  style={{ color: "green" }}
                ></i>{" "}
                Number of Friends You Helped To Focus:{" "}
                <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
                  {location.state.userRefered}
                </span>
              </div>
              <p className="text-center h5 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                <i class="fab fa-whatsapp fa-lg" style={{ color: "green" }}></i>{" "}
                <a
                  style={{ color: "green", textDecoration: "underline" }}
                  href="https://chat.whatsapp.com/KYrlFO7gcgaFlx8ZZr9BWx"
                  className="text-center"
                >
                  {" "}
                  Join Our Whatsapp Group for further updates
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
