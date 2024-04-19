
import { useState, useEffect } from "react";
import useData from "context/data";

const JobSelect = () => {
  const {selectedQuery, handleSelectedQuery} = useData()

  const [datePost, setDatePost] = useState([
    { id: 1, name: "전체", value: "전체", isChecked: true },
    { id: 2, name: "기술/생산직", value: "기술/생산직", isChecked: false },
    { id: 3, name: "사무/경리", value: "사무/경리", isChecked: false },
    { id: 4, name: "전문직", value: "전문직", isChecked: false },
    { id: 5, name: "홍보", value: "홍보", isChecked: false },
    { id: 6, name: "영업직", value: "영업직", isChecked: false },
    { id: 7, name: "서비스직", value: "서비스직", isChecked: false },
    { id: 8, name: "운전직", value: "운전직", isChecked: false },
    { id: 9, name: "배달직", value: "배달직", isChecked: false },
    { id: 10, name: "현장직", value: "현장직", isChecked: false },
    { id: 11, name: "아르바이트/기타구인", value: "아르바이트/기타구인", isChecked: false },
    { id: 12, name: "요리음식업", value: "요리음식업", isChecked: false },
    { id: 13, name: "유흥서비스업", value: "유흥서비스업", isChecked: false },

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
