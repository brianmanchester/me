import React from 'react';
import { Buffer } from 'buffer';
import { v4 as uuidv4 } from 'uuid';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

// Internal
import theme from '../styles/theme';
import { getDirectives } from '../config/csp';

// Internal view
import NextCSP from '../config/NextCSP';
import CssInJsCsp from '../config/CssInJsCsp';

const isProd = process.env.NODE_ENV === 'production';
const nonce = isProd ? Buffer.from(uuidv4()).toString('base64') : '';
export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <NextCSP
            documentProps={this.props}
            directives={getDirectives(process.env.NODE_ENV === 'production', nonce)}
          />
          {isProd && <CssInJsCsp nonce={nonce} />}
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap"
          />
          {/* <style
            id='jss-server-side'
            nonce={nonce}
            dangerouslySetInnerHTML={{ __html: new ServerStyleSheets().toString() }}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

AppDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
  };
};