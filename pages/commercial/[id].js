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

import { firestore as db } from "firebase/firebase";

import useData from "context/data";
import Image from "next/image";

const JobSingleDynamicV3 = ({commercialData}) => {
  const router = useRouter();
  const [data, setData] = useState({});
  const id = router.query.id;
  const {fetch_from_id} = useData()



  useEffect(()=> {
    if(!commercialData){
      alert("해당 광고는 삭제됬거나 존재하지 않습니다.")
      router.back()
    }
  },[commercialData])


  
  return (
    <>
      <Seo title={`${commercialData.title} - 시흥알림방`} description={commercialData.content} url={`https://alimbang.kr/commercial/${id}`} />

      <span className="header-span" ></span>

      <Header2 />

      <MobileMenu />

      <section className="job-detail-section" >
        <div className={`job-detail-outer ${styles.detail_outer}`}>
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="job-block-outer" >
                  <div className="job-block-seven style-two">
                    <div className="inner-box">
                      <div className="content">
                        <h5 style={{color: "rgb(94, 90, 216)"}}>{commercialData.commercialType}</h5>
                        <h4 style={{fontWeight:"bold"}}>{commercialData.title}</h4>
                        <h6>{commercialData.companyValues?.companyName}</h6>

                      </div>
                    </div>
                  </div>
                </div>

                {(commercialData.salary+commercialData.date+commercialData.time+commercialData.location).length>1 &&
                  <div className="job-overview-two" >
                    <h4 style={{fontWeight:"bold"}}>모집 요약</h4>
                    <JobOverView data={commercialData}/>
                  </div>
                }
                <div >
                  <JobDetailsDescriptions data={commercialData}/>
                </div>
              </div>

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">

                  <div className="sidebar-widget company-widget">
                    <h6 style={{fontWeight:'bold', marginTop:"-20px", marginBottom:'20px', fontSize:"18px"}}>담당자 정보 및 접수방법</h6>
                    <div className="widget-content">
                      <div className={styles.company_logo_container}>
                        {commercialData.companyValues?.logoUrl &&
                          <div className={styles.logo}>
                            <Image
                              src={commercialData.companyValues?.logoUrl} alt="업체 로고" 
                              width={500}
                              height={300}
                              objectFit="contain"
                              loading="lazy"
                            />
                          </div>
                        }
                        <h5 className="company-name" style={commercialData.companyValues?.logoUrl ? {}: {fontSize:"25px"}}>{commercialData.companyValues?.companyName}</h5>

                      </div>

                      <CompanyInfo data={data}/>
                      {commercialData.contact&& commercialData.contact[3]?.content && 
                        <div className="btn-box" >
                          <a
                            href={commercialData.contact[3]?.content}
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

export async function getServerSideProps ({params}) {
  console.log(params.id)
  const doc = await db.collection('type').doc('alimbang').collection("commercials").doc(params.id).get()
  if(doc.exists){
    const commercialData = {
      commercialType: doc.data().commercialType ?? null,
      title: doc.data().title ?? null,
      companyValues: doc.data().companyValues ?? null,
      salary: doc.data().salary ?? null,
      date: doc.data().date ?? null,
      time: doc.data().time ?? null,
      location: doc.data().location ?? null,
      info: doc.data().info ?? null,
      condition: doc.data().condition ?? null,
      commercialUrl: doc.data().commercialUrl ?? null,
      content: doc.data().content ?? null,
      contact: doc.data().contact ?? null
    }
      return {props: {commercialData: commercialData}}

  }

  return {props: {commercialData: false}}
}
export default JobSingleDynamicV3
// export default dynamic(() => Promise.resolve(JobSingleDynamicV3), {
//   ssr: false,
// });

