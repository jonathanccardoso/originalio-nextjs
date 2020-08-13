import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import GlobalStyles from "../styles/global";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Header />
          <Main />
          <NextScript />
          <Footer />
        </body>
      </html>
    );
  }
}
