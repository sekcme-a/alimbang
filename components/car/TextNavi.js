import useData from "context/data"
import { useEffect, useState } from "react"

const TextNavi = () => {
  const [text, setText] = useState("모든 광고")
  const { selectedQuery } = useData()

  useEffect(() => {
    const parts = [];

    if (selectedQuery.searchBox !== "") {
      parts.push(<strong>{`"${selectedQuery.searchBox}"`}</strong>);
      if(selectedQuery.locationSelect==='전체' && selectedQuery.jobSelect==='전체')
        parts.push(" 관련 중고차")
      else
        parts.push(" 관련 ");
    }

    if (selectedQuery.locationSelect !== "전체") {
      parts.push(<strong>{selectedQuery.locationSelect}</strong>);
      if(selectedQuery.jobSelect==="전체")
        parts.push(" 에 위치한 중고차")
      else
        parts.push("에 위치한 ");
    }

    if (selectedQuery.jobSelect !== "전체") {
      parts.push(<strong>{selectedQuery.jobSelect}</strong>);
    } 
    if(selectedQuery.searchBox==="" && selectedQuery.locationSelect==="전체" && selectedQuery.jobSelect==="전체")
      parts.push("전체 중고차 ")

    setText(parts);
  }, [selectedQuery]);

  return (
    <p style={{ fontSize: "12px" }}>
      {text}에 대한 검색결과 입니다.
    </p>
  );
}

export default TextNavi;
