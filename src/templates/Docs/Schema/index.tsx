import React from "react";

import CustomTable from "../../../components/table";
import DocsLayout from "../../../layout/docs";
import { data } from "./constant";
import { NumberOutlined } from "@ant-design/icons";

function Schema() {
  return (
    <DocsLayout>
      <div>
        <header>
          <h1>Data Schema</h1>
          <p>
            This page will help you to identify all the property of all data
            from the API.
          </p>
        </header>
        {data.map(({ src, header, id }) => {
          return (
            <section style={{ marginTop: "1.5em" }} id={id}>
              <header>
                <h3>
                  <NumberOutlined style={{ color: "#e94d61" }} />
                  &nbsp;{header}
                </h3>
              </header>
              <CustomTable dataSource={src} />
            </section>
          );
        })}
      </div>
    </DocsLayout>
  );
}

export default Schema;
