import dynamic from "next/dynamic";
import Seo from "components/common/Seo";
import HouseList from "components/house/HouseList";
import useData from "context/data";
import { useEffect } from "react";

const House = () => {
  const {type, setType, setSelectedQuery} = useData()

  useEffect(()=>{
    if(type!=="house"){
      setSelectedQuery({
        searchBox: "",
        jobSelect: "전체",
        locationSelect:"전체"
      })
      setType("house")
    }
  },[])
  return (
    <>
      <Seo title="부동산 - 시흥알림방" description="시흥알림방에서 부동산 광고들을 한눈에 확인하세요!" url="https://alimbang.kr/house" />
      <HouseList />
    </>
  );
};

export default dynamic(() => Promise.resolve(House), { ssr: false });
