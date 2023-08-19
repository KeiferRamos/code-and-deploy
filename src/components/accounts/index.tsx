import React from "react";
import {
  FacebookFilled,
  LinkedinFilled,
  GithubFilled,
} from "@ant-design/icons";

function Accounts() {
  return (
    <div>
      <p>follow me on</p>
      <a target="_blank" href="https://www.facebook.com/keifer.ramos.146">
        <FacebookFilled />
      </a>
      <a target="_blank" href="https://github.com/KeiferRamos">
        <GithubFilled />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/keifer-ramos-409962244/"
      >
        <LinkedinFilled />
      </a>
    </div>
  );
}

export default Accounts;
