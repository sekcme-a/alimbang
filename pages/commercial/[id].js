import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "components/common/Seo";
import JobOverView from "components/commercial/JobOverview";
import JobDetailsDescriptions from "components/commercial/JobDetailDescriptions";
import ApplyJobModalContent from "components/commercial/ApplyJobModalContent";
import CompanyInfo from "components/commercial/CompanyInfo";
import Header2 from "components/header/Header2";
import MobileMenu from "components/header/MobileMenu";
import Footer from "components/footer/Footer";
import styles from "components/commercial/Index.module.css"

import useData from "context/data";

const JobSingleDynamicV3 = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const id = router.query.id;
  const {fetch_from_id} = useData()

  //***모니터 크기 측정 */
  const [monitorSize, setMonitorSize] = useState(window.innerWidth);
  
  useEffect(() => {
      const handleResize = () => {
      setMonitorSize(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
      window.removeEventListener('resize', handleResize);
      };
  }, []);
  //**모니터 크기 측정 끝 */


  useEffect(() => {
    setData(fetch_from_id(id))
  }, [id]);

  return (
    <>
      <Seo pageTitle={data.title} />

      <span className="header-span" ></span>

      <Header2 />

      <MobileMenu />

      <section className="job-detail-section" >
        <div className="job-detail-outer" style={monitorSize>1189 ? {
          margin:'30px 150px',
          borderTop:"2px solid black",
          borderLeft:"1px solid rgb(210,210,210)",
          borderRight:"1px solid rgb(210,210,210)",
          borderBottom:"1px solid rgb(210,210,210)",
          padding:'30px 20px 0 20px',
          marginBottom:"100px",
          } : {}}>
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="job-block-outer" >
                  <div className="job-block-seven style-two">
                    <div className="inner-box">
                      <div className="content">
                        <h5 style={{color: "rgb(94, 90, 216)"}}>{data?.commercialType}</h5>
                        <h4 style={{fontWeight:"bold"}}>{data?.title}</h4>
                        <h6>{data?.companyValues?.companyName}</h6>

                      </div>
                    </div>
                  </div>
                </div>


                <div className="job-overview-two" >
                  <h4 style={{fontWeight:"bold"}}>모집 요약</h4>
                  <JobOverView data={data}/>
                </div>
                <div >
                  <JobDetailsDescriptions data={data}/>
                </div>
              </div>

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">

                  <div className="sidebar-widget company-widget">
                    <h6 style={{fontWeight:'bold', marginTop:"-20px", marginBottom:'20px', fontSize:"18px"}}>담당자 정보 및 접수방법</h6>
                    <div className="widget-content">
                      <div className={styles.company_logo_container}>
                        {data?.companyValues?.logoUrl &&
                          <div className={styles.logo}>
                            <img src={data?.companyValues?.logoUrl} alt="logo" />
                          </div>
                        }
                        <h5 className="company-name" style={data?.companyValues?.logoUrl ? {}: {fontSize:"25px"}}>{data?.companyValues?.companyName}</h5>

                      </div>

                      <CompanyInfo data={data}/>
                      {data?.contact&& data?.contact[3]?.content && 
                        <div className="btn-box" >
                          <a
                            href={data?.contact[3]?.content}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="theme-btn btn-style-three"
                            style={{fontWeight:'bold'}}
                          >
                            홈페이지로 이동
                          </a>
                        </div>
                      }
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default dynamic(() => Promise.resolve(JobSingleDynamicV3), {
  ssr: false,
});
