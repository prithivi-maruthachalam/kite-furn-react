import App from './App';
import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import cors from 'cors'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
export const renderApp = (req, res) => {
  const context = {};
  const markup = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const html =
    // prettier-ignore
    `<!doctype html>
  <html lang="">
  <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet='utf-8' />
      <title>Kite Furn | Home</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${
      assets.client.css
        ? `<link rel="stylesheet" href="${assets.client.css}">`
        : ''
      }

      <!--SEO meta tags-->
      <meta name="description" content="Kite Furniture is the best furniture store in Coimbatore, Tamil Nadu, India. We sell and design modular kitchens, 
              customiszed interiors and furniture for homes, restaurants, eateries, bakeries with the best of quality. Made in India"/>
      <link rel="canonical" href="http://www.kitefurn.in/" />
      
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Kite Furniture - Customised Furniture and Interiors - best quality and European Engineering - Made in India" />
      <meta property="og:description" content="Kite Furniture is the best furniture store in Coimbatore, Tamil Nadu, India. We sell and design modular kitchens, 
              customiszed interiors and furniture for homes, restaurants, eateries, bakeries with the best of quality. Made in India" />
      <meta property="og:url" content="http://www.kitefurn.in/" />
      <meta property="og:site_name" content="Kite Furn Home" />
      
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content="Kite Furniture is the best furniture store in Coimbatore, Tamil Nadu, India. We sell and design modular kitchens, 
      customiszed interiors and furniture for homes, restaurants, eateries, bakeries with the best of quality. Made in India />
      <meta name="twitter:image" content="data:image/png;base64,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" />
      
      <script type='application/ld+json' class='yoast-schema-graph yoast-schema-graph--main'>
          {
              "@context":"https://schema.org",
              "@graph":
                  [
                      {
                          "@type":"Organization",
                          "@id":"http://www.kitefurn.in/",
                          "name":"Kite Furniture",
                          "url":"http://www.kitefurn.in/",
                          "sameAs":[]
                      },
                      {
                          "@type":"WebSite",
                          "@id":"http://www.kitefurn.in/",
                          "url":"http://www.kitefurn.in/",
                          "name":"Kite Furniture",
                          "publisher":{"@id":"http://www.kitefurn.in/"},
                          "potentialAction":{"@type":"SearchAction","target":"http://www.kitefurn.in/?s={search_term_string}","query-input":"required name=search_term_string"}
                      },
                      {
                          "@type":"WebPage",
                          "@id":"http://www.kitefurn.in/",
                          "url":"http://www.kitefurn.in/",
                          "inLanguage":"en-US",
                          "name":"Kite Furniture - Customised Furniture and Interiors - best quality and European Engineering - Made in India",
                          "isPartOf":{"@id":"http://www.kitefurn.in/"},
                          "about":{"@id":"http://www.kitefurn.in/"},
                          "datePublished":"2020-015-11T06:02:23+00:00",
                          "description":"Kite Furniture is the best furniture store in Coimbatore, Tamil Nadu, India. We sell and design modular kitchens, 
                                  customiszed interiors and furniture for homes, restaurants, eateries, bakeries with the best of quality. Made in India"
                      }
                  ]
              }
      </script>
      <!--End of SEO meta tags-->

  </head>
  <body>
      <div id="root">${markup}</div>
      <script src="${assets.client.js}" defer crossorigin></script>
  </body>
</html>`;

  return { html, context };
};

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use(cors())
  .get('/*', (req, res) => {
    const { html, context } = renderApp(req, res);

    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      return res.redirect(301, context.url);
    }

    res.send(html);
  });

export default server;
