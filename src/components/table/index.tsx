import React from "react";
import { Table } from "antd";
import { AnyObject } from "antd/es/_util/type";
import { ColumnsType } from "antd/es/table";
import styled from "styled-components";

const StyledTable = styled(Table)`
  margin-top: 1.5em;

  p {
    font-family: "Space Mono", monospace;
  }

  a,
  span {
    color: #e94d61;
    cursor: pointer;
  }

  .ant-table-thead {
    .ant-table-cell {
      background: #258ce7;
      color: #fff;

      &::before {
        display: none;
      }
    }
  }
  .ant-table-tbody {
    .ant-table-row :nth-child(even) {
      .value {
        &-string {
          color: #68db2e;
        }

        &-boolean {
          color: #3b1bef;
        }

        &-review-array,
        &-cast-array,
        &-similar-array,
        &-bookmark-array,
        &-content-array {
          color: #129ce6;
        }

        &-string-array {
          color: #e6470d;
        }

        &-number {
          color: #d414a4;
        }
      }
    }
  }
`;

const column: ColumnsType<AnyObject> = [
  {
    title: "Key",
    dataIndex: "label",
    key: "label",
    width: 50,
    fixed: "left",
    render: (key) => <p>{key}</p>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    width: 50,
    render: (type) => (
      <p className={`value-${type.replace("[]", "-array")}`}>{type}</p>
    ),
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: 100,
  },
];

function CustomTable({ dataSource }) {
  return (
    <StyledTable
      dataSource={dataSource}
      columns={column}
      pagination={false}
      scroll={{
        x: 300,
      }}
    />
  );
}

export default CustomTable;
