import React from 'react'
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
import { MDBTypography } from 'mdb-react-ui-kit';
import { useLocation } from 'react-router-dom';

export default function SuccessForm() {
    const location = useLocation(); 
    if(location.state.referalLink===null){
        return <></>
    }
  return (
    <MDBContainer fluid>
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
              <MDBTypography tag='h1'>Grow Habit</MDBTypography>
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                You have SuccessFully Registerd For Event
                <br></br>
                Please Help Us By Refering Others
                <br></br>
                Your Refrel Link Is {location.state.referalLink}
              </p>
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                
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
  )
}
