const HowToApply = () => {
  const blockContent = [
    {
      id: 1,
      icon: "flaticon-phone",
      title: "문의하기",
      text: `홈페이지 문의하기를 통해 문의하시거나, 전화로 문의하실 수 있습니다. Tel.031-411-0066`,
    },
    {
      id: 2,
      icon: "icon-drawing",
      title: "광고 작성",
      text: `작성하실 광고의 유형, 제목 및 내용, 궁금하신 점에 대해 문의해주세요. 친절하게 설명해드리겠습니다.`,
    },
    {
      id: 3,
      icon: "icon-task",
      title: "업로드된 광고 확인",
      text: `작성 완료된 광고를 홈페이지에서 확인해보세요. 문제가 있거나 수정사항이 있다면 편하게 말씀해주세요.`,
    },
    {
      id: 4,
      icon: "icon-one-finger-click",
      title: "광고 등록 완료",
      text: `광고 등록이 완료되었습니다. 더 빠른 구인을 위해 상단 노출을 원하실 경우 문의주세요, 친절하게 해결책을 제시해드리겠습니다.`,
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
          <div className="work-block -type-4">
            <div className="icon-wrap">
              <span className={`icon ${item.icon}`}></span>
            </div>

            <h5 className="title">{item.title}</h5>
            <p className="text" style={{wordBreak:'keep-all'}}>{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default HowToApply;
