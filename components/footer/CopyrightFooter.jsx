
const CopyrightFooter = () => {
  return (
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="outer-box">
          <div className="copyright-text">
            © {new Date().getFullYear()} 시흥 알림방{" "}
            {/* <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noopener noreferrer"
            >
              ib-themes
            </a> */}
            . All Right Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
