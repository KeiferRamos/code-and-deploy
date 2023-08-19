import React from "react";
import { CopyOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Response from "../response";
import DataObject from "../response/object";

export const StyledSpan = styled.span`
  background: #272727;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  color: #bebebe;
  padding: 12px 10px;
  border-radius: 3px;
  width: 100%;
  word-break: break-all;

  svg {
    font-size: 20px;
  }
`;

const StyledNote = styled.p`
  padding: 30px 20px;
  border-left: #e94d61 4px solid;
  background: #fff;
`;

export function RequestComp(props: {
  text: string;
  type: "GET" | "POST" | "PUT" | "DELETE";
}) {
  return (
    <StyledSpan>
      [{props.type}] {props.text}
      <CopyOutlined onClick={() => navigator.clipboard.writeText(props.text)} />
    </StyledSpan>
  );
}

function Content({
  data,
  url,
  method,
  hasNote,
  note,
  children,
  body,
}: {
  data: object;
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  hasNote: boolean;
  note?: string;
  children: React.ReactNode;
  body?: object;
}) {
  return (
    <section style={{ marginBottom: "1em" }}>
      {children}
      <p>Request:</p>
      <RequestComp text={url} type={method} />
      {body ? (
        <>
          <p>body:</p>
          <div className="request-body">
            <DataObject item={body} type="grid" />
          </div>
        </>
      ) : null}
      <p>Response:</p>
      <div className="response">
        {Array.isArray(data) ? (
          data.map((item, i) => {
            return <Response key={item._id} {...item} index={i} />;
          })
        ) : (
          <DataObject item={data} type="grid" />
        )}
      </div>
      {hasNote ? <StyledNote className="note-text">{note}</StyledNote> : null}
    </section>
  );
}

export default Content;
