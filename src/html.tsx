import React, { ReactElement } from "react";

type BasePropTypes = {
  htmlAttributes: {
    lang: string;
  };
  headComponents: string;
  bodyAttributes: [];
  preBodyComponents: string;
  body: string;
  postBodyComponents: string;
};

const Base = ({
  htmlAttributes: { lang, ...otherHtmlAttributes },
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}: BasePropTypes): ReactElement => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <html lang={lang} {...otherHtmlAttributes}>
    <head>
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-na1.hs-scripts.com/43580535.js"
      ></script>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <link rel="icon" href="/apple-touch-icon.png" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {headComponents}
      <title>Code & Deploy</title>
    </head>
    <body
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...bodyAttributes}
    >
      {preBodyComponents}
      <div
        key="body"
        id="___gatsby"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </html>
);

export default Base;
