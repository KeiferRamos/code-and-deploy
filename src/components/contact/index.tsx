import React from "react";

import ContactIcon from "../../assets/images/contact.webp";
import CloseIcon from "../../assets/images/icons/close-button.webp";

import { useForm } from "@formspree/react";
import { StyledContent } from "./styled";
import { Formik, Form } from "formik";
import { Input, Row } from "antd";

function ContactMe({ close, handleClick }) {
  const [state, handleSubmit] = useForm("mwkdolen");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <StyledContent style={{ right: close ? "-100%" : 0 }}>
      <img className="close-btn" src={CloseIcon} alt="" onClick={handleClick} />
      <img className="banner-image" src={ContactIcon} alt="" />
      <h2>Contact Me</h2>
      <p>
        If you have questions, feel free to reach me out. I'll try my best to
        reply as soon as possible. Thank you.
      </p>
      <br />
      <form>
        <Row>
          <Input
            name="email"
            placeholder="email here"
            style={{ padding: "20px 10px", marginBottom: "15px" }}
          />
        </Row>
        <Row>
          <Input.TextArea
            maxLength={100}
            name="message"
            placeholder="message here..."
            autoSize={{
              minRows: 6,
              maxRows: 6,
            }}
          ></Input.TextArea>
        </Row>
        <br />
        <button>submit</button>
      </form>
    </StyledContent>
  );
}

export default ContactMe;
