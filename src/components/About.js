import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pic from "../assets/images/commerceback.png";
import "../assets/about.css";

export default function About() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <Container>
        <Row>
          <Col>
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
                About Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Commerce Liquor is a family-owned business that has been serving the Tujunga community for over 30 years. We are located on the corner of Commerce Ave and Foothill Blvd. 
                <br />
                <br />
                We offer a wide variety of beer, wine, and spirits, as well as snacks and sodas. Our store is open 7 days a week, from 7am to 11pm Sunday through Thursday, and 7am to 12am on Fridays and Saturdays. 
                <br />
                <br />
                Visit us at 9936 Commerce Ave, Tujunga CA, 91042, or contact us at (818) 353-0097.
              </p>
            </div>
          </Col>
          <Col>
            <img className="store-pic" src={pic} alt="Commerce Liquor" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
