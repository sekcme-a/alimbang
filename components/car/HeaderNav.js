import styles from "./HeaderNav.module.css"
import useData from "context/data";
import { useEffect, useState } from "react";

import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';

const FONT_SIZE={fontSize:"30px"}
const data = [
  {title: "현 대 ", value:"현대", icon: ()=><DirectionsCarFilledOutlinedIcon sx={FONT_SIZE}/>},
  {title: "르노코리아", value:"르노코리아", icon: ()=><DirectionsCarFilledOutlinedIcon sx={FONT_SIZE}/>},
  {title: "쌍 용", value:"쌍용", icon: ()=><DirectionsCarFilledOutlinedIcon sx={FONT_SIZE}/>},
  {title: "쉐보래(대우)", value:"쉐보래(대우)", icon: ()=><DirectionsCarFilledOutlinedIcon sx={FONT_SIZE}/>},
  {title: "기 타", value:"기타", icon: ()=><DirectionsCarFilledOutlinedIcon sx={FONT_SIZE}/>},
]

const HeaderNav = () => {
  const [selectedValue, setSelectedValue] = useState("")
  const {handleSelectedQuery, selectedQuery} = useData()

  const onIconClick = (value) => {
    //이미 선택되어있던 아이콘일 경우, 모든 선택 해제
    if(selectedValue===value){
      setSelectedValue("")
      handleSelectedQuery("jobSelect","전체")
    } else {
      setSelectedValue(value)
      handleSelectedQuery("jobSelect",value)
    }
  }

  return(
    <div className={styles.main_container}> 
      {data.map((item, index) => {
        if(selectedQuery.jobSelect===item.value)
          return(
            <div key={index} className={styles.item_container} onClick={()=>onIconClick(item.value)}>
              <div style={{color: "rgb(94, 90, 216)"}}>{item.icon()}</div>
              <p style={{color:"rgb(94, 90, 216)"}}>{item.title}</p>
            </div>
          )
        else
          return(
            <div key={index} className={styles.item_container} onClick={()=>onIconClick(item.value)}>
              <div>{item.icon()}</div>
              <p >{item.title}</p>
            </div>
          )
        }
      )}
    </div>
  )
}

export default HeaderNav