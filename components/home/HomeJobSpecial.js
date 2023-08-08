
import Slider from "react-slick";
import { useRouter } from "next/router";
import useData from "context/data";
const data = [
  {
    title:"인너하임 관리자를 모집합니다.",
    content:"인너하임 관리자를 모집합니다. 시급 2만원 주 7일 근무, 4대보험 퇴직금 무, 무이자 할부 최대 48개월까지",
    companyName:"인너하임 그림이네72",
    id:"1234"
  },
  {
    title:"인너하임 관리자를 모집합니다.",
    content:"인너하임 관리자를 모집합니다. 시급 2만원 주 7일 근무, 4대보험 퇴직금 무",
    companyName:"인너하임 그림이네72"
  },
  {
    title:"인너하임 관리자를 모집합니다.",
    content:"인너하임 관리자를 모집합니다. 시급 2만원 주 7일 근무, 4대보험 퇴직금 무",
    companyName:"인너하임 그림이네72"
  },
  {
    title:"인너하임 관리자를 모집합니다.",
    content:"인너하임 관리자를 모집합니다. 시급 2만원 주 7일 근무, 4대보험 퇴직금 무",
    companyName:"인너하임 그림이네72"
  },
]

const HomeJobSpecial = () => {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    center: true,
  };
  const router = useRouter()
  const {commercialList} = useData()

  return (
    <>
      <Slider {...settings} arrows={false}>
        {commercialList?.special?.job?.slice(0, 12).map((item, index) => (
          <div className="testimonial-block" key={`${item.id}_${index}`}>
            <div className="inner-box" style={{cursor:"pointer"}} onClick={()=>router.push(`commercial/${item.id}`)}>
              <h6>{item.companyName}</h6>
              <h4 style={{wordBreak:"keep-all"}}>{item.title}</h4>
              <div className="text" style={{lineHeight:1.4, wordBreak:"keep-all"}}>
                {`${item.content.substring(0,90)} ${item.content.legnth>90 ? "..." :""}`}
              </div>
              {/* <div className="info-box">
                <div className="thumb">
                  <img src={item.avatar} alt="testimonial" />
                </div>
                <h4 className="name">{item.name}</h4>
                <span className="designation">{item.designation}</span>
              </div> */}
            </div>
          </div>
        ))}
        {commercialList?.special?.house?.slice(0, 6).map((item, index) => (
          <div className="testimonial-block" key={index}>
            <div className="inner-box" style={{cursor:"pointer"}} onClick={()=>router.push(`commercial/${item.id}`)}>
              <h6>{item.companyName}</h6>
              <h4 style={{wordBreak:"keep-all"}}>{item.title}</h4>
              <div className="text" style={{lineHeight:1.4, wordBreak:"keep-all"}}>
                {`${item.content.substring(0,90)} ${item.content.legnth>90 ? "..." :""}`}
              </div>
              {/* <div className="info-box">
                <div className="thumb">
                  <img src={item.avatar} alt="testimonial" />
                </div>
                <h4 className="name">{item.name}</h4>
                <span className="designation">{item.designation}</span>
              </div> */}
            </div>
          </div>
        ))}
        {commercialList?.special?.car?.slice(0, 6).map((item, index) => (
          <div className="testimonial-block" key={index}>
            <div className="inner-box" style={{cursor:"pointer"}} onClick={()=>router.push(`commercial/${item.id}`)}>
              <h6>{item.companyName}</h6>
              <h4 style={{wordBreak:"keep-all"}}>{item.title}</h4>
              <div className="text" style={{lineHeight:1.4, wordBreak:"keep-all"}}>
                {`${item.content.substring(0,90)} ${item.content.legnth>90 ? "..." :""}`}
              </div>
              {/* <div className="info-box">
                <div className="thumb">
                  <img src={item.avatar} alt="testimonial" />
                </div>
                <h4 className="name">{item.name}</h4>
                <span className="designation">{item.designation}</span>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default HomeJobSpecial;
