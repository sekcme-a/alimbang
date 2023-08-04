
import { useState, useEffect } from "react";
import useData from "context/data";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const LocationSelect = () => {
  const {handleSelectedQuery} = useData()
  const [locationList, setLocationList] = useState([
    { id: 1, name: "전체", value: "전체", isChecked: true },
    { id: 2, name: "고잔1,2동", value: "고잔1,2동", isChecked: false },
    { id: 3, name: "대부출장소", value: "대부출장소", isChecked: false },
    { id: 4, name: "반월동", value: "반월동", isChecked: false },
    { id: 5, name: "본오1,2,3동", value: "본오1,2,3동", isChecked: false },
    { id: 6, name: "부곡동", value: "부곡동", isChecked: false },
    { id: 7, name: "사1,2동", value: "사1,2동", isChecked: false },
    { id: 8, name: "선부1,2,3동", value: "선부1,2,3동", isChecked: false },
    { id: 9, name: "성포동", value: "성포동", isChecked: false },
    { id: 10, name: "안산동", value: "안산동", isChecked: false },
    { id: 11, name: "월피동", value: "월피동", isChecked: false },
    { id: 12, name: "원곡1,2동", value: "원곡1,2동", isChecked: false },
    { id: 13, name: "원곡본동", value: "원곡본동", isChecked: false },
    { id: 14, name: "이동", value: "이동", isChecked: false },
    { id: 15, name: "일동", value: "일동", isChecked: false },
    { id: 16, name: "초지동", value: "초지동", isChecked: false },
    { id: 17, name: "와동", value: "와동", isChecked: false },
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
