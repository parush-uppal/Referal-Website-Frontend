import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MDBTypography } from 'mdb-react-ui-kit';
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
import { createUser, getUser } from "../api/auth";
import { useNotification } from "../hooks";
import { useEffect } from "react";


function RegisterForm() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    number:"",
  });
  const [namee, setNamee] = useState("");
  const { updateNotification } = useNotification(); 

  const validateUserInfo = ({ name, email, password }) => {
    const isValidName = /^[a-z A-Z]+$/;
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!name.trim()) return { ok: false, error: "Name is missing!" };
    if (!isValidName.test(name)) return { ok: false, error: "Invalid name!" };

    if (!email.trim()) return { ok: false, error: "Email is missing!" };
    if (!isValidEmail.test(email))
      return { ok: false, error: "Invalid email!" };

    
    

    return { ok: true };
  };

    const [searchParams] = useSearchParams();
    const query = searchParams.get("referalId");
    const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const getName = async() => {
    const query = searchParams.get("referalId");
    if(query){
        const data =  await getUser({id:query}); 
        setNamee(data.data.users.name)
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, error } = validateUserInfo(userInfo);
    if (!ok) return updateNotification("error", error);
    if(query!=null){
      userInfo.referalUser=query
    }

    const response = await createUser(userInfo);
    if(response.referalLink){
       return navigate("/registered",{state:{referalLink:response.referalLink,userRefered:response.userRefered}});
    }
    if (response.error) return updateNotification('error',response.error);
    const referalLink=response.user.referalLink
    navigate("/success",{state:{referalLink:referalLink}});
  };
  useEffect(() => {
    getName(); 
},[searchParams.get("referalId")]);
  const { name, email } = userInfo;
  return (
    <div>
    <MDBContainer  style={{ marginTop:"100px" }} fluid>
      <MDBCard
        className="text-black m-5"
        style={{ borderRadius: "25px",marginTop:"15px" }}
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
                Your friend {namee} has challenged you to take the 5-Day DEEP WORK CHALLENGE.
                {/* {name} challenged you to take 5 Day Deep Work Challenge  */}
              </p>
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Work With Your Friends. Let's make productivity fun !!! 
              </p>
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Starting from Tomorrow. From 7 am to 9 am or 6 am to 8am IST.  
              </p>
            
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  name="name"
                  onChange={handleChange}
                  value={name}
                  label="Your Name"
                  id="form1"
                  type="text"
                  className="w-100"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  value={email}
                  onChange={handleChange}
                  name="email"
                  label="Your Email"
                  id="form2"
                  type="email"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="phone me-3" size="lg" />
                <MDBInput
                  label="Phone Number"
                  size="lg"
                  name="number"
                  onChange={handleChange}
                  id="form3"
                  type="rel"
                />
              </div>

              
              <MDBBtn onClick={handleSubmit} className="mb-4" size="lg">
                Register
              </MDBBtn>
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
    </div>
  );
}

export default RegisterForm;
