import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

/**
 * 기본 Document class의 문제점을 수정하는 custom document
 * 아래의 수정사항을 포함한다
 *
 * - Server-side에서 Styled-component를 build하여 <head> tag에 삽입하지 못하는 문제 수정
 */
class CustomDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />), // react-dom tree에서 style을 가져온다
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            {/*styled-component의 style element를 <head>에 삽입한다*/}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
}

export default CustomDocument;
