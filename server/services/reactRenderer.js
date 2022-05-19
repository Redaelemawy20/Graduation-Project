import ReactDOMServer, { renderToString } from "react-dom/server";
import Routes from "../client/Routes";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import FullPageReload from "../client/components/common/FullPageReload";
export default (req, store, results, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  const spinner = ReactDOMServer.renderToString(<FullPageReload />);
  const html = `
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Menofia University</title>
        <link rel="stylesheet" type="text/css" href="/ReactToastify.css" /> 
        <link rel="stylesheet" type="text/css" href="/styles.css" /> 
        <link rel="stylesheet" type="text/css" href="/dist/css/bootstrap.min.css" /> 
      </head>
      <body>
        <div id="root">
          <div id="spinner">
           ${spinner}
          </div> 
          ${content}
        </div>
      </body>
      <script>
        window.INTIALSTATE= ${JSON.stringify(store.getState())}
        window.SERVER_DATA= ${JSON.stringify(results)}
        window.addEventListener("load", (event) => {
          let spinner = document.getElementById("spinner");
          if (spinner)
            spinner.style.display = "none";
        });
      </script>
      <script src="/bundle.js"></script>
      
    </html>`;

  return html;
};
