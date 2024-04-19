import dynamic from "next/dynamic";
import Seo from "components/common/Seo";
import CarList from "components/car/CarList";
import useData from "context/data";
import { useEffect } from "react";

const Job = () => {
  const {type, setType, setSelectedQuery} = useData()

  useEffect(()=>{
    if(type!=="car"){
      setSelectedQuery({
        searchBox: "",
        jobSelect: "전체",
        locationSelect:"전체"
      })
      setType("car")
    }
  },[])
  return (
    <>
      <Seo title="중고차 - 시흥알림방" description="중고차 살 땐? 시흥알림방의 중고차 광고들을 확인해보세요!" url="https://alimbang.kr/car" />
      <CarList />
    </>
  );
};

export default dynamic(() => Promise.resolve(Job), { ssr: false });
