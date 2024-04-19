import dynamic from "next/dynamic";
import Seo from "components/common/Seo";
import JobList from "components/job/JobList";
import useData from "context/data";
import { useEffect } from "react";

const Job = () => {
  const {type, setType, setSelectedQuery} = useData()

  useEffect(()=>{
    if(type!=="job"){
      setSelectedQuery({
        searchBox: "",
        jobSelect: "전체",
        locationSelect:"전체"
      })
      setType("job")
    }
  },[])
  return (
    <>
      <Seo title="구인구직 - 시흥알림방" description="시흥알림방의 구인구직 광고들을 확인해보세요!" url="https://alimbang.kr/job" />
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(Job), { ssr: false });
