import Head from "next/head";

const Seo = ({ title,description,  url }) => (
  <>
    <Head>
      <title>
        {title ?
          `${title} || 안산가로수-빠르고 편리한 구인구직` : `안산가로수-빠르고 편리한 구인구직`}
      </title>
      <meta
        name="description"
        content={
          description ||
          "안산 가로수, 빠르고 편리한 구인구직. 지금 바로 구인해보세요!"
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "안산가로수"} />
      <meta property="og:description"
        content={
        description ||
        "안산 가로수, 빠르고 편리한 구인구직. 지금 바로 구인해보세요!"
      }/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://ansangarosu.com"} />
      <meta property="og:image" content={"https://ansangarosu.com/images/logo.png" } />
      <meta name="keywords" content="안산가로수"/>
      <meta property="og:article:author" content="안산가로수" />
    </Head>
  </>
);

export default Seo;
