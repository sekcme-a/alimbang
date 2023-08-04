import Link from "next/link";
import CopyrightFooter from "./CopyrightFooter";
import FooterApps2 from "./FooterApps2";
import FooterContent3 from "./FooterContent3";

const Footer = () => {

  return (
    <footer className="main-footer style-five" style={{backgroundColor:"rgb(248,248,248"}}>
      <div className="auto-container" style={{borderTop:"1px solid rgb(222,222,222)"}}>
        <div className="widgets-section" data-aos="fade-up" >
          <div className="row">
            <div className="big-column col-xl-3 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <h3 style={{fontSize:"19px", fontWeight:"bold"}}>안산<strong style={{fontSize:"28px", color: "green", marginLeft:"2px"}}>가로수</strong></h3>
                </div>
                <p className="phone-num">
                  <span style={{fontWeight:'bold'}}>전화문의 </span>
                  <a href="tel:031-411-0066" style={{fontWeight:"bold"}}>031-411-0066</a>
                </p>
                <p className="address">
                  경기도 안산시 단원구 3051번지
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
