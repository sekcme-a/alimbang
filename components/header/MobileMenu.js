import Link from "next/link";
import MobileSidebar from "./mobile-sidebar";
import Image from "next/image";

const MobileMenu = () => {
  return (
    // <!-- Main Header-->
    <header className="main-header main-header-mobile">
      <div className="auto-container">
        {/* <!-- Main box --> */}
        <div className="inner-box">
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  {/* <img src="/images/logo.svg" alt="brand" /> */}
                  <h2 className="garosu_logo_box_mobile">
                    {/* <p className="garosu_logo_mobile">시흥</p>알림방 */}
                    <Image
                      src="/images/alimbang_logo.png"
                      alt="로고"
                      width={150}
                      height={30}
                      style={{height: "22px", objectFit:"contain"}}
                      objectFit="contain"
                    />
                  </h2>
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            <MobileSidebar />
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box" style={{paddingRight:"8px"}}>
            {/* <div className="login-box">
              <a
                href="#"
                className="call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
              >
                <span className="icon icon-user"></span>
              </a>
            </div> */}
            {/* login popup end */}

            <a
              href="#"
              className="mobile-nav-toggler"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
            >
              <span className="flaticon-menu-1"></span>
            </a>
            {/* right humberger menu */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileMenu;
