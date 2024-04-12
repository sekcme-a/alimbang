import SearchForm from "./SearchForm";
import JobCategory from "./JobCategory";
import { useEffect, useState } from 'react';

const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth < 500); // 모바일 화면 너비를 기준으로 확인할 수 있습니다.
    };

    // 컴포넌트가 마운트될 때와 창 크기가 변경될 때마다 체크합니다.
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);


  return (
    <section
      className="banner-section-four -type-16"
      style={
        isMobile ? 
        {minHeight:"300px"}
        :
        { backgroundImage: "url(custom/home/bg.png)" }
      }
    >
      <div className="auto-container">
        <div className="content-box">
          <div className="title-box" data-wow-delay="500" data-aos="fade-up">
            <h3>시흥 알림방</h3>
            <p style={{lineHeight:"1.2"}}>시흥의 구인구직, 부동산, 아파트, 자동차, 생활정보를 제공합니다.</p>
          </div>
          {/* End title-box */}

          <div
            className="job-search-form"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <SearchForm />
          </div>
          {/* <!-- Job Search Form --> */}

          {!isMobile && 
            <div className="features-icons">
              <JobCategory />
            </div>
          }
        </div>
        {/* End content-box */}
      </div>
    </section>
    // <!-- End Banner Section-->
  );
};

export default Hero;
