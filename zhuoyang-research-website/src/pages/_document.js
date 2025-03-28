import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Include Tailwind directly from CDN as a fallback */}
        <link 
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" 
          rel="stylesheet"
        />
        {/* Custom styles to match your design */}
        <style>{`
          body {
            background-color: rgb(245, 247, 250);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
              Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Georgia', serif;
          }
          .bg-blue-900 {
            background-color: #192b6a;
          }
          .bg-blue-50 {
            background-color: #f0f5ff;
          }
          .text-blue-900 {
            color: #192b6a;
          }
          .border-blue-900 {
            border-color: #192b6a;
          }
          .hover\\:text-blue-200:hover {
            color: #b4c6fc;
          }
          .border-blue-700 {
            border-color: #1a56db;
          }
          .border-green-700 {
            border-color: #046c4e;
          }
          .border-indigo-700 {
            border-color: #4338ca;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}