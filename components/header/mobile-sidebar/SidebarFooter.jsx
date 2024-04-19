const SidebarFooter = () => {
  const socialContent = [
    { id: 1, icon: "fa-facebook-f", link: "https://www.facebook.com/" },
    { id: 2, icon: "fa-twitter", link: "https://www.twitter.com/" },
    { id: 3, icon: "fa-instagram", link: "https://www.instagram.com/" },
    { id: 4, icon: "fa-linkedin-in", link: "https://www.linkedin.com/" },
  ];

  return (
    <div className="mm-add-listing mm-listitem pro-footer">
      {/* <a href="#" className="theme-btn btn-style-one mm-listitem__text">
        Job Post
      </a> */}
      {/* job post btn */}
      <div style={{marginTop:"40px"}}/>
      <div className="mm-listitem__text">
        <div className="contact-info">
          <span className="phone-num">
            <span>전화 문의</span>
            <a href="tel:031-313-9330">Tel. 031-313-9330 / 031-314-9330</a>
          </span>
          <span className="address">
            경기도 시흥시 신천로 65
          </span>
          <a href="mailto:bkshim21@naver.com" className="email">
            bkshim21@naver.com
          </a>
        </div>
        {/* End .contact-info */}

        {/* <div className="social-links">
          {socialContent.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
            >
              <i className={`fab ${item.icon}`}></i>
            </a>
          ))}
        </div> */}
        {/* End social-links */}
      </div>
      {/* End .mm-listitem__text */}
    </div>
  );
};

export default SidebarFooter;
