import React from "react";
import Header from "./Components/Header";
import styled from "styled-components";

const Contact = () => {
  return (
    <div>
      <Header>
        <h2> Home. Contact</h2>
        <h1>Contact us</h1>
      </Header>

      <div style={{ margin: "8rem auto", textAlign: "center" }}>
        <iFrame
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41709353008!2d72.73989435040882!3d21.159340300022325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1690689921832!5m2!1sen!2sin"
          width="90%"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          data-aos="fade-up"
        ></iFrame>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;

const Form = styled.form`
  h2 {
    font-size: 2.8rem;
    font-family: "Playfair Display", serif;
    margin-bottom: 2rem;
  }

  input,
  textarea {
    width: 100%;
    margin-bottom: 2rem;
    padding: 1.5rem;
    border: 1px solid #ccc;
  }

  button {
    margin-top: 3rem;
    padding: 1.5rem 3rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: #fff;
    background-color: #fdcb9e;
    border: none;
    border-radius: 5px;
    transition: all 0.5s;
    cursor: pointer;
  }

  button:hover {
    background-color: #ffb830;
  }

  i {
    font-size: 2.5rem;
    margin-right: 1.5rem;
    display: inline-block;
  }

  h3 {
    font-size: 1.8rem;
    font-family: "Playfair Display", serif;
    font-weight: 500;
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.4rem;
    color: #2c3033;
  }

  .contact-formdiv {
    padding: 0 3rem;
  }

  @media (max-width: 992px) {
    padding: 0 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 5rem;

    button {
      margin-bottom: 5rem;
      padding: 1.2rem 2.5rem;
    }
    .contact-formdiv {
      padding: 0;
    }
  }
`;

const ContactForm = () => {
  return (
    <Form
      action="https://formspree.io/f/xrgwewoe"
      method="POST"
      className="contact-form container my-8"
      data-aos="fade-up"
    >
      <h2>Get in Touch</h2>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <textarea
            name="Message"
            id="message"
            rows="10"
            placeholder="Enter Message"
            required
          ></textarea>

          <div style={{ gap: "2rem", display: "flex" }}>
            <input
              type="text"
              placeholder="Enter your name"
              name="userName"
              required
            />

            <input
              type="email"
              placeholder="Enter emial address"
              name="Email"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Enter subject"
            name="Subject"
            required
          />

          <button type="submit">send message</button>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 col-12 contact-formdiv">
          <div style={{ display: "flex" }}>
            <div>
              <i className="bi bi-house-door"></i>
            </div>
            <div>
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div>
              <i className="bi bi-phone"></i>
            </div>
            <div>
              <h3>00 (440) 9865 562</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div>
              <i className="bi bi-envelope"></i>
            </div>
            <div>
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};
