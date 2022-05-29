import ReactDOMServer, { renderToString } from "react-dom/server";
import Routes from "../client/Routes";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import FullPageReload from "../client/components/common/FullPageReload";

import TranslationContext from "../TranslationContext";
export default (req, store, results) => {
  const lang = req.currentLang;
  const content = ReactDOMServer.renderToStaticMarkup(
    <Provider store={store}>
      <TranslationContext.Provider value={req.translations}>
        <StaticRouter location={req.path}>
          <Routes />
        </StaticRouter>
      </TranslationContext.Provider>
    </Provider>
  );

  const spinner = ReactDOMServer.renderToString(<FullPageReload />);

  const html = `
              <html ${lang === "ar" ? 'dir= "rtl"' : ""}>
                <head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta charSet='utf-8' />
                <meta name="viewport" content="width=device-width, initial-scale=1">
                  <title>Menofia University</title>
                  <link rel="stylesheet" type="text/css" href="/ReactToastify.css" /> 
                  <link rel="stylesheet" type="text/css" href="/styles.css" /> 
                  <link rel="stylesheet" type="text/css" href="/dist/css/bootstrap.min.css" /> 
                  <link rel="stylesheet" type="text/css" href="/tabler.min.css" />
                  <link
        rel="stylesheet"
        href="/tabler-vendors.min.css"
      />
                </head>
                <body >
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
                  window.TRANSLATION = ${JSON.stringify(req.translations)}
                  window.addEventListener("load", (event) => {
                    let spinner = document.getElementById("spinner");
                    if (spinner)
                      spinner.style.display = "none";
                  });
                </script>
                <script src="/bundle.js"></script>
                <script src="/tabler.min.js"></script>
              </html>`;

  return html;
};
