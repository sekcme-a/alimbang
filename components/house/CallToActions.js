const CallToActions = () => {
  return (
    <div className="call-to-action-four ">
      <h5 style={{fontWeight:"bold"}}>구인중이세요?</h5>
      <p style={{fontWeight:"bold"}}>
        시흥알림방를 통해 효과좋고 빠른 구인을 경험해보세요!
      </p>
      <a href="#" className="theme-btn btn-style-one bg-blue">
        <span className="btn-title" style={{fontWeight:"bold"}}>구인하러 가기</span>
      </a>
      <div
        className="image"
        style={{ backgroundImage: "url(/images/resource/ads-bg-4.png)" }}
      ></div>
    </div>
  );
};

export default CallToActions;
