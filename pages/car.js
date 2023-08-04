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
      <Seo pageTitle="Job List V3" />
      <CarList />
    </>
  );
};

export default dynamic(() => Promise.resolve(Job), { ssr: false });
