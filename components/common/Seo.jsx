import Head from "next/head";

const Seo = ({ title,description,  url }) => (

    <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>
        {title || `시흥알림방`}
      </title>
      <meta
        name="description"
        content={
          description ||
          "시흥 알림방, 빠르고 편리한 구인구직. 지금 바로 구인해보세요!"
        }
      />
   
      <meta property="og:title" content={title || "시흥알림방"} />
      <meta property="og:description"
        content={
        description ||
        "시흥 알림방, 빠르고 편리한 구인구직. 지금 바로 구인해보세요!"
      }/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://alimbang.kr"} />
      <meta property="og:image" content={"https://alimbang.kr/images/logo.png" } />
      <meta name="keywords" content="시흥알림방"/>
      <meta property="og:article:author" content="시흥알림방" />
      <link rel="canonical" href={url||"https://xn--2i0bm5iryeh7q.kr"} />
    </Head>
  
);

export default Seo;
