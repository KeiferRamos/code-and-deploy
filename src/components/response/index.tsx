import React, { useState } from "react";
import { CaretRightOutlined, CaretDownOutlined } from "@ant-design/icons";
import styled from "styled-components";
import DataObject from "./object";

const StyledResponse = styled.div`
  .data {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    overflow: hidden;
    position: relative;
    z-index: 2;

    .toggle-btn {
      display: flex;
      gap: 5px;
      align-items: center;
    }

    .end-bracket {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      background: #272727;
      padding-left: 5px;
    }

    .object-container {
      position: absolute;
      display: flex;
      width: max-content;
      left: 40px;
    }
  }

  .toggled {
    flex-direction: column;
    align-items: start;
  }
`;

function Response(item: any & { index: number }) {
  const [toggle, setToggled] = useState(false);

  return (
    <StyledResponse>
      <span className={`${toggle ? "toggled" : ""} data`}>
        <span className="toggle-btn" onClick={() => setToggled(!toggle)}>
          {toggle ? <CaretDownOutlined /> : <CaretRightOutlined />}
          {item.index}:
        </span>
        {!toggle ? (
          <>
            <div className="object-container">
              &#123;
              <DataObject item={item} type="flex" />;
            </div>
            <span className="end-bracket">...&#125;</span>
          </>
        ) : (
          <DataObject item={item} type="grid" />
        )}
      </span>
    </StyledResponse>
  );
}

export default Response;
