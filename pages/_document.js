import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="kr">
      <Head>
        <meta charSet="UTF-8" />
        <link passhref rel="icon" href="/favicon.ico" />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="시흥알림방, 구인구직, 구인, 구직, 시흥 구인, 시흥 구직, "
        />
        <meta property="og:site_name" content="시흥알림방" />
        <meta name="naver-site-verification" content="dff4d9c1706e786ef9faec449c45bb43125b7cea" />
        <meta name="google-site-verification" content="98uSvYnGQ00LwGZxGBAGB7-s5if5Sk7bYc4gWX32D5E" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
