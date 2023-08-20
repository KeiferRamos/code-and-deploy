const path = require("path");

const MainPageTemplate = path.resolve("./src/templates/Main/index.tsx");
const IntroPageTemplate = path.resolve("./src/templates/Docs/Intro/index.tsx");
const AxiosPageTemplate = path.resolve("./src/templates/Docs/Axios/index.tsx");
const ParametersPageTemplate = path.resolve(
  "./src/templates/Docs/Parameters/index.tsx"
);
const SchemaPageTemplate = path.resolve(
  "./src/templates/Docs/Schema/index.tsx"
);
const RequestPageTemplate = path.resolve(
  "./src/templates/Docs/Request/index.tsx"
);

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: "/",
    component: MainPageTemplate,
  });

  createPage({
    path: "/docs",
    component: IntroPageTemplate,
  });

  createPage({
    path: "/docs/using-axios",
    component: AxiosPageTemplate,
  });

  createPage({
    path: "/docs/parameters",
    component: ParametersPageTemplate,
  });

  createPage({
    path: "/docs/request",
    component: RequestPageTemplate,
  });

  createPage({
    path: "/docs/schema",
    component: SchemaPageTemplate,
  });
};
