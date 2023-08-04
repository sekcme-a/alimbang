// import Header from "./Header";
// import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "components/header/MobileMenu";
import Header from "components/header/Header";
import Hero from "./hero/Hero"
import Premium from "components/home/premium/Premium"
import SearchOrApplyJob from "./SearchOrApplyJob"
import HomeJobSpecial from "./HomeJobSpecial"
import HowToApply from "./HowToApply"
import Footer from "components/footer/Footer"

const Index = () => {
  return (
    <>
      {/* <LoginPopup /> */}

      <Header />

      <MobileMenu />

      <Hero/>

      <Premium />

      <SearchOrApplyJob />

      <section className="testimonial-section -type-2 layout-pt-120 layout-pb-120">
        <div className="container-fluid">
          {/* <!-- Sec Title --> */}
          <div className="sec-title text-center">
            <h2>스페셜 구인광고</h2>
            <div className="text">
              안산 가로수의 스페셜 구인광고 입니다.
            </div>
          </div>
        </div>
        <div className="carousel-outer" data-aos="fade-up">
          {/* <!-- Testimonial Carousel --> */}
          <div className="testimonial-carousel gap-x25 center-item-active slick-list-visible">
            <HomeJobSpecial />
          </div>
        </div>
      </section>

      <section className="layout-pt-120 layout-pb-120" style={{backgroundColor:"#F3F4F6", paddingTop:"50px"}}>
        <div className="auto-container" >
          <div className="sec-title text-center">
            <h2>광고 등록 방법</h2>
            <div className="text">
              쉽고 빠르게 안산 가로수에 광고를 등록하실 수 있습니다.
            </div>
          </div>
          {/* End sec-title */}

          <div className="row grid-base pt-50" data-aos="fade-up">
            <HowToApply />
            {/* <!-- Work Block --> */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
