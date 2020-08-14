import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import GlobalStyles from "../styles/global";

interface Props {
  styleTags: any;
}

export default class Layout extends Document<Props> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(
        <>
          <App {...props} />
          <GlobalStyles />
        </>
      )
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

          <meta name="theme-color" content="#22313f" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#22313f"
          />
          <meta name="msapplication-navbutton-color" content="#22313f" />

          {/* <link rel="shortcut icon" href="images/favicon-icon.png" /> */}
          <meta
            name="description"
            content="Layout of the Original io with next js"
          />
          <meta name="author" content="Jonathan Cardoso" />
        </head>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
