import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // eslint-disable-next-line no-param-reassign
      ctx.renderPage = () => originalRenderPage({
        // eslint-disable-next-line react/display-name
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
      });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}