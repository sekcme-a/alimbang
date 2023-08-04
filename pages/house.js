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
      <Seo pageTitle="부동산" />
      <HouseList />
    </>
  );
};

export default dynamic(() => Promise.resolve(House), { ssr: false });
