import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import Home from "../src/client/components/Home";
import Routes from "../src/client/Routes";

import { StaticRouter } from "react-router-dom/server";
export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.path}>
      <Routes />
    </StaticRouter>
  );

  const html = `
    <html>
      <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="http://localhost:4000/styles.css" />
        <link rel="stylesheet" type="text/css" href="http://localhost:4000/dist/css/bootstrap.min.css" />
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src="http://localhost:4000/bundle.js"></script>
    </html>`;

  return html;
};
