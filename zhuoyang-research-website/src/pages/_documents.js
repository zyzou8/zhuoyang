import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const prefix = process.env.NODE_ENV === 'production' ? '/zhuoyang-research-website' : '';
  
  return (
    <Html>
      <Head>
        {/* Ensure path to styles works in both development and production */}
        <link rel="stylesheet" href={`${prefix}/_next/static/css/app.css`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}