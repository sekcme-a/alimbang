
import { useState, useEffect } from "react";
import useData from "context/data";

const JobSelect = () => {
  const {selectedQuery, handleSelectedQuery} = useData()

  const [datePost, setDatePost] = useState([
    { id: 1, name: "전체", value: "전체", isChecked: true },
    { id: 2, name: "아파트매매", value: "아파트매매", isChecked: true },
    { id: 2, name: "아파트임대", value: "아파트임대", isChecked: true },
    { id: 2, name: "빌라매매", value: "빌라매매", isChecked: true },
    { id: 2, name: "빌라임대", value: "빌라임대", isChecked: true },
    { id: 2, name: "주택매매", value: "주택매매", isChecked: true },
    { id: 3, name: "주택임대", value: "주택임대", isChecked: true },
    { id: 4, name: "상가매매", value: "상가매매", isChecked: true },  
    { id: 5, name: "상가임대", value: "상가임대", isChecked: true },
    { id: 6, name: "공장매매", value: "공장매매", isChecked: true },
    { id: 7, name: "공장임대", value: "공장임대", isChecked: true },
    { id: 8, name: "창고매매", value: "창고매매", isChecked: true },
    { id: 9, name: "창고임대", value: "창고임대", isChecked: true },
    { id: 10, name: "기타매매", value: "기타매매", isChecked: true },
    { id: 11, name: "기타임대", value: "기타임대", isChecked: true },

  ])

  const [selected, setSelected] = useState("전체")

  const onSelectedChange = (e, index) => {
    let tempDate = datePost
    for(let i = 0; i<datePost.length; i++){
      tempDate[i] = {...tempDate[i], isChecked: false}
    }
    tempDate[index] = {...tempDate[index], isChecked: true}

    setSelected(e.target.value)
    handleSelectedQuery("jobSelect",e.target.value)
    setDatePost(tempDate)
  }



    return (
        <ul className="ui-checkbox">
            {datePost?.map((item,index) => (
                <li key={index}>
                    <label>
                        <input
                          type="radio"
                          value={item.value}
                          onChange={(e) => onSelectedChange(e, index)}
                          checked={selectedQuery.jobSelect===item.value}
                        />
                        <span></span>
                        <p>{item.name}</p>
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default JobSelect;
