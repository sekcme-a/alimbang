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
            <a href="tel:031-411-0066">Tel. 031-411-0066</a>
          </span>
          <span className="address">
            329 Queensberry Street, North Melbourne VIC <br />
            3051, Australia.
          </span>
          <a href="mailto:songmin21s@naver.com" className="email">
            songmin21s@naver.com
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
