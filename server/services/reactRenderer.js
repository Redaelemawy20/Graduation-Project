import { renderToString } from "react-dom/server";
import { matchRoutes } from "react-router-dom";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import Home from "../client/components/Home";
import Routes, { routeObj } from "../client/Routes";
import { StaticRouter } from "react-router-dom/server";
export default (req) => {
  const matchedRoutes = matchRoutes(routeObj, req.path);
  if (matchedRoutes !== null)
    matchedRoutes.map(({ route }) => {
      return route.loadData && route.loadData();
    });
  const content = renderToString(
    <StaticRouter location={req.path}>
      <Routes />
    </StaticRouter>
  );

  const html = `
    <html>
      <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <link rel="stylesheet" type="text/css" href="dist/css/bootstrap.min.css" />
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src="bundle.js"></script>
    </html>`;

  return html;
};
