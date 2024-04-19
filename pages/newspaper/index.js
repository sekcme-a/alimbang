import Seo from "components/common/Seo"
import Footer from "components/footer/Footer"
import Header2 from "components/header/Header2"
import MobileMenu from "components/header/MobileMenu"
import NewspaperList from "components/newspaper/NewspaperList"

import styles from "components/newspaper/index.module.css"


const Newspaper = () => {



  return(
    <>
      <Seo title="신문보기 - 시흥알림방" description="시흥알림방이 배포한 신문을 온라인에서도 쉽게 확인해보세요!" url="https://alimbang.kr/newspaper" />
      <span className="header-span"></span>

      <Header2 />
      <MobileMenu />
      <div className={styles.main_container}>
        <h3 className={styles.title}>시흥 알림방의 최근 발행한 신문 목록입니다.</h3>
        <p>최근 12개의 신문만 표시됩니다.</p>

        <NewspaperList />
      </div>

      <Footer />
    </>
  )
}

export default Newspaper