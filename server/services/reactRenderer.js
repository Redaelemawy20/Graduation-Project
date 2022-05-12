import { renderToString } from "react-dom/server";
import Routes from "../client/Routes";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
export default (req, store, results, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  const html = `
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Menofia University</title>
        <link rel="stylesheet" type="text/css" href="http://localhost:3000/styles.css" /> 
        <link rel="stylesheet" type="text/css" href="http://localhost:3000/dist/css/bootstrap.min.css" /> 
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script>
        window.INTIALSTATE= ${JSON.stringify(store.getState())}
        window.SERVER_DATA= ${JSON.stringify(results)}
      </script>
      <script src="http://localhost:3000/bundle.js"></script>
    </html>`;

  return html;
};
