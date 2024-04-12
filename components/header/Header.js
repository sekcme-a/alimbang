import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import Image from "next/image";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header header-style-four -type-16 ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="logo">
                <Link href="/">
                  {/* <img src="/images/header-logo.svg" alt="brand" /> */}
                  <h1 className="garosu_logo_box" style={{position:"relative"}}>
                    <p className="garosu_logo">시흥</p>알림방
                    {/* <Image
                      src="/images/alimbang_logo.png"
                      alt="로고"
                      width={400}
                      height=
                      style={{ objectFit: 'contain' }}
                      fill
                    /> */}
                  </h1>
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            <HeaderNavContent />
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          {/* <div className="outer-box">
            <div className="btn-box">
              <a
                href="#"
                className="theme-btn btn-style-six call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
              >
                Login / Register
              </a>
              <Link
                href="/employers-dashboard/post-jobs"
                className="theme-btn btn-style-five"
              >
                Job Post
              </Link>
            </div>
          </div> */}
        </div>
        {/* <!-- Main box --> */}
      </div>
    </header>
  );
};

export default Header;
