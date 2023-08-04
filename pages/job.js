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
      <Seo pageTitle="구인" />
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(Job), { ssr: false });
