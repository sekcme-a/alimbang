import Link from "next/link";

const SearchOrApplyJob = () => {
  return (
    <section
      className="call-to-action-two -type-4"
      style={{ backgroundImage: "url(images/index-16/cta/bg.png)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2 style={{color: "white"}}>여러분의 일자리가 기다리고 있습니다</h2>
          <div style={{color: "white"}} className="text">
            28년, 6000호 이상의 역사. 100+ 개의 구인공고. 
          </div>
        </div>

        <div className="btn-box">
          <Link href="/applyJob" className="theme-btn btn-one">
            구인공고 등록
          </Link>
          <Link href="/job" className="theme-btn btn-two">
            구인구직 보러가기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SearchOrApplyJob;
