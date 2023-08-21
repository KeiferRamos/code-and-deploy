import React from "react";

import { useState, memo } from "react";
import { CopyOutlined, CodeOutlined } from "@ant-design/icons";

import DocsLayout from "../../../layout/docs";

import { StyledCodeEditor, StyledContent, StyledInstaller } from "./styled";

import NpmIcon from "../../../assets/images/icons/npm.webp";
import YarnIcon from "../../../assets/images/icons/yarn.webp";
import PnpmIcon from "../../../assets/images/icons/pnpm.webp";
import {
  RequestType,
  SampleCode,
  SampleCode2,
  SampleCode3,
  SampleGetRequest,
  SampleHeaderRequest,
  SamplePostRequest,
} from "./constant";

export const KeyPairContent = ({
  type,
  value: { key, value, valueType },
}: RequestType) => {
  if (type === "comment") {
    return <p className="comment-text">{key}</p>;
  }

  if (Array.isArray(value) && typeof value[0] === "object") {
    return (
      <>
        <p>
          <span style={{ color: "#40c5ee" }}>{key}:</span> &#123;
        </p>
        <div>
          {value.map((item, i) => {
            return <KeyPairContent {...item} key={i} />;
          })}
        </div>
        <p>&#125;</p>
      </>
    );
  }

  return (
    <p>
      <span style={{ color: "#40c5ee" }}>{key}: </span>
      <span className={`value-${valueType}`}>
        {Array.isArray(value) ? (
          <>
            &#91;
            {value.map((el, i) => {
              return (
                <span key={i}>
                  <span className={`value-${typeof el}`}>
                    {JSON.stringify(el)}
                  </span>
                  {value.length - 1 !== i ? "," : ""}
                </span>
              );
            })}
            &#93;
          </>
        ) : (
          JSON.stringify(value)
        )}
      </span>
      ,
    </p>
  );
};

function UsingAxios() {
  const [installerIndex, setInstallerIndex] = useState(0);
  const installerIcons = [YarnIcon, NpmIcon, PnpmIcon];
  const installerCommand = [
    "$ yarn add axios -dev",
    "$ npm i axios --save",
    "$ pnpm install axios --save",
  ];

  return (
    <DocsLayout>
      <StyledContent>
        <h2>
          Let's use Axios&nbsp;
          <CodeOutlined />
        </h2>
        <br />
        <p>
          You need to install axios in your application first as a dependencies.
        </p>
        <br />
        <StyledInstaller>
          {["yarn", "npm", "pnpm"].map((text, i) => {
            return (
              <span
                className={installerIndex === i ? "selected" : ""}
                onClick={() => setInstallerIndex(i)}
                key={i}
              >
                <img src={installerIcons[i]} />
                <p>{text}</p>
              </span>
            );
          })}
        </StyledInstaller>
        <p className="install-command">
          {installerCommand[installerIndex]}
          <CopyOutlined
            onClick={() =>
              navigator.clipboard.writeText(installerCommand[installerIndex])
            }
          />
        </p>
        <br />
        <p>
          After you install, import axios first to the file where you wanna use
          it.
        </p>
        <br />
        <StyledCodeEditor>
          <CopyOutlined
            onClick={() => navigator.clipboard.writeText(SampleCode)}
          />
          <p className="comment-text">// Get Request using axios.</p>
          <br />
          <p>
            <span className="function-text">axios</span>&#40;&#123;
          </p>
          <div>
            {SampleGetRequest.map((item, i) => {
              return <KeyPairContent {...item} key={i} />;
            })}
          </div>
          <p>
            <span>&#125;&#41;</span>.<span className="function-text">then</span>
            ((<span className="param-text">res</span>) <span> &#61;&#62; </span>{" "}
            <span className="module-text">console</span>.
            <span className="function-text">log</span>(
            <span className="param-text">res</span>))
          </p>
        </StyledCodeEditor>
        <br />
        <StyledCodeEditor>
          <CopyOutlined
            onClick={() => navigator.clipboard.writeText(SampleCode2)}
          />
          <p className="comment-text">// Post Request using axios.</p>
          <br />
          <p>
            <span className="function-text">axios</span>&#40;&#123;
          </p>
          <div>
            {SamplePostRequest.map((item, i) => {
              return <KeyPairContent {...item} key={i} />;
            })}
          </div>
          <p>
            <span>&#125;&#41;</span>.<span className="function-text">then</span>
            ((<span className="param-text">res</span>) <span> &#61;&#62; </span>{" "}
            <span className="module-text">console</span>.
            <span className="function-text">log</span>(
            <span className="param-text">res</span>))
          </p>
        </StyledCodeEditor>
        <br />
        <StyledCodeEditor>
          <CopyOutlined
            onClick={() => navigator.clipboard.writeText(SampleCode3)}
          />
          <p className="comment-text">
            // adding access token to your request.
          </p>
          <br />
          <p>
            <span className="function-text">axios</span>&#40;&#123;
          </p>
          <div>
            {SampleHeaderRequest.map((item, i) => {
              return <KeyPairContent {...item} key={i} />;
            })}
          </div>
          <p>
            <span>&#125;&#41;</span>.<span className="function-text">then</span>
            ((<span className="param-text">res</span>) <span> &#61;&#62; </span>{" "}
            <span className="module-text">console</span>.
            <span className="function-text">log</span>(
            <span className="param-text">res</span>))
          </p>
        </StyledCodeEditor>
      </StyledContent>
    </DocsLayout>
  );
}

export default memo(UsingAxios);
