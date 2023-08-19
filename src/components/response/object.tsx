import React, { useState } from "react";
import { CaretRightOutlined, CaretDownOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Response from ".";

const StyledContainer = styled.div`
  overflow: hidden;
  z-index: 2;

  .item {
    position: relative;
    margin-left: 10px;

    .inline-div {
      display: inline;
      position: relative;
    }

    .cast-list {
      display: flex;
      flex-direction: column;

      margin-left: 1.5em;
      width: calc(100% - 1.5em);
    }

    .long-data {
      position: absolute;
      width: 1000px;
      top: 0;
      left: 0;
      margin-left: 90px;
    }
  }
`;

function StringArray({
  item,
  index,
  toggled,
  parent,
}: {
  item: string;
  index: number;
  toggled: boolean;
  parent: any[];
}) {
  const style = toggled ? { display: "block", marginLeft: "2em" } : {};

  return (
    <div style={style} className="inline-div">
      {toggled ? <span>{index}: </span> : null}
      <span className="data-string">"{item}"</span>
      {toggled ? "" : parent.length - 1 !== index ? ", " : ""}
    </div>
  );
}

function StringObject({
  keyString,
  item,
  type,
}: {
  keyString: string;
  item: any;
  type: string;
}) {
  return (
    <span className="item">
      <span className="data-key">{keyString}</span>:
      <div className="inline-div">
        <div
          className="data-string inline-div"
          style={{
            position: type === "grid" ? "absolute" : "unset",
            width: "max-content",
          }}
        >
          "{item[keyString]}"
        </div>
      </div>
      {type === "flex" ? ", " : null}
    </span>
  );
}

function NumberObject({ keyString, item }: { keyString: string; item: any }) {
  return (
    <span className="item">
      <span className="data-key">{keyString}</span>:{" "}
      <div className="data-number inline-div">{item[keyString]}</div>,
    </span>
  );
}

function BooleanObject({ keyString, item }: { keyString: string; item: any }) {
  return (
    <span className="item">
      <span className="data-key">{keyString}</span>:{" "}
      <div className="data-boolean inline-div">
        {JSON.stringify(item[keyString])}
      </div>
      ,
    </span>
  );
}

function DataObject({ item, type }: any) {
  const [toggle, setToggle] = useState<string[]>([]);

  function Toggler({ itemKey }: { itemKey: string }) {
    return (
      <>
        {toggle.includes(itemKey) ? (
          <CaretDownOutlined
            style={{ position: "absolute", right: "100%", top: "8px" }}
            onClick={() => setToggle(toggle.filter((item) => item !== itemKey))}
          />
        ) : (
          <CaretRightOutlined
            style={{ position: "absolute", right: "100%", top: "30%" }}
            onClick={() => setToggle([...toggle, itemKey])}
          />
        )}
      </>
    );
  }

  function ObjectArray({ item, itemkey }: any) {
    return (
      <span className="item">
        <Toggler itemKey={itemkey} />
        <span className="data-key">{itemkey}</span>: ({item.length}){" "}
        {toggle.includes(itemkey) ? (
          <div className="cast-list">
            {item.map((item: any, i: number) => {
              return <Response {...item} index={i} key={i} />;
            })}
          </div>
        ) : (
          <div className="inline-div">
            <div
              style={{
                position: "absolute",
                width: "max-content",
                marginLeft: "5px",
              }}
              className="inline-div"
            >
              [{"{...}, ".repeat(item.length).slice(0, -2)}]
            </div>
          </div>
        )}
      </span>
    );
  }

  return (
    <StyledContainer
      style={{ display: type, paddingLeft: type === "grid" ? "1.5em" : 0 }}
    >
      {Object.keys(item)
        .filter((el) => el !== "index")
        .map((keyString) => {
          if (typeof item[keyString] === "string") {
            return (
              <StringObject type={type} keyString={keyString} item={item} />
            );
          }
          if (typeof item[keyString] === "number") {
            return <NumberObject keyString={keyString} item={item} />;
          }
          if (typeof item[keyString] === "boolean") {
            return <BooleanObject keyString={keyString} item={item} />;
          }
          if (Array.isArray(item[keyString])) {
            if (
              ["reviews", "cast", "similar", "bookmark"].includes(keyString)
            ) {
              return <ObjectArray item={item[keyString]} itemkey={keyString} />;
            } else {
              return (
                <span className="item">
                  <Toggler itemKey={keyString} />
                  <span className="data-key">{keyString}</span>:{" "}
                  <div className="inline-div">
                    {toggle.includes(keyString)
                      ? `Array(${item[keyString].length})`
                      : "["}
                    {item[keyString].map((item: any, i: number, arr) => {
                      return (
                        <StringArray
                          parent={arr}
                          item={item}
                          key={i}
                          index={i}
                          toggled={toggle.includes(keyString)}
                        />
                      );
                    })}
                    {toggle.includes(keyString) ? "" : "]"}
                  </div>
                </span>
              );
            }
          }
          return null;
        })}
    </StyledContainer>
  );
}

export default DataObject;
