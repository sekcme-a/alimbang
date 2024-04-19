import Link from "next/link";
import CopyrightFooter from "./CopyrightFooter";
import FooterContent3 from "./FooterContent3";
import Image from "next/image";

const Footer = () => {

  return (
    <footer className="main-footer style-five" style={{backgroundColor:"rgb(248,248,248", marginTop:"20px"}}>
      <div className="auto-container" style={{borderTop:"1px solid rgb(222,222,222)"}}>
        <div className="widgets-section" data-aos="fade-up" >
          <div className="row">
            <div className="big-column col-xl-3 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  {/* <h3 style={{fontSize:"19px", fontWeight:"bold"}}>시흥<strong style={{fontSize:"28px", color: "rgb(94, 90, 216)", marginLeft:"2px"}}>알림방</strong></h3> */}
                  <Image
                    src="/images/alimbang_logo.png"
                    alt="시흥알림방 로고"
                    width={200}
                    height={30}
                    objectFit="contain"
                  />
                </div>
                <p className="phone-num">
                  <span style={{fontWeight:'bold'}}>전화문의 </span>
                  <a href="tel:031-313-9330" style={{fontWeight:"bold"}}>031-313-9330 / 031-314-9330</a>
                </p>
                <p className="address">
                  경기도 시흥시 신천로65
                  {/* <br /> 3051 1번지. <br /> */}
                  {/* <a href="mailto:support@superio.com" className="email">
                    support@superio.com
                  </a> */}
                </p>
              </div>
            </div>
            {/* End footer address left widget */}

            <div className="big-column col-xl-9 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent3 />

                {/* <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget">
                    <h4 className="widget-title">Mobile Apps</h4>
                    <FooterApps2 />
                  </div>
                </div> */}
              </div>
              {/* End .row */}
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
        {/* <!--Widgets Section--> */}
      </div>
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
  );
};

export default Footer;
