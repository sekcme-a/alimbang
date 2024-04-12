
import { useState, useEffect } from "react";
import useData from "context/data";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const LocationSelect = () => {
  const {handleSelectedQuery} = useData()
  const [locationList, setLocationList] = useState([
    { id: 1, name: "전체", value: "전체", isChecked: true },
    { id: 3, name: "대야동", value: "대야동", isChecked: false },
    { id: 4, name: "계수동", value: "계수동", isChecked: false },
    { id: 5, name: "신천동", value: "신천동", isChecked: false },
    { id: 6, name: "신현동", value: "신현동", isChecked: false },
    { id: 7, name: "방산동", value: "방산동", isChecked: false },
    { id: 8, name: "포동", value: "포동", isChecked: false },
    { id: 9, name: "미산동", value: "미산동", isChecked: false },
    { id: 10, name: "은행동", value: "은행동", isChecked: false },
    { id: 11, name: "안현동", value: "안현동", isChecked: false },
    { id: 12, name: "매화동", value: "매화동", isChecked: false },
    { id: 13, name: "도창동", value: "도창동", isChecked: false },
    { id: 14, name: "금이동", value: "금이동", isChecked: false },
    { id: 15, name: "물왕동", value: "물왕동", isChecked: false },
    { id: 16, name: "산현동", value: "산현동", isChecked: false },
    { id: 17, name: "조남동", value: "조남동", isChecked: false },
    { id: 18, name: "논곡동", value: "논곡동", isChecked: false },
    { id: 19, name: "목감동", value: "목감동", isChecked: false },
    { id: 20, name: "거모동", value: "거모동", isChecked: false },
    { id: 21, name: "군자동", value: "군자동", isChecked: false },
    { id: 22, name: "월곶동", value: "월곶동", isChecked: false },
    { id: 23, name: "정왕동", value: "정왕동", isChecked: false },
    { id: 24, name: "죽율동", value: "죽율동", isChecked: false },
    { id: 25, name: "과림동", value: "과림동", isChecked: false },
    { id: 26, name: "무지내동", value: "무지내동", isChecked: false },
    { id: 27, name: "화정동", value: "화정동", isChecked: false },
    { id: 28, name: "능곡동", value: "능곡동", isChecked: false },
    { id: 29, name: "하중동", value: "하중동", isChecked: false },
    { id: 30, name: "하상동", value: "하상동", isChecked: false },
    { id: 31, name: "광석동", value: "광석동", isChecked: false },
    { id: 32, name: "장현동", value: "장현동", isChecked: false },
    { id: 33, name: "장곡동", value: "장곡동", isChecked: false },
    { id: 34, name: "시흥기타", value: "시흥기타", isChecked: false },
    { id: 35, name: "배곧동", value: "배곧동", isChecked: false },
    { id: 36, name: "안산", value: "안산", isChecked: false },
    { id: 37, name: "인천", value: "인천", isChecked: false },
    { id: 38, name: "기타", value: "기타", isChecked: false }
  ])

  const [selected, setSelected] = useState("전체")

  // const onSelectedChange = (e, index) => {
  //   let tempDate = datePost
  //   for(let i = 0; i<datePost.length; i++){
  //     tempDate[i] = {...tempDate[i], isChecked: false}
  //   }
  //   tempDate[index] = {...tempDate[index], isChecked: true}
  //   console.log(tempDate)
  //   setSelected(e.target.value)
  //   handleSelectedQuery("locationSelect", e.target.value)
  //   setDatePost(tempDate)
  // }

  const handleChange = (e) => {
    setSelected(e.target.value)
    handleSelectedQuery("locationSelect", e.target.value)
  }


    return (
        <ul className="ui-checkbox">
            {/* {datePost?.map((item,index) => (
                <li key={index}>
                    <label>
                        <input
                          type="radio"
                          value={item.value}
                          onChange={(e) => onSelectedChange(e, index)}
                          checked={item.isChecked}
                        />
                        <span></span>
                        <p>{item.name}</p>
                    </label>
                </li>
            ))} */}
            <FormControl fullWidth>
              <InputLabel id="simple-select-label">지역</InputLabel>
              <Select
                value={selected}
                label="지역"
                onChange={handleChange}
              >
                {
                  locationList.map((item,index)=>
                    <MenuItem value={item.value} key={index}>{item.name}</MenuItem>
                  )
                }
              </Select>
            </FormControl>
            
        </ul>
    );
};

export default LocationSelect;
