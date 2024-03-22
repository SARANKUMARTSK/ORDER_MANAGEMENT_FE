import React from "react";

import {MDBCard,MDBCardBody,MDBCol,MDBContainer,MDBIcon,MDBRow} from "mdb-react-ui-kit";

import "./home.css";

function Testimonial() {
  let data = [
    {
      color: "#9d789b",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      name: "Maria Smantha",
      comment:
        " Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!",
    },
    {
      color: "#7a81a8",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      name: "Lisa Cudrow",
      comment:
        " he whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!",
    },
    {
      color: "#6d5b98",
      img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
      name: "John Smith",
      comment:
        "Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!",
    },
  ];
  return (
    <MDBContainer id="testimonials" className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4 testimonial_h3"> Customer testimonials</h3>
          <p className="testimonial_p">Our customers love working with us</p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center d-flex align-items-stretch">
        {data.map((e, i) => {
          return (
            <MDBCol
              key={i}
              md="4"
              className="mb-5 mb-md-0 d-flex align-items-stretch"
            >
              <MDBCard className="testimonial-card">
                <div
                  className="card-up"
                  style={{ backgroundColor: `${e.color}` }}
                ></div>
                <div className="avatar mx-auto bg-white">
                  <img src={e.img} className="rounded-circle img-fluid" />
                </div>
                <MDBCardBody>
                  <h4 className="mb-4">{e.name}</h4>
                  <hr />
                  <p className="dark-grey-text mt-4">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    {e.comment}
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
}

export default Testimonial;
