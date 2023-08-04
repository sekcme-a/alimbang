
import { useState, useEffect } from "react";
import useData from "context/data";

const JobSelect = () => {
  const {selectedQuery, handleSelectedQuery} = useData()

  const [datePost, setDatePost] = useState([
    { id: 1, name: "전체", value: "전체", isChecked: true },
    { id: 2, name: "현대", value: "현대", isChecked: true },
    { id: 3, name: "기아", value: "기아", isChecked: true },
    { id: 4, name: "르노코리아", value: "르노코리아", isChecked: true },
    { id: 5, name: "쌍용", value: "쌍용", isChecked: true },
    { id: 6, name: "쉐보래(대우)", value: "쉐보래(대우)", isChecked: true },
    { id: 7, name: "기타", value: "기타", isChecked: true },
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
