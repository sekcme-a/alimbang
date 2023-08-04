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
          "국민의 건강과 행복의 장을 여는 대한생활체육회. 대한생활체육회는 순수 민간 비영리 법인단체로서 정치, 종교, 등 모든 분야와 무관한 국민생활체육의 권장, 발전을 목표로 하고 있습니다."
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "대한생활체육회"} />
      <meta property="og:description"
        content={
        description ||
        "국민의 건강과 행복의 장을 여는 대한생활체육회. 대한생활체육회는 순수 민간 비영리 법인단체로서 정치, 종교, 등 모든 분야와 무관한 국민생활체육의 권장, 발전을 목표로 하고 있습니다."
      }/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://ansangarosu.com"} />
      <meta property="og:image" content={"https://ansangarosu.com/images/logo.png" } />
      <meta name="keywords" content="대한생활체육회"/>
      <meta property="og:article:author" content="안산가로수" />
    </Head>
  </>
);

export default Seo;
