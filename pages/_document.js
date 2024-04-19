import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="kr">
      <Head>
        <meta charSet="UTF-8" />
        <link passhref rel="icon" href="https://alimbang.kr/images/favicon.ico" />

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
        <meta name="naver-site-verification" content="89d101bc3792ea563ba4ed4239f1cff7d0525ad2" />
        <meta name="google-site-verification" content="PUcgghKVXAeS3BDMxXZWg_8IQsLu_b_bxtqMRKwJF2Q" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
